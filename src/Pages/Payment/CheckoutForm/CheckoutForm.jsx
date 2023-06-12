
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import './CheckoutForm.css'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const CheckoutForm = ({ selectedClass }) => {
    
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        if (selectedClass.price > 0) {
            axiosSecure.post('/payments/create-payment-intent', { price: selectedClass?.price })
                .then(res => {
                 
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [selectedClass.price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            
            axiosSecure.patch(`/classes/seat/${selectedClass?._id}`).then(() => {
                
            }).catch(err => {
                toast.error(err?.message)
                console.log(err)})
            // save payment information to the server
            const payment = {
                email: user?.email,
               
                transactionId: paymentIntent.id,
                title: selectedClass?.title,
                classId: selectedClass?._id,
                classImage: selectedClass?.image,
                instructor: selectedClass?.instructor,
                instructorEmail: selectedClass?.instructorEmail,
                price: selectedClass?.price,
              
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    
                    if (res.data.deleteResult.deletedCount > 0) {
                       
                        Swal.fire(
                           { title: 'success',
                            showCloseButton: true
                        }
                        )
                        navigate('/dashboard/enrolled-classes')
                    }
                })
        }


    }

    return (
        <>
            <form className=" m-8 w-11/12 p-10 mx-auto items-center rounded-lg bg-purple-300/20 backdrop-blur-lg" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: { 
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";


import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { useLocation } from "react-router-dom";
const Payment = () => {
    const location = useLocation()
    const selectedClass = location?.state?.selectedClass;

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <div className="bg-purple-500/30 backdrop-blur-xl flex justify-center items-center p-5"><SectionTitle title="Payment to continue"></SectionTitle></div>

            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
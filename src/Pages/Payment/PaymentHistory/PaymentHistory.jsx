import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";



const PaymentHistory = () => {
 
    const {user} = useAuth()
    const [paid, setPaid] = useState([])
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`/payments/my-payments/${user?.email}`).then(res => {
            setPaid(res.data)
            console.log(res.data);
        })
    },[axiosSecure, user?.email])
    console.log(paid);

    //Formate date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(date);
        return formattedDate;
      };
    return (
        <div className="w-full p-10 rounded-lg bg-purple-300/20 backdrop-blur-lg" >
        <div className="overflow-auto w-full">
        {  paid.length < 1 ?
                                    <h2 className="text-3xl text-center">No payment history available !<br />
                                        <Link to="/active-classes" className="text-xl font-extralight hover:underline hover:text-blue-400">Select A class</Link>
                                    </h2> :
            <table className="table">
                <thead>
              
                    <tr>
                        <th>#</th>
                        <th>Class Image</th>
                        <th>Class title</th>
                        <th>Price</th>
                        <th>Transaction Id</th>
                        <th>Enrolled Date</th>
                    </tr>
                </thead>
                <tbody>
           {
            paid?.map((payment, index) => <tr key={payment._id}>
                <td>{index + 1}</td>
                <td> <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={payment.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div></td>
        <td>{payment.title}</td>
        {/*  */}
      
        <td className="text-center">{payment.price}</td>
        <td>{payment.transactionId}</td>
        <td>{formatDate(payment.date)}</td>
        
        
            </tr>)
           }
                </tbody>
            </table>
}
        </div>
    </div>
    );
};

export default PaymentHistory;
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const EnrolledClasses = () => {
    const { user } = useAuth();
    const [enrolled, setEnrolled] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    
    useEffect(() => {
      axiosSecure.get(`payments/enrolled-classes/${user?.email}`).then((data) => {
        setEnrolled(data.data);
        
      });
    }, [axiosSecure, user?.email]);
    return (
        <div className="w-full min-h-screen p-10 rounded-lg bg-purple-300/20 backdrop-blur-lg" >
            <div className="overflow-x-auto w-full">
          {  enrolled.length < 1 ?
                                    <h2 className="text-3xl text-center">You Not enrolled any class yet ! <br />
                                        <Link to="../../dashboard/selected-classes" className="text-xl font-extralight hover:underline hover:text-blue-400">Get a class</Link>
                                    </h2> :
                <table className="table">

                    <thead>
                  
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Title</th>
                            <th className="text-center">Instructor Details</th>
                            
                        </tr>
                    </thead>
                    <tbody>
               {
                enrolled?.map((cls, index) => <tr key={cls._id}>
                    <td>{index + 1}</td>
                    <td> <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cls.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div></td>
            <td>{cls.title}</td>
            {/*  */}
            <td className="text-center space-y-3">
           <span className="text-lg">{cls.instructor}</span>
          <br/>
          <span className="badge badge-ghost ">{cls.instructorEmail}</span>
        </td>

            
                </tr>)
               }
                    </tbody>
                </table>
}
            </div>
        </div>
    );
};

export default EnrolledClasses;
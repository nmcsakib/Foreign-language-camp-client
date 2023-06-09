import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const EnrolledClasses = () => {
    const { user } = useAuth();
    const [enrolled, setEnrolled] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    
    useEffect(() => {
      axiosSecure.get(`/enrolled-classes/${user?.email}`).then((data) => {
        setEnrolled(data.data);
        console.log(data.data);
      });
    }, [axiosSecure, user?.email]);
    return (
        <div className="w-full p-10 rounded-lg bg-purple-300/20 backdrop-blur-lg" >
            <div className="overflow-x-auto w-full">
                <table className="table">
                    <thead>
                  
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Title</th>
                            <th>Instructor Details</th>
                            
                        </tr>
                    </thead>
                    <tbody>
               {
                enrolled?.map((cls, index) => <tr key={cls._id}>
                    <td>{index + 1}</td>
                    <td> <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cls.classImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div></td>
            <td>{cls.classTitle}</td>
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
            </div>
        </div>
    );
};

export default EnrolledClasses;
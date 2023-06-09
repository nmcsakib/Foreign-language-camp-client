import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaInbox, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
    const { user } = useAuth();
    const [selected, setSelected] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    
    useEffect(() => {
      axiosSecure.get(`/selected-classes/${user?.email}`).then((data) => {
        setSelected(data.data);
        console.log(data.data);
      });
    }, [axiosSecure, user?.email]);

    const handelDelete = (id) => {
        axiosSecure.delete(`/selected-classes/${id}`).then(res => {
            
        })
    }
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
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
               {
                selected?.map((cls, index) => <tr key={cls.class._id}>
                    <td>{index + 1}</td>
                    <td> <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cls?.class?.classImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div></td>
            <td>{cls?.class?.classTitle}</td>
            {/*  */}
            <td className="text-center space-y-3">
           <span className="text-lg">{cls?.class?.instructor}</span>
          <br/>
          <span className="badge badge-ghost ">{cls?.class?.instructorEmail}</span>
        </td>

            <td className="text-center">{cls?.class?.seat || 0}</td>
            <td className="text-center">{cls?.class?.price}</td>
           
            
            <td className="btn-group">
            <Link to="/dashboard/payment" state={{selectedClass: cls}} className="btn btn-sm" title="Pay"><FaInbox/></Link>
            <button onClick={() => handelDelete(cls?.class._id)} className="btn btn-sm" title="Delete"><FaTrashAlt/></button>
            
            </td>
                </tr>)
               }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;
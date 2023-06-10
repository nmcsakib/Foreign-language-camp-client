
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaInbox, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const SelectedClasses = () => {
    const { user } = useAuth();
    
    const [axiosSecure] = useAxiosSecure();
    
 
        const {data: selected = [], isLoading, refetch} = useQuery(['selectedClass'], async()=>{
            const res = await axiosSecure.get(`/selected-classes/${user?.email}`)
            console.log(res.data);
            
            return res.data;
        }
        
        )
    

   
    const handelDelete = (id) => {
        console.log(id)
        axiosSecure.delete(`/selected-classes/${id}`).then(res => {

            console.log(res.data);
            refetch()
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
                    {
                        isLoading ? <p>Loading....</p> :
                        <>
                         <tbody>
               { 
                selected?.map((cls, index) => <tr key={cls._id}>
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
            <button onClick={() => handelDelete(cls?._id)} className="btn btn-sm" title="Delete"><FaTrashAlt/></button>
            
            </td>
                </tr>)
               }
                    </tbody>
                        </>
                    }
                   
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;
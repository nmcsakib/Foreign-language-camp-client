import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaCheck, FaTimes } from "react-icons/fa";


const AllClasses = () => {
    
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [], refetch, isLoading } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/classes`)
        console.log(res.data);
        return res.data;
    })
    const handelStatus =  (cls, status) => {
        if(status === 'denied'){
            const feedback = prompt('Why You denied the class?')
            if(feedback){
                axiosSecure.patch(`/classes/${cls._id}`, {status, feedback: feedback}).then(data => {
                    console.log(data);
                    refetch()
                  }).catch(err => console.log(err))
                  console.log(status);
            }
        } else{
            axiosSecure.patch(`/classes/${cls._id}`, {status}).then(data => {
                console.log(data);
                refetch()
              }).catch(err => console.log(err))
              console.log(status);
        }
       
    }

    return (
        <div className="w-full p-10 rounded-lg bg-purple-300/20 backdrop-blur-lg" >
            <div className="overflow-x-auto w-full">
            {  classes.length < 1 ?
                                    <h2 className="text-3xl text-center">No Classes Available ! </h2> :
                <table className="table">
                    <thead>
                  
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Title</th>
                            <th>Instructor Details</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
               {
                classes?.map((cls, index) => <tr key={cls._id}>
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

            <td className="text-center">{cls.seat || 0}</td>
            <td className="text-center">{cls.price}</td>
            {
                isLoading ? <td>Loading...</td> : <td className={`${cls.status === 'pending' ? 'text-yellow-600' : cls.status === 'approved' ? 'text-green-500': 'text-red-600'}`}>{cls.status}</td>
            }
            
            <td className="btn-group">
            <button onClick={() => handelStatus(cls, 'approved')} className="btn btn-sm" title="Approve"><FaCheck/></button>
            <button onClick={() => handelStatus(cls, 'denied')} className="btn btn-sm" title="Denied"><FaTimes/></button>
            
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

export default AllClasses;
import { FaUserCheck, FaUserEdit, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    console.log(users);
    return (
        <div className="w-5/6 p-10 rounded-lg bg-purple-300/20 backdrop-blur-lg" >
            <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        {
            user.role !== 'admin' && 
            
            <td className="btn-group">
            <button className="btn btn-sm" title="Admin"><FaUserShield/></button>
            <button className="btn btn-sm" title="Instructor"><FaUserEdit/></button>
        </td>
            
        }
      </tr>  ) 
      }
      
     </tbody>
     </table>
     </div>
     </div>
    );
};

export default AllUsers;
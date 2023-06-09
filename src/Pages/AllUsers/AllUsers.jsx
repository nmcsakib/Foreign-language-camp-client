import { FaUserEdit, FaUserShield } from "react-icons/fa";
import useUsers from "../../hooks/useUsers";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  
    const [users, refetch] = useUsers();
    console.log(users);
    const [axiosSecure] = useAxiosSecure();

    const handelActions = ([user, role])  => {
      console.log(role);
      axiosSecure.patch(`/users/admin/${user._id}`, {role}).then(data => {
        console.log(data);
        refetch()
      }).catch(err => console.log(err))
      console.log(role);
    }
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
        // users?.map(user => console.log(user.email))
        users?.map((user, index) => <tr key={user._id}>
          
          <th>{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
           <td>{user.role}</td>
        
        {
            user.role !== 'admin' && 
            
            <td className="btn-group">
            <button onClick={() => handelActions([user, 'admin'])} className="btn btn-sm" title="Admin"><FaUserShield/></button>
            <button onClick={() => handelActions([user, 'instructor'])} className="btn btn-sm" title="Instructor"><FaUserEdit/></button>
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
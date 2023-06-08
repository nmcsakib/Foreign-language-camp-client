import { FaChalkboard, FaChalkboardTeacher, FaCreditCard, FaHome, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [role] = useAdmin()
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content main-container  flex flex-col items-center justify-center">
    {/* Page content here */}

       <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-lg h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      
    <li><Link to="/"><FaHome/>HOME</Link></li>
    <hr />
     { role === 'admin' ?
        <>
        <li><Link to="/dashboard/all-users"><FaUsers/> Manage Users</Link></li>
        <li><Link to="/dashboard/all-classes"> <FaChalkboardTeacher />Manage Classes</Link></li>
        </> : role === 'instructor' ?
        <>
         <li><Link to="/dashboard/all-users"><FaChalkboard/> My Classes</Link></li>
      <li><Link to="/dashboard/add-class"> <FaChalkboardTeacher />Add a class</Link></li>
        </> :
        <>
         <li><Link to="/dashboard/all-users"><FaChalkboard/> My Selected Classes</Link></li>
      <li><Link to="/dashboard/all-classes"> <FaChalkboardTeacher />My Enrolled Classes</Link></li>
      <li><Link to="/dashboard/all-classes"> <FaCreditCard />Payment</Link></li>
        </>
      
    }
    </ul>
    
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;
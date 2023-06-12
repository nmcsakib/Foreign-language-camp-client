import { FaBars, FaChalkboard, FaChalkboardTeacher, FaCreditCard, FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const [role] = useAdmin()
    return (
        <div className="bgDark">
            <div className="drawer">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content min-h-screen relative main-container flex justify-center">
    {/* Page content here */}

       <Outlet/>
    <label htmlFor="my-drawer-2" className="btn fixed top-10 left-10 btn-primary drawer-button "><FaBars/></label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60 text-[1.1rem] h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      
    <li><NavLink className={({ isActive }) => isActive ? "text-[1.2rem] text-purple-500 transition-all z-10 focus:bg-transparent" : ""} to="/"><FaHome/>HOME</NavLink></li>
    <hr />
     { role === 'admin' ?
        <>
        <li><NavLink className={({ isActive }) => isActive ? "text-[1.2rem] text-purple-500 transition-all z-10 focus:bg-transparent" : ""} to="/dashboard/all-users"><FaUsers/> Manage Users</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-[1.2rem] text-purple-500 transition-all z-10 focus:bg-transparent" : ""} to="/dashboard/all-classes"> <FaChalkboardTeacher />Manage Classes</NavLink></li>
        </> : role === 'instructor' ?
        <>
         <li><NavLink className={({ isActive }) => isActive ? "text-[1.2rem] text-purple-500 transition-all z-10 focus:bg-transparent" : ""} to="/dashboard/my-classes"><FaChalkboard/> My Classes</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? "text-[1.2rem] text-purple-500 transition-all z-10 focus:bg-transparent" : ""} to="/dashboard/add-class"> <FaChalkboardTeacher />Add a class</NavLink></li>
        </> :
        <>
         <li><NavLink className={({ isActive }) => isActive ? "text-[1.2rem] text-purple-500 transition-all z-10 focus:bg-transparent" : ""} to="/dashboard/selected-classes"><FaChalkboard/> My Selected Classes</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? "text-[1.2rem] text-purple-500 transition-all z-10 focus:bg-transparent" : ""} to="/dashboard/enrolled-classes"> <FaChalkboardTeacher />My Enrolled Classes</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? "text-[1.2rem] text-purple-500 transition-all z-10 focus:bg-transparent" : ""} to="/dashboard/my-payments"> <FaCreditCard />Payment History</NavLink></li>
        </>
      
    }
    </ul>
    
  
  </div>
</div>
<Toaster/>
        </div>
    );
};

export default Dashboard;
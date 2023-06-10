
import {FaChalkboardTeacher, FaUsers, FaHome, FaChartBar, FaSignOutAlt, FaSignInAlt} from 'react-icons/fa'

import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
    return (
        <div>
            <div className="navbar w-3/4 z-20 lg-py-0 bg-purple-500/30 backdrop-blur-md rounded-lg fixed left-1/2 bottom-10 transform -translate-x-1/2 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     
    </div>
    <a className="btn btn-ghost normal-case text-xl">F L C</a>
  </div>
  <div className="navbar-center hidden lg:flex grow-1">
    <ul className="menu menu-horizontal space-x-5">
      <li><NavLink to="/" className={({ isActive }) => isActive ?  "transform translate-y-[-10px] rounded-lg p-3 text-md bg-purple-500 shadow inner-md " : "text-slate-900 rounded-lg p-3 text-md bg-purple-500 shadow inner-md"}  title="HOME"><FaHome className='text-2xl'/></NavLink></li>
      
      <li><NavLink to="/active-classes" className={({ isActive }) => isActive ?  "transform translate-y-[-10px] rounded-lg p-3 text-md bg-purple-500 shadow inner-md " : "text-slate-900 rounded-lg p-3 text-md bg-purple-500 shadow inner-md"}title="Instructors"><FaChalkboardTeacher className='text-2xl'/></NavLink></li>
       <li><NavLink to="/all-instructors" className={({ isActive }) => isActive ?  "transform translate-y-[-10px] rounded-lg p-3 text-md bg-purple-500 shadow inner-md " : "text-slate-900 rounded-lg p-3 text-md bg-purple-500 shadow inner-md"}title="Classes"><FaUsers className='text-2xl '/></NavLink></li>
      
      
      
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div className='transition-all flex space-x-4'>
     <NavLink to="/dashboard" className={`${({isActive}) => isActive ? "transform translate-y-[-10px]" : ""} btn btn-circle hover:bg-purple-500/30 text-slate-900 text-2xl rounded-lg p-3 text-md  inner-md text-md bg-purple-500 shadow inner-md`} ><FaChartBar/></NavLink>
     <div><img className='btn btn-circle text-2xl transform hover:translate-y-[-10px] text-md shadow inner-md' src={user?.photoURL} title={`${user.displayName}`}/></div>
     <button onClick={handleLogOut} className="btn btn-circle text-slate-900 transform hover:bg-purple-500/30 hover:translate-y-[-10px] p-3 text-2xl bg-purple-500 shadow inner-md" title="Log out"><FaSignOutAlt/></button>
      
      </div> :
      <>
      <NavLink to="/authentication" className={({ isActive }) => isActive ?  "transform translate-y-[-10px] bg-purple-500/30 btn btn-circle text-slate-900  p-3 text-2xl bg-purple-500 shadow inner-md" : "btn btn-circle text-slate-900  p-3 text-2xl bg-purple-500 shadow inner-md"}
      title="Login"><FaSignInAlt/></NavLink>
      </>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;
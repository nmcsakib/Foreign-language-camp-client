
import {FaChalkboardTeacher, FaUsers, FaHome, FaChartBar, FaSignOutAlt, FaSignInAlt} from 'react-icons/fa'

import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [role] = useAdmin()
  console.log(role);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
    return (
        <div>
            <div className="navbar w-11/12 md:w-3/4 z-20 lg-py-0 bg-purple-500/30 backdrop-blur-md rounded-lg  fixed left-1/2 bottom-10 transform -translate-x-1/2 ">
  <div className="navbar-start w-0 md:w-1/2">
   
    <a className="btn btn-ghost normal-case hidden md:block text-xl">F L C</a>
  </div>
  <div className="navbar-center flex grow-1">
    <ul className="menu menu-horizontal space-x-5">
      <li className='tooltip tooltip-bottom' data-tip="Home"><NavLink to="/" className={({ isActive }) => isActive ?  "transform translate-y-[-10px] rounded-lg  p-3 text-md bg-purple-500 shadow inner-md " : "text-slate-900 rounded-lg  p-3 text-md bg-purple-500 shadow inner-md"} ><FaHome className='text-2xl'/></NavLink></li>
      
      <li className='tooltip tooltip-bottom' data-tip="Classes"><NavLink to="/active-classes" className={({ isActive }) => isActive ?  "transform translate-y-[-10px] rounded-lg  p-3 text-md bg-purple-500 shadow inner-md " : "text-slate-900 rounded-lg  p-3 text-md bg-purple-500 shadow inner-md"}><FaChalkboardTeacher className='text-2xl'/></NavLink></li>
       <li className='tooltip tooltip-bottom' data-tip="Instructors"><NavLink to="/all-instructors" className={({ isActive }) => isActive ?  "transform translate-y-[-10px] rounded-lg  p-3 text-md bg-purple-500 shadow inner-md " : "text-slate-900 rounded-lg  p-3 text-md bg-purple-500 shadow inner-md"}><FaUsers className='text-2xl '/></NavLink></li>
      
      
      
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div className='transition-all flex space-x-4'>
     <NavLink to={ role === 'student' ? '/dashboard/enrolled-classes' : role === 'instructor' ? '/dashboard/my-classes' : '/dashboard/all-users' } data-tip="Dashboard" className={`${({isActive}) => isActive ? "transform translate-y-[-10px]" : ""} tooltip tooltip-bottom btn btn-circle hover:bg-purple-500/30 text-slate-900 text-2xl rounded-lg  p-3 text-md  inner-md text-md bg-purple-500 shadow inner-md`} ><FaChartBar/></NavLink>
     <div className='tooltip tooltip-bottom' data-tip={`${user.displayName}`}><img className='btn btn-circle text-2xl transform hover:translate-y-[-10px] text-md shadow inner-md' src={user?.photoURL} /></div>
     <button onClick={handleLogOut} data-tip="Log out" className="tooltip tooltip-bottom btn btn-circle text-slate-900 transform hover:bg-purple-500/30  p-3 text-2xl bg-purple-500 shadow inner-md" ><FaSignOutAlt/></button>
      
      </div> :
      <>
      <NavLink data-tip="Login" to="/authentication" className={({ isActive }) => isActive ?  "transform translate-y-[-10px] bg-purple-500/30 btn btn-circle text-slate-900 hover:bg-purple-500  p-3 text-2xl shadow inner-md tooltip" : "btn btn-circle hover:bg-purple-500/30 text-slate-900  p-3 text-2xl bg-purple-500 shadow tooltip inner-md"}
      ><FaSignInAlt/></NavLink>
      </>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;
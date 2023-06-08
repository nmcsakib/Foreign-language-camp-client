
import {FaChalkboardTeacher, FaUsers, FaHome, FaUser, FaChartBar} from 'react-icons/fa'
const Navbar = () => {
    return (
        <div>
            <div className="navbar w-3/4 lg-py-0 bg-purple-500/30 backdrop-blur-md rounded-lg fixed left-1/2 bottom-10 transform -translate-x-1/2 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     
    </div>
    <a className="btn btn-ghost normal-case text-xl">F L C</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-5">
      <li><span className='text-slate-900 transform hover:translate-y-[-10px] rounded-lg p-3 text-md bg-purple-500 shadow inner-md' title="HOME"><FaHome className='text-2xl'/></span></li>
      
      <li><span className='text-slate-900 transform hover:translate-y-[-10px] rounded-lg p-3 text-md bg-purple-500 shadow inner-md' title="Instructors"><FaChalkboardTeacher className='text-2xl'/></span></li>
      
      <li><span className='text-slate-900 transform hover:translate-y-[-10px] rounded-lg p-3 text-md bg-purple-500 shadow inner-md' title="Classes"><FaUsers className='text-2xl'/></span></li>
      <li><span className='text-slate-900 transform hover:translate-y-[-10px] rounded-lg p-3 text-md bg-purple-500 shadow inner-md' title="Dashboard"><FaChartBar className='text-2xl'/></span></li>
      
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-circle "><FaUser/></a>
  </div>
</div>
        </div>
    );
};

export default Navbar;
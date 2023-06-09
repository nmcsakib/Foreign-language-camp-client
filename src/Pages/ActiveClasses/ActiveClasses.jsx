import axios from "axios";
import { useEffect, useState } from "react";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ActiveClasses = ({limit}) => {
  const [axiosSecure] = useAxiosSecure()
  const [role] = useAdmin()
  const {user} = useAuth()
    const [classes, setClasses] = useState([])
    useEffect(() => {
    axios.get(`http://localhost:5000/active-classes/${ limit || 'full'}`).then(data => {
        setClasses(data.data)
        console.log(data);
    })
    },[limit])

    const handelSelect = (cls) => {
      console.log('get class', cls);
      axiosSecure.post('/selected-classes', {class: cls, email: user?.email}).then(res => {
        console.log(res);
      })
    }
    return (
  <div className="grid grid-cols-3 gap-5 w-11/12 p-10 mx-auto items-center rounded-lg bg-purple-300/20 backdrop-blur-lg">


    {
        classes?.map(cls => 
      <div key={cls._id} className={`${cls.seat !== 0 ? 'bg-green-400/30' : 'bg-red-500/30'} card border shadow-xl`}>
  <figure><img className="w-full h-48"  src={cls?.classImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2>Class - <span className="text-lg uppercase">{cls.classTitle}</span></h2>
     <span className="badge badge-outline py-2 ">{cls.instructorEmail}</span>
    
    <div className="card-actions justify-start">
     <div className="flex gap-3">
            <span className="text-amber-500 text-md">Price: ${cls.price}</span>
            <span className="text-black text-md">Seat: {cls.seat}</span>
          </div>
           <div className="card-actions">
      <button onClick={() => handelSelect(cls)} className={`${(cls.seat === 0 || role === "admin" || role === 'instructor') && 'btn-disabled'}  btn btn-outline btn-white btn-md`} >Select</button>
    </div>
    </div>
  </div>
</div> 

                )
            }
        </div>
    );
};

export default ActiveClasses;
import axios from "axios";
import { useEffect, useState } from "react";

const ActiveClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
    axios.get('http://localhost:5000/active-classes').then(data => {
        setClasses(data.data)
        console.log(data);
    })
    },[])
    return (
        <div className="grid grid-cols-3 gap-5 w-11/12 p-10 mx-auto items-center rounded-lg bg-purple-300/20 backdrop-blur-lg">
            {
                classes?.map(cls => 
                <div key={cls._id} className={`${cls.seat !== 0 ? 'bg-green-400/30' : 'bg-red-500/30'} card border shadow-xl`}>
  <figure className="p-8">
    <img className="w-full h-32 rounded-md" src={cls?.classImage} />
  </figure>
  <div className="card-body items-center text-center">
  <h2>Name: <span className="text-lg uppercase">{cls.classTitle}</span></h2>
        
          <span className="badge badge-outline py-2 ">{cls.instructorEmail}</span>
          <div className="flex gap-3">
            <span className="text-amber-500 text-md">Price: ${cls.price}</span>
            <span className="text-black text-md">Seat: {cls.seat}</span>
          </div>
    
    <div className="card-actions">
      <button className={`${cls.seat === 0 && 'disabled'} btn btn-outline btn-white btn-md`} >Select</button>
    </div>
  </div>
</div>
                )
            }
        </div>
    );
};

export default ActiveClasses;
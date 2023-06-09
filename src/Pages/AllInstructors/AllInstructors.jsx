import axios from "axios";
import { useEffect, useState } from "react";

const AllInstructors = ({limit}) => {
  
  
    const [instructors, setInstructors] = useState([])
    
    useEffect(() => {
    axios.get(`http://localhost:5000/instructors/${limit || 'full'}`).then(data => {
        setInstructors(data.data)
        console.log(data);
    })
    },[limit])
    return (
        <div className="grid grid-cols-3 gap-5 w-11/12 p-10 mx-auto items-center rounded-lg bg-purple-300/20 backdrop-blur-lg">
            {
                instructors?.map(instructor => 
                <div key={instructor._id} className="card bg-green-400/30 border shadow-xl">
  <figure className="p-8">
    <img className="w-full h-32 rounded-md" src={instructor?.photoURL} />
  </figure>
  <div className="card-body items-center text-center">
  <h2>Name: <span className="text-lg uppercase">{instructor.name}</span></h2>
        
          <span className="badge badge-outline py-2 ">{instructor.email}</span>
    
    <div className="card-actions">
      <button className="btn btn-outline btn-white">See Classes</button>
    </div>
  </div>
</div>
                )
            }
        </div>
    );
};

export default AllInstructors;
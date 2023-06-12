import axios from "axios";
import { useEffect, useState } from "react";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";


const ActiveClasses = ({ limit }) => {
  const [axiosSecure] = useAxiosSecure()
  const [role] = useAdmin()
  const { user } = useAuth()
  const [classes, setClasses] = useState([])
  useEffect(() => {
    axios.get(`https://foreign-language-camp-server.vercel.app/classes/${limit || 'full'}`).then(data => {
      setClasses(data.data)
      console.log(data);
    })
  }, [limit])

  const handelSelect = (cls) => {
   
  const {_id, ...selectedClass} = cls;
  console.log(_id, selectedClass);
    axiosSecure.post('/selected-classes', { ...selectedClass, email: user?.email }).then(res => {

      toast.success('Class selected')
      console.log(res);
    }).catch(err => {
      if (err?.response?.status === 400) {
        toast.error('Already added this class')
        return
      }
    })
  }
  return (
    <>
      <SectionTitle title={limit === 'six' ? "Our popular Classes" : "All Our Classes"} />
      {
         limit !== 'six' && <Helmet>
          <title>All Classes | Foreign-language-camp</title>
        </Helmet>
      }
      <div className="grid md:grid-cols-3 gap-5 w-11/12  p-10 mx-auto items-center rounded-lg bg-purple-300/20 backdrop-blur-lg">


        {
          classes?.map(cls =>
            <div key={cls._id} className={`${cls.seat !== 0 ? 'bg-green-400/30' : 'bg-red-500/30'} card border shadow-xl`}>
              <figure><img className="w-96 md:w-full h-48" src={cls?.image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="text-lg uppercase">{cls.title}</h2>
                <span className="badge badge-outline py-2 ">{cls.instructorEmail}</span>

                <div className="card-actions justify-start">
                  <div className="flex gap-3">
                    <span className="text-amber-500 text-md">Price: ${cls.price}</span>
                    <span className="text-black text-md">Seat: {cls.seat}</span>
                    <span className="text-white text-md">Students: {cls.totalStudents}</span>
                  </div>
                  <div className="card-actions">
                    <button onClick={() => handelSelect(cls)} className={`${(cls.seat === 0 || role === "admin" || role === 'instructor') && 'btn-disabled'}  btn btn-outline btn-primary btn-white btn-md`} >Select</button>
                  </div>
                </div>
              </div>
            </div>

          )
        }
      </div>
    </>
  );
};

export default ActiveClasses;
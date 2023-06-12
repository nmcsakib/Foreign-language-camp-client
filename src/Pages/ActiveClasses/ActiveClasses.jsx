import axios from "axios";
import { useEffect, useState } from "react";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const ActiveClasses = ({ limit }) => {
  const [axiosSecure] = useAxiosSecure(); // Custom hook for making secure axios requests
  const [role] = useAdmin(); // Custom hook for checking user role (admin or instructor)
  const { user } = useAuth(); // Custom hook for accessing user information from the authentication context
  const [classes, setClasses] = useState([]); // State variable to store the fetched classes

  useEffect(() => {
    // Fetching classes from the server based on the specified limit
    axios.get(`https://foreign-language-camp-server.vercel.app/classes/${limit || 'full'}`)
      .then(data => {
        setClasses(data.data); // Updating the classes state with the fetched data
      })
      .catch(error => {
        console.log(error); // Handling any errors that occur during the fetch request
      });
  }, [limit]); // Triggering the effect whenever the 'limit' prop changes

  const handleSelect = (cls) => {
    const { _id, ...selectedClass } = cls; // Destructuring the class object and excluding the '_id' property
    console.log(_id);
    // Sending a secure POST request to add the selected class to the user's profile
    axiosSecure.post('/selected-classes', { ...selectedClass, email: user?.email })
      .then(() => {
        toast.success('Class selected'); // Displaying a success toast message
      })
      .catch(err => {
        if (err?.response?.status === 400) {
          toast.error('Already added this class'); // Displaying an error toast message if the class is already added
          return;
        }
      });
  };

  return (
    <>
      <SectionTitle title={limit === 'six' ? "Our Popular Classes" : "All Our Classes"} /> 
      {limit !== 'six' && (
        <Helmet>
          <title>All Classes | Foreign-language-camp</title> 
        </Helmet>
      )}
      <div className="grid md:grid-cols-3 md:mx-auto gap-5 w-11/12 md:p-10 px-5 items-center rounded-lg bg-purple-300/20 backdrop-blur-lg">
        {classes?.map(cls => (
          <div key={cls._id} className={`${cls.seat !== 0 ? 'bg-green-400/30' : 'bg-red-500/30'} w-3/4 md:w-full card border shadow-xl`}>
            <figure><img className="w-full h-48" src={cls?.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="text-lg uppercase">{cls.title}</h2>
              <span className="badge badge-outline py-2">{cls.instructorEmail}</span>

              <div className="card-actions justify-start">
                <div className="flex gap-3">
                  <span className="text-amber-500 text-md">Price: ${cls.price}</span>
                  <span className="text-black text-md">Seat: {cls.seat}</span>
                  <span className="text-white text-md">Students: {cls.totalStudents}</span>
                </div>
                <div className="card-actions">
                  <button
                    onClick={() => handleSelect(cls)}
                    className={`${(cls.seat === 0 || role === "admin" || role === 'instructor') && 'btn-disabled'} btn btn-outline btn-primary btn-white btn-md`}
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActiveClasses;

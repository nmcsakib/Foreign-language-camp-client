import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const AllInstructors = ({ limit }) => {


  const [instructors, setInstructors] = useState([])

  useEffect(() => {
    axios.get(`https://foreign-language-camp-server.vercel.app/instructors/${limit || 'full'}`).then(data => {
      setInstructors(data.data)

    })
  }, [limit])
  return (
    <>
      {
        limit !== 'six' && <Helmet>
          <title>All Instructors | Foreign-language-camp</title>
        </Helmet>
      }
      <SectionTitle title={limit === 'six' ? "Our popular Instructors" : " Our All Instructors"} />
      <div className="grid md:grid-cols-3 gap-5 w-11/12 p-10 mx-auto items-center rounded-lg bg-purple-300/20 backdrop-blur-lg">
        {
          instructors?.map(instructor =>
            <div key={instructor._id} className="card w-3/4 md:w-full bg-green-400/30 border shadow-xl">
              <figure className="p-8">
                <img className=" md:w-full h-32 rounded-md" src={instructor?.photoURL} />
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
    </>
  );
};

export default AllInstructors;
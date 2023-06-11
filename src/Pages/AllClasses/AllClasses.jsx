import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaCheck, FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const AllClasses = () => {

  const [axiosSecure] = useAxiosSecure()


  const { data: classes = [], refetch, isLoading } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get(`/classes`)
    console.log(res.data);
    return res.data;
  })
  const [feedbackValue, setFeedbackValue] = useState('f')
  console.log(feedbackValue);


  const handelStatus = (cls, status) => {
    if (status === 'denied') {
      toast((t) => (
        <span>

          <label className="label">
            <span className="label-text">Give Your Feedback.</span>
          </label>
          <input type="text" onChange={(e) => setFeedbackValue(e.target.value)} placeholder="Type here" className="input input-primary input-bordered w-5/6 max-w-xs" />
          <button className='btn btn-primary btn-sm' data-tip="Feedback" onClick={() => { handelFeedback(t) }}>
            Ok
          </button>
        </span>
      ));



    } else {
      axiosSecure.patch(`/classes/${cls._id}`, { status }).then(data => {
        console.log(data);
        toast.success('class added successfully')
        refetch()
      }).catch(err => console.log(err))
      console.log(status);
    }
    const handelFeedback = (t) => {
      console.log('hello world', feedbackValue);

      if (feedbackValue !== 'f') {

        axiosSecure.patch(`/classes/${cls._id}`, { status, feedback: feedbackValue }).then(data => {
          console.log(data);
          toast('Denied')

          refetch()
        }).catch(err => {
          toast.error(err?.message)
        })
        console.log(status);

      }
      toast.dismiss(t.id)
    }
  }

  return (
    <>
    <div className="w-full p-10 rounded-lg bg-purple-300/20 backdrop-blur-lg" >
    <SectionTitle title="All Classes"/>
      <div className="overflow-x-scroll w-full">
        {classes.length < 1 ?
          <h2 className="text-3xl text-center">No Classes Available ! </h2> :
          <table className="table">
            <thead>

              <tr>
                <th>#</th>
                <th>Class Image</th>
                <th>Title</th>
                <th>Instructor Details</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                classes?.map((cls, index) => <tr key={cls._id}>
                  <td>{index + 1}</td>
                  <td> <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div></td>
                  <td>{cls.title}</td>
                  {/*  */}
                  <td className="text-center space-y-3">
                    <span className="text-lg">{cls.instructor}</span>
                    <br />
                    <span className="badge badge-ghost ">{cls.instructorEmail}</span>
                  </td>

                  <td className="text-center">{cls.seat || 0}</td>
                  <td className="text-center">{cls.price}</td>
                  {
                    isLoading ? <td>Loading...</td> : <td className={`${cls.status === 'pending' ? 'text-yellow-600' : cls.status === 'approved' ? 'text-green-500' : 'text-red-600'}`}>{cls.status}</td>
                  }

                  <td className="btn-group">
                    <button onClick={() => handelStatus(cls, 'approved')} className={cls.status !== 'pending' ? 'btn btn-sm btn-disabled bg-opacity-50' : "btn btn-sm tooltip"} data-tip="Approve" ><FaCheck /></button>
                    <button onClick={() => handelStatus(cls, 'denied')} className={cls.status !== 'pending' ? 'btn btn-sm btn-disabled bg-opacity-50' : "btn btn-sm tooltip"} data-tip="Deny" ><FaTimes /></button>

                  </td>
                </tr>)
              }
            </tbody>
          </table>
        }
      </div>
    </div>
    </>
  );
};

export default AllClasses;


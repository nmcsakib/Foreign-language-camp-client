import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEnvelopeOpen, FaPenSquare } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const InstructorsClasses = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/classes/instructor/${user?.email}`)
        console.log(res.data);
        return res.data;
    })
    const handelFeedback = (feedback) => {

        Swal.fire({

            title: feedback,
            showConfirmButton: true,

        })
    }
    return (

        <div className="w-full p-10 rounded-lg bg-purple-300/20 backdrop-blur-lg" >
            <div className="overflow-x-auto w-full">
                {classes.length < 1 ?
                    <h2 className="text-3xl text-center">No class is added by you yet ! <br />
                        <Link to="/dashboard/add-class" className="text-xl font-extralight hover:underline hover:text-blue-400">Add a class</Link>
                    </h2> :
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Enrolled <br /> Students</th>
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
                                    <td className={`${cls.status === 'pending' ? 'text-yellow-600' : cls.status === 'approved' ? 'text-green-500' : 'text-red-600'}`}>{cls.status}</td>
                                    <td className="text-center">{cls.totalStudents || 0}</td>

                                    {
                                        cls.status !== 'denied' ?
                                            <td className="btn-group">
                                                <button className="btn btn-sm tooltip tooltip-left" data-tip="Update"><FaPenSquare /></button>

                                            </td> :
                                            <td className="btn-group">
                                                <button onClick={() => handelFeedback(cls?.feedback)} className="btn btn-sm tooltip tooltip-left" data-tip="Feedback"><FaEnvelopeOpen /></button>

                                            </td>
                                    }
                                </tr>)
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

export default InstructorsClasses;
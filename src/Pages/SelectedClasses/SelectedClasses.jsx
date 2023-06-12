
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaCreditCard, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const SelectedClasses = () => {
    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();


    const { data: selected = [], isLoading, refetch } = useQuery(['selectedClass'], async () => {
        const res = await axiosSecure.get(`/selected-classes/${user?.email}`).catch(err => console.log(err))
        console.log(res.data);

        console.log('isLoading 18', isLoading);
        return res.data;
    }

    )



    const handelDelete = (id) => {
        console.log(id)
        axiosSecure.delete(`/selected-classes/${id}`, {
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
              // Other headers if needed
            } } ).then(res => {
                if(res.data.deletedCount > 0){
                    toast.success('Deleted Successful')
                }
            console.log(res.data);
            console.log('isLoading', isLoading);
            refetch()
        }).catch(err => console.log(err))


    }



    return (
        <div className="w-full mx-auto min-h-screen md:w-11/12 p-10 rounded-lg bg-purple-300/20 backdrop-blur-lg" >
            <SectionTitle title="Your Selected Classes"/>
            <div className="overflow-x-auto w-full">

                {
                    isLoading ? <p className="text-center">Loading....</p> :

                        <table className="table">


                            {
                                selected.length < 1 ?
                                    <h2 className="text-3xl text-center">You selected No classes ! <br />
                                        <Link to="/active-classes" className="text-xl font-extralight hover:underline hover:text-blue-400">Select A class</Link>
                                    </h2> :
                                    <>

                                        <thead>

                                            <tr>
                                                <th>#</th>
                                                <th>Class Image</th>
                                                <th>Title</th>
                                                <th>Instructor Details</th>
                                                <th>Available seats</th>
                                                <th>Price</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
        {
            selected?.map((cls, index) => <tr key={cls._id}>
                <td>{index + 1}</td>
                <td> <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={cls?.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div></td>
                <td>{cls?.title}</td>
                {/*  */}
                <td className="text-center space-y-3">
                    <span className="text-lg">{cls?.instructor}</span>
                    <br />
                    <span className="badge badge-ghost ">{cls?.instructorEmail}</span>
                </td>

                <td className="text-center">{cls?.seat || 0}</td>
                <td className="text-center">{cls?.price}</td>


                <td className="btn-group">
                    <Link to="/dashboard/payment" state={{ selectedClass: cls }} className="btn btn-sm pt-2 tooltip tooltip-left" data-tip="Pay"><FaCreditCard /></Link>
                    <button onClick={() => handelDelete(cls?._id)} className="btn btn-sm tooltip" data-tip="Delete"><FaTrashAlt /></button>

                                                    </td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </>
                            }

                        </table>

                }


            </div>
        </div>
    );
};

export default SelectedClasses;
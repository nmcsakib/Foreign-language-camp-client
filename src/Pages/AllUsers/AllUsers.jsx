import { FaUserEdit, FaUserShield } from "react-icons/fa";
import useUsers from "../../hooks/useUsers";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const [users, refetch] = useUsers();
  const [axiosSecure] = useAxiosSecure();

  const handleActions = ([user, role]) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`, { role })
      .then((data) => {
        console.log(data);
        refetch();
      })
      .catch((err) => {
        toast.error(err?.message);
        console.log(err);
      });
  };

  return (
    <>
      <div className="w-11/12 mx-auto p-10 rounded-lg bg-purple-300/20 backdrop-blur-lg">
        <SectionTitle title="All Users" />
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  {user.role !== "admin" && (
                    <td className="btn-group">
                      <button
                        onClick={() => handleActions([user, "admin"])}
                        className={
                          user.role === "admin"
                            ? "btn btn-sm btn-disabled bg-opacity-60"
                            : "btn btn-sm tooltip"
                        }
                        data-tip="Admin"
                      >
                        <FaUserShield />
                      </button>
                      <button
                        onClick={() => handleActions([user, "instructor"])}
                        className={
                          user.role === "instructor"
                            ? "btn btn-sm btn-disabled bg-opacity-60"
                            : "btn btn-sm tooltip"
                        }
                        data-tip="Instructor"
                      >
                        <FaUserEdit />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;

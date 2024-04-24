import axios from "axios";
import { Helmet } from "react-helmet-async";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUserPage = () => {
  const navigation = useNavigation();

  const { data: user } = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;
    const status = e.target.status.value;

    const users = { name, email, gender, status };

    try {
      const response = await axios.put(
        `https://user-management-system-server-pearl.vercel.app/users/${user?._id}`,
        users
      );
      const { data } = response;
      //   console.log(data);
      if (data?.modifiedCount) {
        Swal.fire({
          title: "Updated!",
          text: "User information has been updated.",
          icon: "success",
        });
      }
    } catch {
      Swal.fire({
        title: "Error!",
        text: "Failed To Update",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>Update User</title>
      </Helmet>
      <section>
        <div className="container mx-auto px-4 py-2">
          {navigation.state === "loading" ? (
            <h2 className="text-xl text-[#05D2A0]">Loading....</h2>
          ) : (
            <div className="border-4 border-[#6AA84F]">
              <h1 className="text-center py-4 bg-[#05D2A0] text-[#1A5A53] text-2xl font-bold">
                User Management System
              </h1>
              <div className="min-h-[80vh] flex justify-center items-center">
                <div className="container p-2 mx-auto sm:p-4 space-y-5 lg:p-10">
                  <Link to="/">
                    <button className="flex items-center gap-1 text-[#773BE3] px-4 py-2 shadow-lg font-bold border">
                      All Users <FaAngleDoubleRight />
                    </button>
                  </Link>
                  <div>
                    <h2 className="text-center text-[#525659] text-2xl font-black">
                      Update User
                    </h2>
                    <p className="text-center text-[#BDC6D0] font-semibold italic">
                      Use the below form to update information
                    </p>
                    <form
                      className="space-y-4 text-lg text-[#BDC6D0] font-medium"
                      onSubmit={handleSubmit}
                    >
                      <div className="space-y-2">
                        <label>Name</label>
                        <input
                          className="w-full border-2 p-3 text-[#525659]"
                          type="text"
                          name="name"
                          placeholder="Name"
                          defaultValue={user?.name || "None"}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label>Email</label>
                        <input
                          className="w-full border-2 p-3 text-[#525659]"
                          type="email"
                          name="email"
                          placeholder="Email"
                          defaultValue={user?.email || "None"}
                          required
                        />
                      </div>
                      <div>
                        <label>Gender</label>
                        <input
                          className="ml-4 mr-2"
                          type="radio"
                          name="gender"
                          value="Male"
                          defaultChecked={user?.gender === "Male"}
                          required
                        />
                        <label className="font-semibold text-[#525659]">
                          Male
                        </label>
                        <input
                          className="ml-4 mr-2"
                          type="radio"
                          name="gender"
                          value="Female"
                          defaultChecked={user?.gender === "Female"}
                          required
                        />
                        <label className="font-semibold text-[#525659]">
                          Female
                        </label>
                      </div>
                      <div>
                        <label>Status</label>
                        <input
                          className="ml-4 mr-2"
                          type="radio"
                          name="status"
                          value="Active"
                          defaultChecked={user?.status === "Active"}
                          required
                        />
                        <label className="font-semibold text-[#525659]">
                          Active
                        </label>
                        <input
                          className="ml-4 mr-2"
                          type="radio"
                          name="status"
                          value="Inactive"
                          defaultChecked={user?.status === "Inactive"}
                          required
                        />
                        <label className="font-semibold text-[#525659]">
                          Inactive
                        </label>
                      </div>
                      <button
                        className="bg-[#05D2A0] text-[#525659] py-2 w-full"
                        type="submit"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default UpdateUserPage;

import axios from "axios";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewUserPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;
    const status = e.target.status.value;

    const users = { name, email, gender, status };

    try {
      const response = await axios.post(
        "https://user-management-system-server-pearl.vercel.app/users",
        users
      );
      // console.log(response);
      const { data } = response;

      if (data?.insertedId) {
        // console.log("Data Inserted Successfully");
        Swal.fire({
          title: "Success",
          text: "Data Inserted Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
    } catch (err) {
      // console.log("Failed To Data Insert", err);
      Swal.fire({
        title: "Error!",
        text: "Failed To Data Insert",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <section>
      <div className="container mx-auto px-4 py-2">
        <div className="border-4 border-[#6AA84F]">
          <h1 className="text-center py-4 bg-[#05D2A0] text-[#1A5A53] text-2xl font-bold">
            User Management System
          </h1>
          <div className="min-h-[80vh] flex justify-center items-center">
            <div className="container p-2 mx-auto sm:p-4 space-y-5 lg:p-10">
              <Link to="/">
                <button className="flex items-center gap-1 text-[#773BE3] px-4 py-2 shadow-lg font-bold border">
                  <RiArrowLeftDoubleFill className="text-xl" /> All Users
                </button>
              </Link>
              <div>
                <h2 className="text-center text-[#525659] text-2xl font-black">
                  New User
                </h2>
                <p className="text-center text-[#BDC6D0] font-semibold italic">
                  Use the below form to create a new account
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
                      required
                    />
                    <label className="font-semibold text-[#525659]">Male</label>
                    <input
                      className="ml-4 mr-2"
                      type="radio"
                      name="gender"
                      value="Female"
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
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewUserPage;

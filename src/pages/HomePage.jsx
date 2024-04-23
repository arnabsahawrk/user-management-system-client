import { Helmet } from "react-helmet-async";
import { FaUser } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdEdit } from "react-icons/md";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <div className="container mx-auto px-4 py-2">
          <div className="border-4 border-[#6AA84F]">
            <h1 className="text-center py-4 bg-[#05D2A0] text-[#1A5A53] text-2xl font-bold">
              User Management System
            </h1>
            <div className="min-h-[80vh] flex justify-center items-center">
              <div className="container p-2 mx-auto sm:p-4 text-gray-100 space-y-5 lg:p-10">
                <button className="flex items-center gap-3 text-[#773BE3] px-4 py-2 shadow-lg font-bold border">
                  New User <FaUser />
                </button>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col />
                      <col />
                      <col className="w-24" />
                    </colgroup>
                    <thead className="bg-[#282D41] text-base">
                      <tr className="text-left">
                        <th className="p-3">ID</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">@Email</th>
                        <th className="p-3">Gender</th>
                        <th className="p-3">Status</th>
                        <th className="p-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-opacity-20 border-gray-700 bg-slate-50 text-[#282D41] font-bold text-sm">
                        <td className="p-3">
                          <p>1</p>
                        </td>
                        <td className="p-3">
                          <p>Arnab Saha</p>
                        </td>
                        <td className="p-3">
                          <p>arnabsahawrk@gmail.com</p>
                        </td>
                        <td className="p-3">
                          <p>Male</p>
                        </td>
                        <td className="p-3">
                          <p>Active</p>
                        </td>
                        <td className="p-3 ml-4 text-right flex justify-between items-center gap-4">
                          <button className="flex items-center gap-3 text-[#773BE3] px-2.5 py-1.5 shadow-md font-bold border">
                            <MdEdit />
                          </button>
                          <button className="flex items-center gap-3 text-[#773BE3] px-2.5 py-1.5 shadow-md font-bold border">
                            <ImCross />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

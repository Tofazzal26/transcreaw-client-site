import { useQuery } from "@tanstack/react-query";
import AllUsersTable from "./AllUsersTable";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: allUserData = [] } = useQuery({
    queryKey: ["allUserData"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/allUser`, {
        withCredentials: true,
      });
      return result.data;
    },
  });

  return (
    <div>
      <div className="bg-[#ffffff] mt-6">
        <div className="p-12">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="font-bold text-base text-gray-600">
                    User Name
                  </th>
                  <th className="font-bold text-base text-gray-600">
                    Phone Number
                  </th>
                  <th className="font-bold text-base text-gray-600">
                    Total Parcel Booked
                  </th>
                  <th className="font-bold text-base text-gray-600">Status</th>
                  <th className="font-bold text-base text-gray-600">
                    Make Delivery Men
                  </th>
                  <th className="font-bold text-base text-gray-600">
                    Make Admin
                  </th>
                </tr>
              </thead>
              <tbody>
                {allUserData.map((allUser) => (
                  <AllUsersTable key={allUser._id} allUser={allUser} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

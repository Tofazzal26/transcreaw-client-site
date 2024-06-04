import { useQuery } from "@tanstack/react-query";
import AllUsersTable from "./AllUsersTable";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { refetch, data: allUserData = [] } = useQuery({
    queryKey: ["allUserData"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/allUser`, {
        withCredentials: true,
      });
      return result.data;
    },
  });

  const handleMakeDeliveryMen = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be Deliverymen",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deliverymen it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const Delivery = "Delivery Man";
        const res = await axiosSecure.patch(
          `/userRoleUpdateDelivery/${id}`,
          { Delivery },
          { withCredentials: true }
        );
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deliverymen!",
            text: "Change To Deliverymen.",
            icon: "success",
          });
        }
      }
    });
  };

  const handleMakeAdmin = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Admin this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Admit it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const changeRole = "Admin";
        const res = await axiosSecure.patch(
          `/userRoleUpdateAdmin/${id}`,
          { changeRole },
          { withCredentials: true }
        );
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Admin!",
            text: "Change To Admin.",
            icon: "success",
          });
        }
      }
    });
  };

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
                  <AllUsersTable
                    key={allUser._id}
                    allUser={allUser}
                    handleMakeAdmin={handleMakeAdmin}
                    handleMakeDeliveryMen={handleMakeDeliveryMen}
                  />
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

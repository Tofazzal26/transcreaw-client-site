import { useContext } from "react";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import useAxiosSecure from "./../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import MyDeliveryTable from "./MyDeliveryTable";
import Swal from "sweetalert2";

const MyDeliveryList = () => {
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();

  const { data: AssignDelivery = [] } = useQuery({
    queryKey: ["Assign", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/assignDelivery/${user?.email}`);
      return res.data;
    },
  });

  const handleAlreadyCancel = () => {
    Swal.fire("Already Canceled");
  };

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't  to Cancel this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const newStatus = "Cancelled";
        const result = await axiosSecure.patch(
          `/deliveryManCancel/${id}`,
          { newStatus },
          { withCredentials: true }
        );
        console.log(result.data);
        if (result.data.modifiedCount > 0) {
          Swal.fire({
            title: "Canceled!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  console.log(AssignDelivery);

  return (
    <div className="bg-[#ffffff] mt-6">
      <div className="p-12">
        <h1 className="text-2xl font-semibold mb-6 uppercase text-center">
          My Delivery List
        </h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="font-semibold text-[15px] text-black">
                    Booked User Name
                  </th>
                  <th className="font-semibold text-[15px] text-black">
                    Receiver Name
                  </th>
                  <th className="font-semibold text-[15px] text-black">
                    Booked User Phone
                  </th>
                  <th className="font-semibold text-[15px] text-black">
                    Requested Delivery Date
                  </th>
                  <th className="font-semibold text-[15px] text-black">
                    Approximate Delivery Date
                  </th>
                  <th className="font-semibold text-[15px] text-black">
                    Receiver Phone Number
                  </th>
                  <th className="font-semibold text-[15px] text-black">
                    Receivers Address
                  </th>
                  <th className="font-semibold text-[15px] text-black">
                    Location
                  </th>
                  <th className="font-semibold text-[15px] text-black">
                    Action
                  </th>
                  <th className="font-semibold text-[15px] text-black">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {AssignDelivery.map((assignData, indx) => (
                  <MyDeliveryTable
                    key={assignData._id}
                    indx={indx}
                    assignData={assignData}
                    handleCancel={handleCancel}
                    handleAlreadyCancel={handleAlreadyCancel}
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

export default MyDeliveryList;

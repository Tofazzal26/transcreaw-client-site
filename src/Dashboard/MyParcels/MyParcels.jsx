import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import ParcelTable from "./ParcelTable";
import Swal from "sweetalert2";

const MyParcels = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = useContext(AuthContext);

  const { refetch, data: userBook = [] } = useQuery({
    queryKey: ["bookParcel"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/bookParcel/${user?.email}`, {
        withCredentials: true,
      });
      return result.data;
    },
  });

  const handleReviewAdd = () => {};

  const handleWaitForDelivery = () => {
    Swal.fire("Waiting For Delivered");
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Cancel this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const NewStatus = "Cancelled";
        const result = await axiosSecure.patch(
          `/bookParcel/${id}`,
          { NewStatus },
          {
            withCredentials: true,
          }
        );
        console.log(result.data);
        if (result.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Canceled!",
            text: "Your file has been Canceled.",
            icon: "success",
          });
        }
      }
    });
  };

  const totalPrice = userBook.reduce(
    (current, price) => current + price.weightPrice,
    0
  );

  return (
    <div className="bg-[#ffffff] mt-6">
      <div className="p-12">
        <h1 className="text-2xl font-semibold mb-6 uppercase text-center">
          My Parcel
        </h1>
        <div className="flex justify-between my-2">
          <h1 className="text-xl font-semibold mb-6 uppercase">
            Total Price : {totalPrice}$
          </h1>
          <span>
            <button className="text-xl px-4 py-1 bg-[#0984e2] rounded-md text-white">
              Pay
            </button>
          </span>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th className="text-[16px]">Parcel Type</th>
                  <th className="text-[16px]">Requested Date</th>
                  <th className="text-[16px]">Booking Date</th>
                  <th className="text-[16px]">Approximate Date</th>
                  <th className="text-[16px]">Delivery Men ID</th>
                  <th className="text-[16px]">Booking Status</th>
                  <th className="text-[16px]">Update</th>
                  <th className="text-[16px]">Review</th>
                  <th className="text-[16px]">Cancel</th>
                </tr>
              </thead>
              <tbody>
                {userBook.map((bookData) => (
                  <ParcelTable
                    key={bookData._id}
                    bookData={bookData}
                    handleDelete={handleDelete}
                    handleWaitForDelivery={handleWaitForDelivery}
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

export default MyParcels;

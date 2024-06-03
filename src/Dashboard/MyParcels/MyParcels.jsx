import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import ParcelTable from "./ParcelTable";

const MyParcels = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = useContext(AuthContext);

  const { data: userBook = [] } = useQuery({
    queryKey: ["bookParcel"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/bookParcel/${user?.email}`, {
        withCredentials: true,
      });
      return result.data;
    },
  });

  return (
    <div className="bg-[#ffffff] mt-6">
      <div className="p-12">
        <h1 className="text-2xl font-semibold mb-6 uppercase text-center">
          My Parcel
        </h1>
        <div className="flex justify-between my-2">
          <h1 className="text-xl font-semibold mb-6 uppercase">
            Total Price :
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
                  <th className="text-[16px]">Cancel</th>
                </tr>
              </thead>
              <tbody>
                {userBook.map((bookData) => (
                  <ParcelTable key={bookData._id} bookData={bookData} />
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
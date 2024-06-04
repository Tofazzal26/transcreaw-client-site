import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import AllParcelTable from "./AllParcelTable";

const AllParcels = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allParcelManage = [] } = useQuery({
    queryKey: ["allParcel"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUserParcel", {
        withCredentials: true,
      });
      return res.data;
    },
  });

  return (
    <div>
      <div className="bg-[#ffffff] mt-6">
        <div className="p-12">
          <h1 className="text-2xl font-semibold mb-6 uppercase text-center">
            All Parcels
          </h1>

          <div>
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr>
                    <th className="text-[16px]">User Name</th>
                    <th className="text-[16px]">User Phone</th>
                    <th className="text-[16px]">Booking Date</th>
                    <th className="text-[16px]">Requested Date</th>
                    <th className="text-[16px]">Cost</th>
                    <th className="text-[16px]">Status</th>
                    <th className="text-[16px]">Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {allParcelManage.map((parcel) => (
                    <AllParcelTable key={parcel._id} parcel={parcel} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllParcels;

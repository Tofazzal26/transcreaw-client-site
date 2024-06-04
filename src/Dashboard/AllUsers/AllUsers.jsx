import AllUsersTable from "./AllUsersTable";

const AllUsers = () => {
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
                  <th className="font-bold text-base text-gray-600">
                    Total Spent Amount
                  </th>
                  <th className="font-bold text-base text-gray-600">
                    Make Delivery Men
                  </th>
                  <th className="font-bold text-base text-gray-600">
                    Make Admin
                  </th>
                </tr>
              </thead>
              <tbody>
                <AllUsersTable />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

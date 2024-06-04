const AllUsersTable = ({ allUser }) => {
  const { name, phone, Role, TotalBookCount } = allUser || {};

  return (
    <>
      <tr>
        <td>
          <h1 className="font-semibold text-gray-500">{name}</h1>
        </td>
        <td>
          <h2 className="font-semibold text-gray-500">{phone}</h2>
        </td>
        <td>
          <h2 className="font-semibold text-gray-500">{TotalBookCount}</h2>
        </td>
        <td>
          <h2 className="font-semibold text-gray-500">{Role}</h2>
        </td>
        <td>
          <h2 className="font-semibold ">
            <button className="bg-blue-400 px-4 py-2 text-white rounded-md">
              Delivery Men
            </button>
          </h2>
        </td>
        <td>
          <h2 className="font-semibold">
            <button className="bg-blue-400 px-4 py-2 text-white rounded-md">
              Admin
            </button>
          </h2>
        </td>
      </tr>
    </>
  );
};

export default AllUsersTable;

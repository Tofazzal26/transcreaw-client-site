const AllParcelTable = ({ parcel }) => {
  const { BookingDate, name, phone, requestDate, weightPrice, status } =
    parcel || {};

  return (
    <>
      <tr>
        <td className="font-medium text-[14px]">{name}</td>
        <td className="font-medium text-[14px]">{phone}</td>
        <td className="font-medium text-[14px]">{BookingDate}</td>
        <td className="font-medium text-[14px]">{requestDate}</td>
        <td className="font-medium text-[14px]">{weightPrice}$</td>
        <td className="font-medium text-[14px]">{status}</td>
        <td className="font-medium text-[14px]">
          <button className="bg-[#0984e2] px-4 py-2 rounded-md text-white">
            Manage
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllParcelTable;

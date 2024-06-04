import { RiDeleteBin5Fill } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const ParcelTable = ({ bookData, handleDelete }) => {
  const {
    parcelType,
    requestDate,
    BookingDate,
    status,
    _id,
    ApproximateDate,
    DeliveryMenID,
  } = bookData || {};

  return (
    <>
      <tr>
        <td className="font-medium text-[14px]">{parcelType}</td>
        <td className="font-medium text-[14px]">{requestDate}</td>
        <td className="font-medium text-[14px]">{BookingDate}</td>
        <td className="font-medium text-[14px]">{ApproximateDate}</td>
        <td className="font-medium text-[14px]">{DeliveryMenID}</td>
        <td className="font-medium text-[14px]">
          <button className="bg-orange-200 rounded-md px-4 py-2">
            {status}
          </button>
        </td>
        <td className="font-medium text-[14px]">
          {status === "Pending" ? (
            <NavLink to={`/dashboard/parcelUpdate/${_id}`}>
              <button className="bg-green-500 px-4 rounded-md py-2">
                <HiPlus size={20} color="#ffffff" />
              </button>
            </NavLink>
          ) : (
            <button className="bg-green-500 px-4 rounded-md py-2">
              <HiPlus size={20} color="#ffffff" />
            </button>
          )}
        </td>
        <td className="font-medium text-[14px]">
          {status === "Pending" ? (
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-500 px-4 rounded-md py-2"
            >
              <RiDeleteBin5Fill size={20} color="#ffffff" />
            </button>
          ) : (
            <button className="bg-red-500 px-4 rounded-md py-2">
              <RiDeleteBin5Fill size={20} color="#ffffff" />
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default ParcelTable;

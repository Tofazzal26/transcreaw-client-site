const MyDeliveryTable = ({
  assignData,
  indx,
  handleCancel,
  handleAlreadyCancel,
  handleDelivered,
  handleDeliveryCancel,
}) => {
  const {
    name,
    receiverName,
    receiverPhone,
    phone,
    requestDate,
    ApproximateDate,
    parcelDeliveryAddress,
    status,
    _id,
  } = assignData || {};

  return (
    <>
      <tr>
        <td>
          {" "}
          <h1 className="font-semibold text-[14px]">{indx + 1}</h1>
        </td>
        <td>
          <h1 className="font-semibold text-[14px]">{name}</h1>
        </td>
        <td>
          <h1 className="font-semibold text-[14px]">{receiverName}</h1>
        </td>
        <td>
          <h1 className="font-semibold text-[14px]">{phone}</h1>
        </td>
        <td>
          <h1 className="font-semibold text-[14px]">{requestDate}</h1>
        </td>
        <td>
          <h1 className="font-semibold text-[14px]">{ApproximateDate}</h1>
        </td>
        <td>
          <h1 className="font-semibold text-[14px]">{receiverPhone}</h1>
        </td>
        <td>
          <h1 className="font-semibold text-[14px]">{parcelDeliveryAddress}</h1>
        </td>
        <td>
          <h1 className="font-semibold text-[14px]">
            <button className="bg-[#60a5fa] px-4 py-2 text-white rounded-md">
              Open
            </button>
          </h1>
        </td>
        <td>
          <h1 className="font-semibold text-[14px]">
            {status === "On The Way" ? (
              <button
                onClick={() => handleDelivered(_id)}
                className="bg-[#60a5fa] px-4 py-2 text-white rounded-md"
              >
                Deliver
              </button>
            ) : status === "Cancelled" ? (
              <button
                onClick={handleAlreadyCancel}
                className="bg-[#60a5fa] px-4 py-2 text-white rounded-md"
              >
                Deliver
              </button>
            ) : (
              <button
                onClick={handleDeliveryCancel}
                className="bg-[#60a5fa] px-4 py-2 text-white rounded-md"
              >
                Deliver
              </button>
            )}
          </h1>
        </td>
        <td>
          <h1 className="font-semibold text-[14px]">
            {status === "On The Way" ? (
              <button
                onClick={() => handleCancel(_id)}
                className="bg-red-500 px-4 py-2 text-white rounded-md"
              >
                Cancel
              </button>
            ) : status === "Delivered" ? (
              <button
                onClick={handleDeliveryCancel}
                className="bg-red-500 px-4 py-2 text-white rounded-md"
              >
                Cancel
              </button>
            ) : (
              <button
                onClick={handleAlreadyCancel}
                className="bg-red-500 px-4 py-2 text-white rounded-md"
              >
                Cancel
              </button>
            )}
          </h1>
        </td>
      </tr>
    </>
  );
};

export default MyDeliveryTable;

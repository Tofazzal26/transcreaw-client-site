const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "600px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AllParcelTable = ({
  parcel,
  Modal,
  openModal,
  modalIsOpen,
  closeModal,
}) => {
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
          <div>
            <button
              className="bg-[#0984e2] text-white px-4 py-2 rounded-md"
              onClick={openModal}
            >
              Manage
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button onClick={closeModal}>close</button>

              <form>
                <select className="select select-bordered rounded-none font-semibold w-full">
                  <option className="font-semibold">Delivery Man1</option>
                  <option>Delivery Man2</option>
                </select>
              </form>
            </Modal>
          </div>
        </td>
      </tr>
    </>
  );
};

export default AllParcelTable;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import AllParcelTable from "./AllParcelTable";
import { useState } from "react";
import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#modaldiv");

const AllParcels = () => {
  // modal implement start

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
                    <AllParcelTable
                      key={parcel._id}
                      parcel={parcel}
                      Modal={Modal}
                      openModal={openModal}
                      closeModal={closeModal}
                      modalIsOpen={modalIsOpen}
                    />
                  ))}
                </tbody>
              </table>
              {/* <div>
                <button onClick={openModal}>Open Modal</button>
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                  <button onClick={closeModal}>close</button>
                  <div>I am a modal</div>
                  <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                  </form>
                </Modal>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllParcels;

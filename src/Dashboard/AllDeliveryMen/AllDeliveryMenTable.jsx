const AllDeliveryMenTable = ({ deliveryMan }) => {
  const { name, phone, TotalDelivery, AverageReview } = deliveryMan || {};
  return (
    <>
      <tr>
        <td className="font-medium text-[14px]">{name}</td>
        <td className="font-medium text-[14px]">{phone}</td>
        <td className="font-medium text-[14px]">{TotalDelivery}</td>
        <td className="font-medium text-[14px]">{AverageReview}</td>
      </tr>
    </>
  );
};

export default AllDeliveryMenTable;

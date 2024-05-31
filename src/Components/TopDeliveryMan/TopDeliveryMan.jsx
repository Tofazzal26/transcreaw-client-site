import Man1 from "../../../public/service-4.jpg";

const TopDeliveryMan = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div className="text-center my-12">
          <h1 className="text-[26px] uppercase font-semibold">
            Our Top Delivery Man
          </h1>
          <p className="font-semibold text-gray-500">
            Meet our top delivery man, ensuring timely and secure deliveries
            with exceptional service every time.
          </p>
        </div>
        <div>
          <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="relative">
              <img
                src={Man1}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="bg-[#0984e2] font-semibold absolute text-white px-4 top-[220px] right-0 py-2">
                <h2>Tofazzal Hossain</h2>
              </div>
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-wide">
                  Total Delivered : 20K
                </h2>
                <h2 className="text-xl font-semibold tracking-wide">
                  Average Ratings : 5.0
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDeliveryMan;

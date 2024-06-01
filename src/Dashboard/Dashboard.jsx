import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-[#f1f5f9] min-h-screen">
      <div className="container mx-auto ">
        <div>
          <div className="grid lg:grid-cols-4 gap-6 grid-cols-1">
            <div className="col-span-1">
              <aside className="w-full min-h-screen p-6 bg-[#ffffff] dark:text-gray-800">
                <nav className="space-y-8 text-sm">
                  <div className="space-y-2">
                    <h2 className="text-xl mb-6 font-semibold tracking-widest uppercase dark:text-gray-600">
                      Dashboard
                    </h2>
                    <div className="flex flex-col space-y-4 mt-12">
                      <a
                        rel="noopener noreferrer"
                        className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600"
                      >
                        Book a Parcel
                      </a>
                      <a
                        rel="noopener noreferrer"
                        className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600"
                      >
                        My Parcels
                      </a>
                      <a
                        rel="noopener noreferrer"
                        className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600"
                      >
                        My Profile
                      </a>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div>
                    <div className="flex flex-col space-y-4">
                      <a
                        rel="noopener noreferrer"
                        className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600"
                      >
                        Book a Parcel
                      </a>
                      <a
                        rel="noopener noreferrer"
                        className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600"
                      >
                        My Parcels
                      </a>
                      <a
                        rel="noopener noreferrer"
                        className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600"
                      >
                        My Profile
                      </a>
                    </div>
                  </div>
                </nav>
              </aside>
            </div>
            <div className="col-span-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useLoaderData } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import Message from "../components/Message";
import MessageBox from "../components/MessageBox";
//** UI component */
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";

type TripType = {
  idTrip: number;
  nameTrip: string;
};

//   export type TripData = {
//     trip: TripType;
//   };
const Trips = () => {
  const trip = useLoaderData() as TripType;
  const isLogin = useAuthStore((state) => state.isLogin);

  return (
    <div className="flex px-2 h-88/100 w-full">
      <div className="bg-white h-full w-1/12">
        <div className="h-12 hover:bg-slate-600 text-black">Trip 1</div>
        <div className="h-12 hover:bg-slate-600 text-black">Trip 2</div>
        <div className="h-12 hover:bg-slate-600 text-black">Trip 3</div>
      </div>
      <div className="bg-[#F6F8FA] h-full w-4/5 mr-3 flex flex-col">
        <div className="rounded-full flex-grow-0 flex bg-white mx-5 mt-3 py-2 px-3 gap-5 shadow-[rgb(240,242,247)_0px_4px_4px]">
          <AvatarGroup>
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              size="normal"
              shape="circle"
            />
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"
              size="normal"
              shape="circle"
            />
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
              size="normal"
              shape="circle"
            />
            <Avatar
              label="+2"
              shape="circle"
              size="normal"
              style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
            />
          </AvatarGroup>
          {isLogin ? (
            <div className="flex justify-between flex-1 items-center ">
              <p>Hmm feeling the trip's not suitable for ya</p>
              <button className="text-white bg-red-500 font-medium rounded-full text-sm px-2 py-1">
                Leave
              </button>
            </div>
          ) : (
            <div className="flex justify-between flex-1 items-center">
              <p>Hey wanna get diffirent experients from this trip</p>
              <button className="text-white bg-green-500 font-medium rounded-full text-sm px-3 py-1.5">
                Join us
              </button>
            </div>
          )}
        </div>
        <div className="flex-1 overflow-auto no-scrollbar">
          <Message />
        </div>
        <div className="flex-grow-0">
          <MessageBox />
        </div>
      </div>
      <div className="h-full w-1/4 flex flex-col gap-2">
        <div className="flex-1 bg-slate-500 rounded-lg mb-4">Infor section</div>
        <div className="flex-1 bg-white shadow-xl rounded-2xl divide-y-2">
          <div className="p-3 font-semibold">Note</div>
          <div>
            <div className="flex gap-10 p-3">
              <p>Name</p>
              <p>Time start</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;

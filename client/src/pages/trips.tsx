import { useLoaderData } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import MessageHeader from "../components/MessageHeader";
import MessageTool from "../components/MessageTool";
import InforTrip from "../components/InforTrip";
// import InforExtraTrip from "../components/InforExtraTrip";
import UserInfo from "../components/UserInfor";
//** UI component */
import { useEffect, useRef, useState } from "react";
import data from "../fakeData";
import Note from "../components/note";

type TripType = {
  idTrip: number;
  nameTrip: string;
};

//   export type TripData = {
//     trip: TripType;
//   };
const Trips = () => {
  const trip = useLoaderData() as TripType;
  const [isTrip,setisTrip] = useState(true)
  const dummy = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    dummy.current?.scrollIntoView({ behavior: 'smooth' })
  },[data])

  return (
    <div className="flex px-2 h-88/100 w-full">
      <div className="bg-white h-full w-1/12">
        <div className="h-12 hover:bg-slate-600 text-black">Trip 1</div>
        <div className="h-12 hover:bg-slate-600 text-black">Trip 2</div>
        <div className="h-12 hover:bg-slate-600 text-black">Trip 3</div>
      </div>
      <div className="bg-[#F6F8FA] h-full w-4/5 mr-3 flex flex-col">
        <div className="flex-grow-0">
          <MessageHeader/>
        </div>
        <div className="flex-1 overflow-auto no-scrollbar" ref={dummy}>
          <MessageBox />
        </div>
        <div className="flex-grow-0">
          <MessageTool />
        </div>
      </div>
      <div className="h-full w-1/4 flex flex-col gap-2">
        <div className="flex-1 mb-4">
          {isTrip ?
          (
            <InforTrip func={setisTrip}/>
          )
          : (
            <UserInfo func={setisTrip}/>
          )
        }
        </div>
        <div className="flex-1 bg-white shadow-xl rounded-2xl">
          <Note/>
        </div>
      </div>
    </div>
  );
};

export default Trips;

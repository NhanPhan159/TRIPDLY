import { useLoaderData } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import MessageHeader from "../components/MessageHeader";
import MessageTool from "../components/MessageTool";
import InforTrip from "../components/InforTrip";
// import InforExtraTrip from "../components/InforExtraTrip";
import UserInfo from "../components/UserInfor";
import InforExtraTrip from "../components/InforExtraTrip";
import Block from "../components/Block";
import { BlockUI } from 'primereact/blockui';
import SideBar from "../components/SideBar";
//** UI component */
import { useEffect, useRef, useState } from "react";
import data from "../fakeData";
import Note from "../components/note";
import { useAuthStore } from "../store/auth";


type TripType = {
  idTrip: number;
  nameTrip: string;
};

//   export type TripData = {
//     trip: TripType;
//   };
const Trips = () => {
  const isLogin = useAuthStore(state=>state.isLogin)
  const trip = useLoaderData() as TripType;
  const [isTrip,setisTrip] = useState(true)
  const dummy = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    dummy.current?.scrollIntoView({ behavior: 'smooth' })
  },[data])

  return (
    <div className="flex sm:px-2 h-88/100 w-full">
      <div className="bg-white h-full w-1/12">
        <SideBar/>
      </div>
      { isLogin ?
        ( 
          <div className="bg-[#F6F8FA] h-full w-11/12 sm:w-4/5 sm:mr-3 flex flex-col rounded-xl">    
             <div className="flex-grow-0">
              <MessageHeader/>
            </div>
            <div className="flex-1 overflow-auto no-scrollbar" ref={dummy}>
              <MessageBox />
            </div>
            <div className="flex-grow-0">
              <MessageTool />
            </div></div>)
        : (
          <BlockUI template={<Block/>} containerClassName="h-full w-11/12 sm:w-4/5 sm:mr-3 flex flex-col rounded-xl" blocked={true}>
            <div className="blur-sm h-full w-full mr-3 flex flex-col rounded-xl">
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
          </BlockUI>
        )
      }
      <div className="h-full sm:flex hidden flex-col sm:gap-1 md:gap-2 sm:w-1/4">
        <div className="flex-1 mb-4 sm:h-2/3">
          {isTrip ?
          (
            <InforTrip func={setisTrip}/>
          )
          : (
            <UserInfo func={setisTrip}/>
          )
        }
        </div>
        <div className="flex-1 bg-white shadow-xl rounded-2xl sm:h-1/3">
          <Note/>
        </div>
      </div>
    </div>
  );
};

export default Trips;

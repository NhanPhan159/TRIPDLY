import { Avatar } from "@mui/material";
import { motion } from "framer-motion"
import {BiTime} from "react-icons/bi"
import {CiLocationOn} from "react-icons/ci"
import {HiOutlineUserGroup} from "react-icons/hi"
const InforTrip = () => {
    return ( 
        <div className="w-full h-full flex flex-col items-center gap-5">
            <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} src="/static/images/avatar/1.jpg" />
            <p className="text-lg font-semibold">Name trip</p>
            <div className="bg-[#F2F8F9] rounded-md px-2 py-3 flex-1 w-full">
                <div className="flex justify-around">
                    <div className="flex items-center gap-3 px-1 py-1">
                        <BiTime className="w-5 h-5"/>
                        <div>
                            <h3 className="font-medium text-sm">Start time</h3>
                            <p className="text-sm text-slate-400">12AM</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-1 py-1">
                        <BiTime className="w-5 h-5"/>
                        <div>
                            <h3 className="font-medium text-sm">Start time</h3>
                            <p className="text-sm text-slate-400">12AM</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 px-1 py-1 justify-center">
                    <CiLocationOn className="w-6 h-6"/>
                    <div>
                        <h3 className="font-medium text-sm">Visting places</h3>
                        <p className="text-sm text-slate-400">Da Nang - Hue - Ha Noi</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 px-1 py-1 justify-center">
                    <HiOutlineUserGroup className="w-5 h-5"/>
                    <div>
                        <h3 className="font-medium text-sm">Members</h3>
                        <p className="text-sm text-slate-400">Current 100 - Limit 200</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default InforTrip;
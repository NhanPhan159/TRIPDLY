import { Avatar } from '@mui/material';
import {BsTelephone} from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'
import ReactPlayer from 'react-player'


const UserInfo = ({func}:{func:(isTrip:boolean)=>void}) => {
    return ( 
        <div className='flex flex-col gap-4 h-full w-full relative bg-white shadow-lg rounded-xl p-4'>
            <div className="flex-1 rounded-xl border relative overflow-hidden">
                <ReactPlayer url='https://www.youtube.com/watch?v=a3vYNDhmvyg' 
                style={{position: "relative",
                    left: "0",
                    top: "0",
                    opacity: "1"
                }} width={300} height={190} />
            </div>
            <div className="flex flex-col md:flex-0 justify-start gap-10 items-center px-10 ">
                <div>
                    <Avatar alt="Remy Sharp" src={'/src/assets/cary.jpg'} sx={{ width: 60, height: 60 }} />
                    <p className='ml-2 text-[#6683C2] font-semibold'>Henry</p>
                </div>
                <div>
                    <div className='flex gap-3'>
                        <BsTelephone/>
                        <p>0908112233</p>
                    </div>
                    <div className='flex gap-3'>
                        <BsTelephone/>
                        <p>0908112233</p>
                    </div>
                </div>
            </div>
            <div className='bottom-2 left-4'>
                <button className='animate-moving-right' onClick={()=>func(true)}>
                    <IoIosArrowBack className="w-6 h-6"></IoIosArrowBack>
                </button>
            </div>
        </div>
     );
}
 
export default UserInfo;
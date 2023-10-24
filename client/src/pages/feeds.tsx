import { useNavigate } from "react-router-dom";
import LayoutHeader from "../components/UserHeader"
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import PostItem from "../components/PostItem";
import CalendarItem from "../components/CalendarItem";

const Feeds = () => {
    const navi = useNavigate()
    return ( 
        <div className="flex w-full h-full bg-[#f4f4f4]">
          <div className="w-1/5 h-full ">
          </div>
          <div className="w-3/5 h-full overflow-auto no-scrollbar ">
            <PostItem/>
            {/* <PostItem/>
            <PostItem/>
            <PostItem/> */}

          </div>
          <div className="w-1/5 h-full">
          </div>
        </div>
     );
}
 
export default Feeds;
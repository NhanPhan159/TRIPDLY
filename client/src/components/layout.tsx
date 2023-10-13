import { Outlet } from "react-router-dom";
import GuestHeader from "./GuestHeader"
import UserHeader from "./UserHeader";
import { useAuthStore } from "../store/auth";
const Layout = () => {
    const isLogin = useAuthStore(state=>state.isLogin)
    return ( 
      <div className="h-full">
            {isLogin ? <UserHeader/> : <GuestHeader/>}
            <Outlet/>
      </div>
     );
}
 
export default Layout;
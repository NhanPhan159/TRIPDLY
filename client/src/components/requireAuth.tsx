import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/auth";

type prop = {
    allowRole : [String]
}

const RequireAuth = ({allowRole}:prop) => {
    const isLogin = useAuthStore(state=>state.isLogin)
    const role = useAuthStore(state=>state.role)

    const location = useLocation()
    
    return ( 
        isLogin && allowRole.find((curr : any)=>role === curr)
        ?<Outlet/>
        :isLogin
        ?<Navigate to={'/unauth'} state={{from:location}} replace />
        :<Navigate to={'/login'} state={{from:location}} replace />
     );
}
 
export default RequireAuth;
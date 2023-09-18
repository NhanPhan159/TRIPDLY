import { Navigate, Outlet, useLocation } from "react-router-dom";

type prop = {
    allowRole : [String]
}

const RequireAuth = ({allowRole}:prop) => {
    const isLogin = Boolean(localStorage.getItem("isLogin"))
    
    const role = localStorage.getItem("role")
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
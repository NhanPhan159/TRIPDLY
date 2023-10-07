import { Outlet } from "react-router-dom";
import CardTrip from "../pages/cardTrip";
import Header from "./header"
const Layout = () => {
    return ( 
      <div>
            
            <Header/>
            <div className="px-20 py-10">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-xl">Trips</h1>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-7">
                        <CardTrip></CardTrip>
                        <CardTrip></CardTrip>
                        <CardTrip></CardTrip>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;
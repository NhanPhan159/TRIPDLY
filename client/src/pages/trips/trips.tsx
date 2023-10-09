import { useLoaderData } from "react-router-dom";
import { useAuthStore } from "../../store/auth";

type TripType = {
    idTrip: number;
    nameTrip: string;
  };
  
//   export type TripData = {
//     trip: TripType;
//   };
const Trips = () => {
    const trip = useLoaderData() as TripType
    const isLogin = useAuthStore(state=>state.isLogin)
    return ( 
        <div>
            This trip has id is {trip.idTrip} and name is {trip?.nameTrip}
            <div>
                {isLogin ? (
                    <div>Now you can see more information</div>
                ):
                <div>Login to see more information</div>
            }
            </div>
        </div>
    );
}
 
export default Trips;
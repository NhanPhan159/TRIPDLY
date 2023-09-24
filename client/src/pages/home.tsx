import { useAuthStore } from "../store/auth";
import Header from "../components/header";
const Home = () => {
    const role = useAuthStore(state=>state.role)
    return ( 
        <div>Your role is {role}</div>
     );
}
 
export default Home;
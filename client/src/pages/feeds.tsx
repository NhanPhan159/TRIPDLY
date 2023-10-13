import { useNavigate } from "react-router-dom";

const Feeds = () => {
    const navi = useNavigate()
    return ( 
        <div className="flex flex-col gap-6">
            <p>this is a feed page</p>
            <button className="bg-cyan-500 text-white" onClick={()=>navi("trips/1")}>Detail trip 1</button>
            <button className="bg-cyan-500 text-white" onClick={()=>navi("trips/2")}>Detail trip 2</button>
            <button className="bg-cyan-500 text-white" onClick={()=>navi("trips/3")}>Detail trip 3</button>
        </div>
     );
}
 
export default Feeds;
import MessageType from "../types/MessageType";
import Ava from "./Ava";
import pic1 from "../assets/cary.jpg"
const TextType = ({params}:{params:MessageType}) => {
    return ( 
        <>
        { params.site === "me" 
            ? <div className="flex justify-end gap-2 mb-3">
                    <div>
                        <div className="bg-purple-500 dark:text-white text-sm font-medium px-2 py-2.5 rounded-br-sm rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl">
                            <p>{params.content}</p>
                        </div>
                        <p className="text-xs font-mono">{params.time} • You</p>
                    </div>
                    <Ava imageUrl={params.ava} />
            </div>
            : <div className="flex justify-start gap-2 mb-3">
                <Ava imageUrl={params.ava} />
                <div>
                    <div className="bg-white shadow-[rgb(240,242,247)_0px_5px_5px] px-2 py-2.5 font-Poppins font-medium rounded-br-2xl rounded-bl-sm text-sm rounded-tr-xl rounded-tl-xl">
                        <p>{params.content}</p>
                    </div>
                    <p className="text-xs font-mono">{params.name} • {params.time}</p>
                </div>
              </div>
        }
        </>
     );
}
 
export default TextType;
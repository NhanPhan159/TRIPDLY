import data from "../fakeData";
import TextType from "./MessageItem"
const MessageBox = () => {
    return ( 
        <div className="p-5">
            {data.map((e)=>{
                switch(e.type){
                    case "link":
                        return <div></div>
                    case "image":
                        return <div></div>
                    default:
                        return <TextType params={e}/>
                }
            })}
        </div>
     );
}
 
export default MessageBox;
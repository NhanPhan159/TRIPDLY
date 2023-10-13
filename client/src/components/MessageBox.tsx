import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";
import { Button } from "primereact/button";
import {BsEmojiSmile} from "react-icons/bs"
import {GrAttachment} from "react-icons/gr"

const MessageBox = () => {
    const [visibleEmoji, setVisibleEmoji] = useState(false);
    const [message, setMessage] = useState("");
    return ( 
        <div className="flex p-4 gap-4 bg-white items-center border-x border-slate-100">
            <div>
                <div className={visibleEmoji ? "absolute bottom-16" : "hidden"}>
                    <Picker
                        data={data}
                        emojiSize={20}
                        emojiButtonSize={30}
                        previewPosition="none"
                        onEmojiSelect={(e: any) => {
                        setVisibleEmoji(!visibleEmoji);
                        setMessage(message + e.native);
                        }}
                    />
                </div>
                <BsEmojiSmile
                className="w-6 h-6 hover:bg-gray-500 hover:text-white focus:ring-4 font-medium rounded-full text-base text-center inline-flex items-center"
                onClick={() => {
                    setVisibleEmoji(!visibleEmoji);
                }}
                />
          </div>
          <GrAttachment className="h-6 w-6"/>
          <input
            type="text"
            id="first_name"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-100 flex-1 border border-gray-400 text-black text-sm rounded-full p-2.5 "
            placeholder="Type a message ..."
          />
          <Button 
            icon="pi pi-send" 
            rounded 
            outlined
            onClick={()=>console.log(message)} />
        </div>
     );
}
 
export default MessageBox
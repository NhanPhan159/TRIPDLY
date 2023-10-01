import { Button } from "primereact/button";
import Header from "../userHeader";
import CreatePopup from"./createPopup"
import { useState } from "react";
const Guide = () => {
    const [visible, setVisible] = useState(false);

    return ( 
        <>
            <Header/> 
            <Button onClick={() => setVisible(true)} >
                Create Trip</Button>
            <CreatePopup visible={visible} setVisible={setVisible} />
        </>
    );
}
 
export default Guide;
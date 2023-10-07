import { Button } from "primereact/button";
import Header from "../userHeader";
import CreatePopup from"./createPopup"
import { useState, useEffect } from "react";
import CardTrip from '../cardTrip'

const Guide = () => {
    const [visible, setVisible] = useState(false);
    

    return ( 
        <>
            <Header/> 
            <div className="px-20 py-10">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-xl">Trips</h1>
                    </div>
                    <div>
                        <Button onClick={() => setVisible(true)} >
                            New Trip</Button>
                        <CreatePopup visible={visible} setVisible={setVisible} />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-7">
                        <CardTrip></CardTrip>
                        <CardTrip></CardTrip>
                        <CardTrip></CardTrip>
                </div>
            </div>
        </>
    );
}
 
export default Guide;

import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';

type propsType = {
    visible: boolean,
    setVisible: (value: boolean) =>void
}
interface Location {
    name: string;
    code: string;
}


export default function BasicDemo(props:propsType) {
    const [date, setDate] = useState< string | Date | null>();
    const [description, setDescription] = useState<string>('');
    const [title, setTitle] = useState<string>('');

    const [value, setValue] = useState<number>(1);
    const [selectedLocations, setSelectedLocations] = useState<Location[] | null>(null);
    const cities: Location[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];  


    return (
        <div className="card flex justify-content-center">
            
            <Dialog header="Create Trip" visible={props.visible} style={{ width: '50vw' }} onClick={() => {}} onHide={() => {props.setVisible(false)}}>
                <form>
                    <div class="mb-6">
                        <label for="base-input" class="block mb-2">Title</label>
                        <InputTextarea autoResize value={title} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(e.target.value)} rows={2} cols={80} />
                    </div>
                    <div class="mb-6">
                        <label for="large-input" class="block mb-2">Description</label>
                        <InputTextarea autoResize value={description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} rows={5} cols={80} />
                    </div>
                    <div className="mb-6">
                        <label for="large-input" class="block mb-2 ">Date</label>
                        <Calendar value={date} onChange={(e: CalendarChangeEvent) => setDate(e.value)} showIcon showTime hourFormat="24"/>
                    </div>                    
                    <div className="mb-6">
                        <label for="large-input" class="block mb-2 ">Member Limit</label>
                        <InputNumber inputId="minmax-buttons" value={value} onValueChange={(e:InputNumberValueChangeEvent) => setValue((e.value))} mode="decimal" showButtons min={1} max={30} />
                    </div>
                    <div className='mb-6'>
                        <label for="large-input" class="block mb-2 ">Location</label>
                        <MultiSelect value={selectedLocations} onChange={(e: MultiSelectChangeEvent) => setSelectedLocations(e.value)} options={cities} optionLabel="name" 
                            placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
                    </div>
                    <div className='flex justify-end'>
                        <Button>Submit</Button>
                    </div>
                </form>
            </Dialog>
        </div>
    )
}
        
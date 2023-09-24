
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

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
            
            <Dialog className="bg-red-400 dark:text-white dark:bg-red-400" header="Create Trip" visible={props.visible} style={{ width: '50vw' }} onHide={() => {props.setVisible(false)}}>
                <form>
                    <div class="mb-6">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div class="mb-6">
                        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="mb-6">
                        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <Calendar value={date} onChange={(e: CalendarChangeEvent) => setDate(e.value)} showIcon showTime hourFormat="24"/>
                    </div>                    
                    <div className="mb-6">
                        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Member Limit</label>
                        <InputNumber inputId="minmax-buttons" value={value} onValueChange={(e:InputNumberValueChangeEvent) => setValue((e.value))} mode="decimal" showButtons min={0} max={100} />
                    </div>
                    <div className='mb-6'>
                        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                        <MultiSelect value={selectedLocations} onChange={(e: MultiSelectChangeEvent) => setSelectedLocations(e.value)} options={cities} optionLabel="name" 
                            placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
                    </div>
                    <div className='flex justify-end'>
                        <button type="submit" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button>
                    </div>
                </form>
            </Dialog>
        </div>
    )
}
        
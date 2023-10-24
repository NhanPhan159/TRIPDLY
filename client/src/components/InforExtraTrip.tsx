import { red } from '@mui/material/colors';
import {useState} from 'react'
import { Avatar } from '@mui/material';
import Note from './note';
import { Tab,Tabs } from './TabsTrip';
import {BsTelephone} from 'react-icons/bs'
import {MdStarRate} from 'react-icons/md'
const InforExtraTrip = () => {
    return ( 
        <div className='h-full'>
            <div className='h-full'>
                <Tabs>
                    <Tab tabName="About host" active={false} displayName='Tab'>
                        <div className='flex h-full items-center gap-16'>
                            <div>
                                <Avatar alt="Remy Sharp" src={'/src/assets/cary.jpg'} sx={{ width: 60, height: 60 }} />
                                <p className='ml-2'>Henry</p>
                            </div>
                            <div>
                                <div className='flex gap-3'>
                                    <BsTelephone/>
                                    <p>0908112233</p>
                                </div>
                                <div className='flex gap-3'>
                                    <BsTelephone/>
                                    <p>0908112233</p>
                                </div><div className='flex gap-3'>
                                    <MdStarRate/>
                                    <p>0908112233</p>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab tabName="Key moments" active={false} displayName='Tab'>
                        <Note></Note>
                    </Tab>
                </Tabs>
            </div>
        </div>
     );
}
 
export default InforExtraTrip;
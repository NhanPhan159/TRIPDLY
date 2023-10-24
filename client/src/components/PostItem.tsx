import ImageItem from './ImageItem';
import { Avatar } from 'primereact/avatar';
import {useState} from 'react'
import { AvatarGroup } from 'primereact/avatargroup';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import React from 'react';

const PostItem = () => {
    const [join,setJoin] = useState(false)
    const [heart,setHeart] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
  
    return ( 
        <div className="m-2 rounded-2xl bg-white p-3 flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <div className='flex gap-6'>
                    <div>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" 
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        />
                        <Popover
                            id="mouse-over-popover"
                            sx={{
                            pointerEvents: 'none',
                            }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                        >
                            <Typography sx={{ p: 1 }}>I use Popover.</Typography>
                        </Popover>
                        
                    </div>
                    <div>
                        <p 
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}>Name</p>
                        <p className='text-sm text-slate-400'>July 26 2018, 01:03pm</p>
                    </div>
                </div>
                <div className='mr-6 flex gap-3'>
                    <div onClick={()=>setJoin(!join)}>
                        {!join ?(
                            <button className='px-5 py-1 rounded-full text-[#2c47a3] font-medium bg-[#C5F3FF]'>Join</button>
                            )
                            :<button className='px-5 py-1 rounded-full text-white font-medium bg-[#52c85c]'>You have requested</button>
                            
                        }
                    </div>
                        <a target="_blank" rel="noopener noreferrer" href="/trips/1" className='px-5 py-1 rounded-full text-[#2c47a3] font-medium bg-[#C5F3FF]'>See more</a>
                </div>
            </div>
            <div className='text-slate-500'>
                paragraph
            </div>
            <div >
                <ImageItem/>
            </div>
            <div className="flex justify-between">
                <div className='flex gap-3'>
                    <AvatarGroup>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="normal" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="normal" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="normal" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" size="normal" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png" size="normal" shape="circle" />
                    </AvatarGroup>
                    <div>
                        <p className='font-semibold text-sm'>Milly, David</p>
                        <p className='text-slate-400 text-sm'>and 23 more liked this</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <p onClick={()=>setHeart(!heart)} className='text-slate-400'>
                        {!heart
                        ? <i className="pi pi-heart pr-1" ></i>
                        : <i className="pi pi-heart-fill pr-1" style={{ color: 'red' }}></i>
                        }
                        123
                    </p>
                    <button onClick={()=>{}} className='text-slate-400'>
                        <i className="pi pi-link pr-1" ></i>
                        2
                    </button>

                </div>
            </div>

        </div>
     );
}
 
export default PostItem
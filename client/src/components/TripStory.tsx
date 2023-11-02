import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Avatar } from 'primereact/avatar'
import React, { useState } from 'react'

export default function TripStory() {
    const [join,setJoin] = useState(false)
    const [heart,setHeart] = useState(false)

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handlePopoverClose = () => {
        setAnchorEl(null);
      };

    const open = Boolean(anchorEl);
  return (
    <div className='w-full h-40 bg-white border-2 border-[#efefef] rounded-lg '>
        <div className="flex justify-between items-center">
            <div className='flex gap-6'>
                <div>
                    <Avatar image="https://res.cloudinary.com/practicaldev/image/fetch/s--StOs_dXE--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1185053/655ef889-0262-417c-b1d6-d2e7e854ff93.png"
                     className="ml-2 mt-2" size="large" shape="circle" 
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
                    <p className='mt-2'
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
    </div>
  )
}

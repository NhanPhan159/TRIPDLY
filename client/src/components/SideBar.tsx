import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
const SideBar = () => {
    return ( 
        <Sidebar className='h-full' width=''>
          <Menu>
            <MenuItem disabled> Your trip</MenuItem>
            <MenuItem active>
                <div className='flex gap-2'>
                    <span>Ava</span>
                    <span>Trip A</span>
                </div>
            </MenuItem>
            <MenuItem> E-commerce</MenuItem>
            <MenuItem> Examples</MenuItem>
          </Menu>
        </Sidebar>
    );
}
 
export default SideBar;
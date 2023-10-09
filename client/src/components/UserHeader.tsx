import { useState,useRef } from 'react';
import 'primeicons/primeicons.css';
import { Badge } from 'primereact/badge';
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import { NavLink } from 'react-router-dom';

function UserHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const alert = useRef(null);
  const message = useRef(null);
  const avatar = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme-link'));

  const themeLink = document.getElementById('theme-link');

  if (themeLink) {
    themeLink.href = '/themes/lara-'+theme + '-indigo/theme.css';
  }

  function switchTheme(){
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme-link',newTheme)
    if (themeLink) {
      themeLink.href = '/themes/bootstrap4-'+theme + '-blue/theme.css';
    }
  }

  
  return (
    <> 
    <nav className={`flex items-center justify-between flex-wrap px-4 py-2 ${theme === 'dark' ? 'bg-[#2f3b50]' : 'bg-[#f4f4f4]'}`}>
     
     
     <div className="block  lg:hidden">
       <button onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>


     <div className="flex items-center flex-shrink-0 mr-6 lg:mr-72 gap-2">
      <span className='pi pi-prime' style={{ fontSize: '1.5rem' }}></span>Tripdly
      <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText placeholder="Search" />
      </span>
     </div>
     <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`} >

       <div className="text-sm lg:flex-grow flex gap-4">
         <NavLink to="/" 
          className={({ isActive }) =>
            isActive ? "block mt-4 lg:inline-block lg:mt-0 mr-4 text-blue-500" : "block mt-4 lg:inline-block lg:mt-0 mr-4"
          }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
         </NavLink>

         <NavLink to="/a" 
          className={({ isActive }) =>
            isActive ? "block mt-4 lg:inline-block lg:mt-0 mr-4 text-blue-500" : "block mt-4 lg:inline-block lg:mt-0 mr-4"
          }>
          Feedback
         </NavLink>
         <NavLink to="/g" 
          className={({ isActive }) =>
            isActive ? "block mt-4 lg:inline-block lg:mt-0 mr-4 text-blue-500" : "block mt-4 lg:inline-block lg:mt-0 mr-4"
          }>
          Manage trip
         </NavLink>
       </div>

       <div>
          <button id="alert" className="pi pi-bell p-overlay-badge" style={{ fontSize: '1.5rem' }} onClick={(e) => alert.current.toggle(e)}>
            <Badge value="2"></Badge>
            <OverlayPanel ref={alert}>
              <p>Thoong bao</p>
            </OverlayPanel>
          </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

          <button id="message" className="pi pi-envelope p-overlay-badge" style={{ fontSize: '1.5rem' }} onClick={(e) => message.current.toggle(e)}>
            <Badge value="2"></Badge>
            <OverlayPanel ref={message}>
              <p>Tin nhan</p>
            </OverlayPanel>
          </button>
&nbsp;&nbsp;&nbsp; 
          <Avatar icon="pi pi-user" className="mr-2" size="large" onClick={(e) => avatar.current.toggle(e)}>
            <OverlayPanel ref={avatar}>
              <ul>
                <li>
                  <div className="switch-container">
                    <input type="checkbox" id="switch" onClick={()=> switchTheme()} />
                    <label for="switch">
                        <i className="pi pi-moon"></i>
                        <i className="pi pi-sun"></i>
                        <span className="ball"></span>
                    </label>
                  </div>
                </li>
                <li>My Profile</li>
                <li>Log out</li>
              </ul>
            </OverlayPanel>
          </Avatar>

          

       </div>
     </div>
   </nav>
    
    </>
  );
}

export default UserHeader;
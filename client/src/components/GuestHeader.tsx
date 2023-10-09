import { useState,useRef } from 'react';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { useAuthStore } from '../store/auth';


function GuestHeader() {
  const updateInfoAuth = useAuthStore(state=>state.updateInfoAuth)
  const [isOpen, setIsOpen] = useState(false);
  const alert = useRef(null);
  const message = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme-link'));
  const themeLink = document.getElementById('theme-link');
  if (themeLink) {
    themeLink.href = '/themes/lara-'+theme + '-blue/theme.css';
  }
  const changeMyTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme-link',newTheme)
    const themeLink = document.getElementById('theme-link');

    if (themeLink) {
      themeLink.href = '/themes/bootstrap4-'+theme + '-blue/theme.css';
    }
  };
  
  return (
    <> 
    <nav className={`flex items-center justify-between flex-wrap p-4  ${theme === 'dark' ? ' bg-violet-950' : 'bg-sky-200'}`}>
     
     
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
     <div className="flex items-center flex-shrink-0 mr-6 lg:mr-72">
      <span className='pi pi-prime' style={{ fontSize: '1.5rem' }}></span>Tripdly
      <InputText placeholder="Search" type="text" />
     </div>
     <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`} >

       <div className="text-sm lg:flex-grow ">
       </div>

       <div>

          <a id="signup" href="#" className="inline-flex items-center border-0 py-2 px-4">
            Sign up
          </a>

          
            <Button id="login" className="inline-flex items-center border-0 py-2 px-4" 
              onClick={()=>updateInfoAuth(true,"")}
              >Login
            </Button>
          &nbsp;&nbsp;&nbsp; 

          <Button className="inline-flex items-center border-0" onClick={() => changeMyTheme()}>
            <span className={`pr-1 pi pi-${theme === 'dark' ? 'sun' : 'moon'}`}></span>
          </Button>  

       </div>
     </div>
   </nav>
    
    </>
  );
}

export default GuestHeader;

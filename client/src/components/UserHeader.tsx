import { useState,useRef } from 'react';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { useAuthStore } from '../store/auth';


function GuestHeader() {
  const updateInfoAuth = useAuthStore(state=>state.updateInfoAuth)
  const isLogin = useAuthStore(state=>state.isLogin)
  const setLogin = useAuthStore(state=>state.updateInfoAuth)
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
      themeLink.href = '/themes/lara-'+theme + '-blue/theme.css';
    }
  };
  
  return (
    <> 
      <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-cyan-900 font-semibold">Tripdly</span>
            <div className="flex space-x-4 text-cyan-900 mix-blend-difference">
              
              <button onClick={()=>setLogin(!isLogin,"")}>Log in</button>
              <a href="#">Sign up</a>
            </div>
          </div>
        </div>
      </nav>
    
    </>
  );
}

export default GuestHeader;
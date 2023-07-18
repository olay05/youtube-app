import React, { useState } from 'react';
import "./Header.css"; 
import Logo from './img/video-.jpg';
import Blue from './img/Blue.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';





function Header() {

  const [ inputSearch, setInputSearch] = useState("");

  return (
    <div className='header'>
       <div className='header_left'> <MenuIcon className='menuicon'/>
        <img className='img-logo' src={Logo} alt='YouTube Logo'/> </div>
        
        <div className='header_input'> <input onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}
        className='' type="text" placeholder='Search'/>
        <SearchIcon className='header_search'/> <MicIcon/> </div>
        
       <div className='header_noitification'> 
        <VideoCallSharpIcon/>
        <NotificationsSharpIcon/>
        <img className='menu-img' src={Blue} alt=""/></div>
        </div>
  )
}

export default Header
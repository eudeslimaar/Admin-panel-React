import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AllOutIcon from '@mui/icons-material/AllOut';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
        <input type="text" placeholder='Search'/>
        <SearchIcon/>
        </div>
        <div className="items">
        <div className="item">
          <LanguageIcon className='icon'/>
          English
        </div>
        <div className="item">
          <NightsStayIcon className='icon'/>
        </div>
        <div className="item">
          <AllOutIcon className='icon'/>
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon className='icon'/>
          <div className="counter">1</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineIcon className='icon'/>
          <div className="counter">2</div>
        </div>
        <div className="item">
          <FormatListBulletedOutlinedIcon className='icon'/>
        </div>
        <div className="item">
          <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="avatar" className="avatar"/>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Navbar;
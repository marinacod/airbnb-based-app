import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import './Header.css'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className='header'>
        <Link to='/'>
          <img
              className="header__icon"
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
              alt="Airbnb Logo"
          />
        </Link>
        <div className='header__searchBar'>
          <SearchBar/>
        </div>
        <div className='header__userArea'>
          <div className='header__userAvatar'> 
            <Avatar alt="Victor Moraes" src="" />
            <KeyboardArrowDownIcon/>
          </div>
        </div>
        <div className='header__mobileMenu'>
          <MenuIcon/>
        </div>
    </header>
  )
}

export default Header
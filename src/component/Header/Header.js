import React from 'react'
import classes from './Header.module.css';
import Logo from '../../assets/logo.png'
import Navbar from '../Hero/Navbar';
const Header = () => {
  return (
    <div className={classes.header}>
     
     <img className={classes.logo} src={Logo} alt="logo" />
     <div> 
        <Navbar/>
     </div>
     
    </div>
  )
}

export default Header

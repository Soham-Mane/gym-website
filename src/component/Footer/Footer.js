import React from 'react'
import classes from './Footer.module.css'
import github from '../../assets/github.png';
import insta from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <hr />
      <div className={classes.footerimg}> 
      <img src={github} />
      <img src={insta} />
      <img src={linkedin} />
      </div>
      <div className={classes.footerlogo}>
      <img src={logo}  />
      </div>

    </div>
  )
}

export default Footer

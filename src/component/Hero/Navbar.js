import React from "react";
import classes from './Navbar.module.css'
const Navbar=()=>{
return (
    <div className={classes.navbar}>
    <ul className={classes.navbarmenu}>
        <li>Home</li>
        <li>Programs</li>
        <li>Why US</li>
        <li>Plans</li>
        <li>Testimonials</li>
        
    </ul>
    
    </div>
)
}
export default Navbar;
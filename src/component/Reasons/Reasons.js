import React from 'react'
import classes from './Reasons.module.css';
import tick from '../../assets/tick.png';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import addidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';

const Reasons = () => {
  return (
    <div className={classes.Reasons} id="reasons">
      <div className={classes.leftr}>
    <img  className={classes.image1} src={image1} />
    <img className={classes.image2} src={image2}  />
    <img className={classes.image3} src={image3}  />
    <img className={classes.image4} src={image4}  />
      </div>
      <div className={classes.rightr}>
        <span>Some Reasons</span>
        <div>
            <span className='strokeTxt'>Why</span>
        <span >Choose Us?</span>
        </div>
        <div className={classes.details}>
            <ul>
                <ul> <img className={classes.whiteTick} src={tick} /> <span style={{fontSize: '1rem'} } >over 140+expert coach</span></ul>
                <ul> <img className={classes.whiteTick} src={tick} /> <span style={{fontSize: '1rem'}}>train smart and faster than before</span></ul>
                <ul> <img className={classes.whiteTick} src={tick} /> <span style={{fontSize: '1rem'}}>1 free program for a new member</span></ul>
                <ul> <img className={classes.whiteTick} src={tick} /> <span style={{fontSize: '1rem'}}>reliable partners</span></ul>

            </ul>
        </div>
        <span style={{color: 'gray'}}>Relaible Partner</span>
        <div className={classes.partnerImage}>
            <img src={nb} />
            <img src={addidas} />
            <img src={nike} />
        </div>
      </div>
    </div>
  )
}

export default Reasons

import React ,{useState} from 'react'
import classes from './testimonial.module.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonial = () => {
  const [selected,setSelected] =useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className={classes.TestimonialContainer}>
        <div className={classes.lefttesti}>
        <span>TESTIMONIALS</span>
        <span className='strokeTxt'>WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span>
            {testimonialsData[selected].review}
        </span>
        <span>
          <span style={{color:'var(--orange)'}}> 
            {testimonialsData[selected].name} 
            </span>
               -{testimonialsData[selected].status} 
        </span>
        </div>
        <div className={classes.righttesti}>
          <div>

          </div>
          <div>
   
            </div>
          
          <img className={classes.gymImages}  src={testimonialsData[selected].image} alt="gym image" />
          <div className={classes.arrows}>
<img style={{width:'1.5rem'}} src={leftArrow} onClick={()=>{
  selected===0 ?setSelected(tLength-1) : setSelected((prev)=>prev - 1)
}} />
<img style={{width:'1.5rem'}}  src={rightArrow} onClick={()=>{
  selected===tLength-1 ?setSelected(0) : setSelected((prev)=>prev+1)
}} />
          </div>
        </div>
        
    </div>
  )
}

export default Testimonial

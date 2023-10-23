import React from 'react';
import classes from './Hero.module.css';
import Header from '../Header/Header';
import heroImg from '..//../assets/hero_image.png';
import heart from '..//../assets/heart.png';
import heroBack from '..//../assets/hero_image_back.png';
import calories from '..//../assets/calories.png';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';
const Hero=()=>{
    const transition = {type: 'spring',duration: 3 }
return (

    <div className={classes.hero}>
            <div className="blur hero-blur"></div>
<div className={classes.lefth}>
    <Header />
    <div className={classes.thebestad}>
        <motion.div
        initial={{left: '238px'}}
        whileInView={{left: '8px'}}
        transition={transition}>

        </motion.div>
        <span>The Best Fitness Club in Town</span>
    </div>
    <div className={classes.heroHeading}>
     <div>
<span className="strokeTxt">Shape </span>
<span>Your</span>
     </div>
     <div>
     <span>Ideal Body</span>
        </div>
        <div>
        <span className={classes.headingtext}>In here we will help you to shape and build your ideal body and live up your life to fullest</span>

        </div>
        </div>
        <div className={classes.figures}>
            <div>
                <span>  sta
                    <NumberCounter end={140} start={100} delay='3' preFix="+"></NumberCounter>
                </span>
                <span>EXPERT COACHES</span>
            </div>
            <div>
                <span>
                    <NumberCounter end={978} start={900} delay='3' preFix='+' />
                </span>
                <span>MEMBERS JOINED</span>
            </div>

            <div>
                <span><NumberCounter start={1} delay={3} end={50} preFix='+'  /></span>
                <span>FITNESS PROGRAMS</span>
            </div>
        </div>
<div className={classes.headingbtn}>
    <button className={classes.btn1}>Get Started</button>
    <button className={classes.btn2}>Learn More</button>
</div>
</div>
<div className={classes.righth}>
    <button>Join Now</button>

    <motion.div
    initial={{right: '-1rem'}}
    whileInView={{right: '4rem'}}
    transition={transition} className={classes.heartBox}>
    <img className={classes.heart} src={heart} alt="heart-image" />
    <span>Heart Rate</span>
    <span>116 bpm</span>
    </motion.div>
 <motion.img
 initial={{right: '11rem'}}
 whileInView={{right: '20rem'}}
 transition={transition} className={classes.heroBack} src={heroBack} alt="hero background" />
   <img className={classes.heroHeadImg} src={heroImg} alt="hero image" />
  <motion.adiv
  transition={transition}
  initial={{right: '37rem'}}
  whileInView={{right: '28rem'}} className={classes.caloriesbox}>
    <div>
    <img className={classes.calories} src={calories} alt="cal image" />
    </div>
    <div >
        <span>Calories burned</span>
        <span>220 kcal</span>
    </div>

 </motion.adiv>


</div>
    </div>
)
}
export default Hero;
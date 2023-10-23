import React from 'react'
import classes from './Programs.module.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
const Programs = () => {
  return (
    <div className={Programs}>
    <div className={classes.ProgramsHeader}>
      <span className='strokeTxt'>Explore our </span>
      <span>Programs </span>
      <span className='strokeTxt'>To shape you </span>
      
    </div>
    <div className={classes.programcategories}>
            {programsData.map((program)=>( 
                <div className={classes.category} >
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className={classes.joinnow}><span>Join Now</span><img src={RightArrow}></img></div>
                </div>
       ) )}

    </div>
    </div>

  )
}

export default Programs

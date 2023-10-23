import React from 'react';
import classes from './plans.module.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import rightArrow from '../../assets/rightArrow.png';
const Plans=()=>{
return  (
    <div className={classes.PlansContainer}>
        <div className='blur plans-blur1'></div>
        <div className='blur plans-blur2'></div>

    <div className={classes.plansHeader}>
        <span className='strokeTxt'>READY TO START</span>
        <span style={{color: 'white'}}>YOUR JOURNEY</span>
        <span className='strokeTxt'>NOW WITHUS</span>

    </div>

    <div className={classes.plans}>
    {plansData.map((plan,i)=> (
        <div className={classes.plan} key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>


        <div className={classes.features}>
            {plan.features.map((feature,i)=>(
                <div className={classes.feature}>
                    <img src={whiteTick} />
                 <span key={i}>{feature}</span>


                </div>
             ))}
        </div>
        <div>                   
              <span>See more benefits <img style={{width:'0.5rem',height: '0.5rem'}} src={rightArrow} /></span>     
        </div>
        <button>Join Now</button>
            </div>
    ))}
</div>

    </div>
)


}


export default Plans;
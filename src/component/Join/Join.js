import React,{useRef} from "react";
import classes from './Join.module.css';
import emailjs from '@emailjs/browser';
const Join=()=>{
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_r84aggw', 'template_jdtyc9h', form.current, 'TJyc7_o85Pt_Ykwh9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

return (
    <div className={classes.joinContainer}>
        <div className={classes.joinl}>
            <hr></hr>
           <div>
           <span className='strokeTxt'>READY TO</span>
            <span>LEVEL UP</span>
           </div>
            <div>
            <span>YOUR BODY </span>
            <span className='strokeTxt'>WITH US?</span>
            </div>
           
        </div>
        <div className={classes.joinr}>
            <form  ref={form} className={classes.emailContainer} onSubmit={sendEmail} > 
            <input type="email" name="email_name" placeholder="Enter Your Email Address Here"  />
            <button>Submit</button>
            </form>
      
            </div>
          
    </div>
)
}

export default Join;
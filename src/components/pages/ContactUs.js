import emailjs from "emailjs-com";
import React , { useState } from 'react';
import './ContactUs.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
    document.title = "Contact Me";
    const [myText, setMyText] = useState("Contact Me");
    toast.configure();
    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_1wpmsed', 'template_r8543c6', e.target, 'user_OHJx9688rFGYD88a0A6xs')
            .then((result) => {  toast.success('Email Sent Succesfully');
            setMyText("Contact Me");
            ;
               
            }, (error) => {
                toast.warning('Email Can Not be Sent .Try Again or Try Later') 
            });
        e.target.reset()

    }
    const onChange =() =>{
        setMyText("Will Get Back To You Soon. Wait for Email Sent Confirmation")
    }
    return (


            
            <div className="container">
                <form onSubmit={sendEmail} className="form">
                    <div >
                        <div className="name">
                        <h2 className="Text">{myText} </h2>
                            <br></br>
                            <input  type="text"  placeholder="Name" name="name" />
                            
                        </div>
                        <div  className="email">
                            <input type="email"  placeholder="Email Address" name="email" />
                        </div>
                        <div  className ="subject">
                            <input type="text"  placeholder="Subject" name="subject" />
                        </div>
                        <div className="message" >
                            <textarea  id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div  >
                            <input className="sendMessage" type="submit" value="Send Message" onClick = {onChange}></input>
                           
                        </div>
                        
                    </div>
                </form>
            </div>
            
        

    )
}
import React from 'react';
import './Cards.css';
import me from './me.png';
import Timeline from './Resuable/Timeline';

function Me()
{
    document.title = "About Me";
    return(
        <div className="about-me">
        <h1 className="Text">ABOUT ME </h1>

        <img src={me} alt="Logo" className="image" />
        <p className="paratext"> I have always been very passionate about IT and Computer Science. As we can see now, IT products and services are like the monuments of the digital world we live in and I have always wanted to contribute to building the digital world just as civil engineers build bridges in the physical world. On a personal level, I am an enthusiastic learner, who tries to improve each day, not just in my technical skills, but in other skills such as communication and organization.</p>
        <p className="paratext"> I am a fitness fanatic,i like playing different sports , football and cricket to name a few  and also love weight training exercises. But at the same time I am regularly on the lookout for tasty foods which had led me to the path of cooking as i tend to keep my diet clean. </p>
        <br/>
        <Timeline></Timeline>
        </div>
       
        
    )
}

export default Me;
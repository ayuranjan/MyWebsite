import { Component } from "react";

class AttendanceSystem extends Component
{
    
    componentDidMount()
    {
        window.open("https://github.com/ayuranjan/Facial-Attendance-System.git", '_bank');
    }
    render()
    {
        this.props.history.push({
            pathname: '/products',
           
        })
        return (null);
    }

}

 export  default AttendanceSystem;
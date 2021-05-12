import { Component } from "react";

class Facebook extends Component
{
    
    componentDidMount()
    {
        window.open("https://www.facebook.com/profile.php?id=100018101141636", '_bank' );
    }
    render()
    {
        this.props.history.push({
            pathname: '/',
           
        })
        return (null);
    }

}

 export  default Facebook;
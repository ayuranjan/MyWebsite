import { Component } from "react";

class Twitter extends Component
{
    
    componentDidMount()
    {
        window.open("https://twitter.com/ayuranjan7", '_bank');
    }
    render()
    {
        this.props.history.push({
            pathname: '/',
           
        })
        return (null);
    }

}

 export  default Twitter;
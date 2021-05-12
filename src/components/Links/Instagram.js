import { Component } from "react";

class Instagram extends Component
{
    
    componentDidMount()
    {
        window.open("https://www.instagram.com/gul_abs_jamun/", '_bank');
    }
    render()
    {
        this.props.history.push({
            pathname: '/',
           
        })
        return (null);
    }

}

 export  default Instagram;
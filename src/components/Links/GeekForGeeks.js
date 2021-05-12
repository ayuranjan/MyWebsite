import { Component } from "react";

class GeekForGeeks extends Component
{
    
    componentDidMount()
    {
        window.open("https://auth.geeksforgeeks.org/user/geekayush7/profile", '_bank');
    }
    render()
    {
        this.props.history.push({
            pathname: '/',
           
        })
        return (null);
    }

}

 export  default GeekForGeeks;
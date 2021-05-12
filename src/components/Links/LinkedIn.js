import { Component } from "react";

class LinkedIn extends Component
{
    
    componentDidMount()
    {
        window.open("https://www.linkedin.com/in/ayush-ranjan-38523216a/", '_bank');
    }
    render()
    {
        this.props.history.push({
            pathname: '/',
           
        })
        return (null);
    }

}

 export  default LinkedIn;
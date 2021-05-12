import { Component } from "react";

class LeetCode extends Component
{
    
    componentDidMount()
    {
        window.open("https://leetcode.com/ayuranjan/", '_bank');
    }
    render()
    {
        this.props.history.push({
            pathname: '/',
           
        })
        return (null);
    }

}

 export  default LeetCode;
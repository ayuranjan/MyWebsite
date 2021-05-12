import { Component } from "react";

class HackerRank extends Component
{
    
    componentDidMount()
    {
        window.open("https://www.hackerrank.com/ayushranjancr7", '_bank');
    }
    render()
    {
        this.props.history.push({
            pathname: '/',
           
        })
        return (null);
    }

}

 export  default HackerRank;
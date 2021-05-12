import { Component } from "react";

class Banking extends Component
{
    
    componentDidMount()
    {
        window.open("https://github.com/ayuranjan/Bank-Application.git", '_bank');
    }
    render()
    {
        this.props.history.push({
            pathname: '/products',
           
        })
        return (null);
    }

}

 export  default Banking;
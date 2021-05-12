import { Component } from "react";

class PortFolio extends Component
{
    
    componentDidMount()
    {
        window.open("https://github.com/ayuranjan/PortFolio.git", '_bank');
    }
    render()
    {
        this.props.history.push({
            pathname: '/products',
           
        })
        return (null);
    }

}

 export  default PortFolio;
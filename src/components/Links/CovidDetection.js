import { Component } from "react";

class CovidDetection extends Component
{
    
    componentDidMount()
    {
        window.open("https://github.com/ayuranjan/COVID-19-.git", '_bank');
    }
    render()
    {
        this.props.history.push({
            pathname: '/products',
           
        })
        return (null);
    }

}

 export  default CovidDetection;
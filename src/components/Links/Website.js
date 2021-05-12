import { Component } from "react";

class Website extends Component
{
    
    componentDidMount()
    {
        window.open("https://github.com/ayuranjan/MyWebsite.git", '_bank');
    }
    render()
    {
        this.props.history.push({
            pathname: '/products',
           
        })
        return (null);
    }

}

 export  default Website;
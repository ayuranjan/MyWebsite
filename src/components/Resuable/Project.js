import { Component } from "react";

class Project extends Component
{
    
    componentDidMount()
    {
        window.open("https://github.com/ayuranjan/Sentiment-Analysis-using-CNN-.git");
    }
    render()
    {
        this.props.history.push({
            pathname: '/products',
           
        })
        return (null);
    }

}

 export  default Project;



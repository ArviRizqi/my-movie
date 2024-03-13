import React from "react"

class Title extends React.Component{
    constructor(){
        super();
        this.state = {
            title : "ini title",
            subtitle : "ini subtitle"
        }
    }  
    
    render(){
        return(
            <div>
                <h1>Ini title</h1>
                <h3>Ini Subtitle</h3>
            </div>
        )
    }

}

export default Title;


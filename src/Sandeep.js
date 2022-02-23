import React from "react";


export default class Sandeep extends React.Component
{
    constructor(){
        super();
        this.reduce=this.reduce.bind(this);
       
    }
    state={
        y:1000,
        
    }
    reduce (){
        this.setState({y:this.state.y-20});
    }
  
    render(){
        return(
            <div>
            {this.state.y}
            <button onClick={this.reduce}>click sandy</button>
    
        </div>
           
        );
    }

}

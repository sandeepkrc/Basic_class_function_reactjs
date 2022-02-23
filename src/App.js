// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';

import React from "react";


//  =======================FUNCTION BASED COMPONENT CONCEPTS================================ 
// function App() {

// const[Sandeep,setSandeep]=useState(100);
// const[Variable1,setVariable1]= useState(200);


//   return (
//     <div>
//       {Sandeep}<button onClick={()=>{setSandeep(Sandeep+1)}}> click </button>
      
  
//       {Variable1} <button onClick={ ()=> {setVariable1(Variable1+20)}}> increase 20 </button>
    
    
//     </div> 
//   );
// };

// export default App;





//  ================== CLASS BASED COMPONENT CONCEPTS (DOUBT)========
// import Sandeep from './Sandeep';
// // import Api from './Api';
// import Show from './Show';

// class AppClass extends React.Component {
//   constructor(){
//     super();
//     this.handlerClick=this.handlerClick.bind(this)
//   }
//   state = 
//       { 
//         x:0,
//       }


//   handlerClick () {
//     this.setState({x:this.state.x+25})

//   };
  
//   render () {
//     // hsndler =() => { this.setState({x : this.x +1}) }
//     return (
//       <div>
//        //   {this.state.x}
//       //   <button onClick={this.handlerClick }>
//       //     click aapjas
//       //   </button> 
//         <Sandeep/> 
//     
//       </div>
//     );
//   };
// };


// export default AppClass;



//  ================== CLASS BASED COMPONENT CONCEPTS 2========
import {useState} from 'react';


class AppClass extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      x:0
    };
  }

  render(){
    return(
      <div>
        <p>click time {this.state.x}</p>
        <button onClick={()=>this.setState({x:this.state.x+10})}>click</button>

      </div>
    );
  }
}
export default AppClass;
//  HOOKS CONCEPT IN REACT

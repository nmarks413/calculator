import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}

function Addition(props){
  return ( 
      Calculator.state.currentValue
  );
}
function Subtraction(props){
  return ( 
      Calculator.state.currentValue
  );
}
function Multiplication(props){
  return ( 
      Calculator.state.currentValue
  );
}
function Division(props){
  return ( 
      Calculator.state.currentValue
  );
}
function Clear(){
  
}
class Calculator extends Component {
  
  render(){
    return(
    <div className="calculator">
        <div className ="display">

        </div>
        <div className ="keys">
          <div className ="row1"> 
            <button className = "blank"></button>
            <button className = "blank"></button>
            <button className = "ac"></button>
            <button className = "divide"></button>
          </div>
          <div className ="row2"> 
            <button className = "7"></button>
            <button className = "8"></button>
            <button className = "9"></button>
            <button className = "multiply"></button>
          </div>
          <div className ="row3"> 
            <button className = "4"></button>
            <button className = "5"></button>
            <button className = "6"></button>
            <button className = "subtract"></button>
          </div>
          <div className ="row4"> 
            <button className = "1"></button>
            <button className = "2"></button>
            <button className = "3"></button>
            <button className = "add"></button>
          </div>
          <div className ="row5"> 
            <button className = "0"></button>
            <button className = "blank"></button>
            <button className = "blank"></button>
            <button className = "equals"></button>
          </div>
        </div>
    </div>
    );
  }
}
class Math extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: null,
      
    }
  }

}
export default App;

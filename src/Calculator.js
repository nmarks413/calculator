import React, { Component } from 'react';
import './Calculator.css';



class Calculator extends Component {
  
  render(){
    return(
    <div className="calculator">
        <div className ="display">
          <div className="numbers">{this.props.display}</div>
        </div>
        <div className ="keys">
          <p>
            <button className = "undo">↶</button>
            <button className = "redo">↷</button>
            <button className = "ac">AC</button>
            <button className = "divide">/</button>
          </p>
          <p>
            <button className = "7">7</button>
            <button className = "8">8</button>
            <button className = "9">9</button>
            <button className = "multiply">*</button>
          </p>
          <p>
            <button className = "4">4</button>
            <button className = "5">5</button>
            <button className = "6">6</button>
            <button className = "subtract">-</button>
          </p>
          <p>
            <button className = "1" onClick={this.props.handleClick}>1</button>
            <button className = "2">2</button>
            <button className = "3">3</button>
            <button className = "add">+</button>
          </p>
          <p>
            <button className = "placeholder">pl</button>
            <button className = "0">0</button>
            <button className = "placeholder">pl</button>
            <button className = "equals">=</button>
          </p>
          </div>
    </div>
    );
  }
}
class mathHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 0,
      funcValue: 0,

    }
    this.handleClick = this.handleClick.bind(this);
  }
  Addition(props){
    
  }
  Subtraction(props){
    
  }
  Multiplication(props){
    
  }
  Division(props){
    
  }
  Clear(){
    this.setState({
      displayValue:0,
    })
  }
  handleClick(event) {
    this.setState({
      displayValue:this.state.displayValue + event.target.classList[0],
    })
  }
  render(){
    return(
      <Calculator 
            display = {this.state.displayValue}
            handleClick = {this.handleClick}
            />
    );
  }
}
export default Calculator;

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
            <button className = "ac" onClick={this.props.Clear}>AC</button>
            <button className = "/" onClick={this.props.handleClick}>/</button>
          </p>
          <p>
            <button className = "7" onClick={this.props.handleClick}>7</button>
            <button className = "8" onClick={this.props.handleClick}>8</button>
            <button className = "9" onClick={this.props.handleClick}>9</button>
            <button className = "*" onClick={this.props.handleClick}>*</button>
          </p>
          <p>
            <button className = "4" onClick={this.props.handleClick}>4</button>
            <button className = "5" onClick={this.props.handleClick}>5</button>
            <button className = "6" onClick={this.props.handleClick}>6</button>
            <button className = "-" onClick={this.props.handleClick}>-</button>
          </p>
          <p>
            <button className = "1" onClick={this.props.handleClick}>1</button>
            <button className = "2" onClick={this.props.handleClick}>2</button>
            <button className = "3" onClick={this.props.handleClick}>3</button>
            <button className = "+" onClick={this.props.handleClick}>+</button>
          </p>
          <p>
            <button className = "placeholder">pl</button>
            <button className = "0" onClick={this.props.handleClick}>0</button>
            <button className = "placeholder">pl</button>
            <button className = "equals" onClick={this.props.handleClick}>=</button>
          </p>
          </div>
    </div>
    );
  }
}
class MathHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "",
      funcValue: 0,

    }
    this.handleClick = this.handleClick.bind(this);
    this.Clear = this.Clear.bind(this);
    this.Equal = this.Equals.bind(this);
  }
  Addition(props){
    
  }
  Subtraction(props){
    
  }
  Multiplication(props){
    
  }
  Division(props){
    
  }
  Equals(){
    if(this.state.displayValue.indexOf("+") !== -1){
      var interValue = this.state.displayValue.split("+")
      this.setState({
        displayValue:(parseInt(interValue[0]) + parseInt(interValue[1])),
      })   
    } else if(this.state.displayValue.indexOf("*") !== -1){
      interValue = this.state.displayValue.split("*")
      this.setState({
        displayValue:(parseInt(interValue[0]) * parseInt(interValue[1])),
      })
    } else if(this.state.displayValue.indexOf("-") !== -1){
      interValue = this.state.displayValue.split("-")
      this.setState({
        displayValue:(parseInt(interValue[0]) - parseInt(interValue[1])),
      }) 
    } else if(this.state.displayValue.indexOf("/") !== -1){
      interValue = this.state.displayValue.split("/")
      this.setState({
        displayValue:(parseInt(interValue[0]) / parseInt(interValue[1])),
      })
    }
  }
  Clear(){
    this.setState({
      displayValue:"",
    })
  }
  handleClick(event) {
    if(this.state.displayValue.length > 18){
      return "";
    }else if(event.target.classList[0] === "equals"){
      this.Equals()
    } else {
      this.setState({
        displayValue:this.state.displayValue + event.target.classList[0],
      })
    }
  }
  render(){
    return(
      <Calculator 
            display = {this.state.displayValue}
            handleClick = {this.handleClick}
            Clear = {this.Clear}
            Equal = {this.Equals}
            />
    );
  }
}
export default MathHandler;

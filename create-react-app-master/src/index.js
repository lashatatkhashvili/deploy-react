import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "0"
    };
  
 }
  clearr() {
    this.setState({
      count: "0"
    });
  }
  
  one1() {
    
    if(this.state.count === "0"){
      this.setState(state => ({
        count : ""
      }));
    }
    this.setState(state => ({
      count: state.count + "1"
    }));
  }
  two2() {
    this.setState(state => ({
      count: state.count + "2"
    }));
  }
   three3() {
    this.setState(state => ({
      count: state.count + "3"
    }));
  }
   four4() {
    this.setState(state => ({
      count: state.count + "4"
    }));
  }
   five5() {
    this.setState(state => ({
      count: state.count + "5"
    }));
  }
   six6() {
    this.setState(state => ({
      count: state.count + "6"
    }));
  }
   seven7() {
    this.setState(state => ({
      count: state.count + "7"
    }));
  }
   eight8() {
    this.setState(state => ({
      count: state.count + "8"
    }));
  }
   nine9() {
    this.setState(state => ({
      count: state.count + "9"
    }));
  }
   zero0() {
    this.setState(state => ({
      count: state.count + "0"
    }));
  }
  
   addd() {
    this.setState(state => ({  
      count: state.count + " " + "+" + " "
        
    }));
  }
  
  dividee() {
    this.setState(state => ({  
      count: state.count + " " + "/" + " "
        
    }));
  }
  
  multiplyy() {
    this.setState(state => ({  
      count: state.count + " " + "*" + " "
        
    }));
  }
  
  subtractt() {
    this.setState(state => ({  
      count: state.count + " " + "-" + " "
        
    }));
  }
  
  equall() {
let result = this.state.count.split(" ")

let mze = 0;
let pas = 0;


for(let i = 0; i < result.length; i++){
  if(result[i] === "*" || result[i] === "/"){
    if(result[i] === "*"){
      mze = parseFloat(result[i-1]) * parseFloat(result[i+1])
    }
     else {
      mze = parseFloat(result[i-1]) / parseFloat(result[i+1])
     }
    result.splice(i-1,2)
    result[i-1] = mze;
    i=0;
    
      
  }
}

for(let i = 0; i < result.length; i++){
  if(result[i] === "+" || result[i] === "-"){
    if(result[i] === "+"){
      mze = parseFloat(result[i-1]) + parseFloat(result[i+1])
    }
     else {
      mze = parseFloat(result[i-1]) - parseFloat(result[i+1])
     }
    result.splice(i-1,2)
    result[i-1] = mze;
    i=0;
   
      
  }
}

pas = result[0].toFixed(1);
this.state.count = pas;
    this.setState(state => ({  
      count: state.count
        
    }));
  }
  
  render() {
    return (
      <div id="calculator">
  <div id="buttons">
    <h1 className="vision">{this.state.count}</h1>
    <button className="clear" onClick={this.clearr.bind(this)}>AC</button>
    <button className="divide" onClick={this.dividee.bind(this)}>/</button>
    <button className="multiply" onClick={this.multiplyy.bind(this)}>*</button>
    <button className="seven" onClick={this.seven7.bind(this)}>7</button>
    <button className="eight" onClick={this.eight8.bind(this)}>8</button>
    <button className="nine" onClick={this.nine9.bind(this)}>9</button>
    <button className="subtract" onClick={this.subtractt.bind(this)}>-</button>
    <button className="four" onClick={this.four4.bind(this)}>4</button>
    <button className="five" onClick={this.five5.bind(this)}>5</button>
    <button className="six" onClick={this.six6.bind(this)}>6</button>
    <button className="add" onClick={this.addd.bind(this)}>+</button>
    <button className="once" onClick={this.one1.bind(this)}>1</button>
    <button className="two" onClick={this.two2.bind(this)}>2</button>
    <button className="three" onClick={this.three3.bind(this)}>3</button>
    <button className="equal" onClick={this.equall.bind(this)}>=</button>
    <button className="zero" onClick={this.zero0.bind(this)}>0</button>
    <button className="decimal">.</button>
    
  </div>
</div>
    );
  }
};
ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

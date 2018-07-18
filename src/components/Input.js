import React, { Component } from 'react';
import '../App.css';

class Input extends Component {

render () {
      return (
        <div className="App">
<input placeholder="Enter Task" onKeyPress={this.CreateTaskHandler}></input> 
        </div>
      );
      
    }
  }
  
  export default Input;
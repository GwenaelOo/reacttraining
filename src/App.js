import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tasklist from './components/Tasklist';
import Task from './components/Task';


class App extends Component {
  constructor(props) {
    super(props);
 
this.state =
   { 
    tasklist: []
  }

  }

  StoreStateHandler = (event) => {
   this.setState({tasklist: event.target.value, });
  }
/*
 CreateTask = (event) => {
    if(event.key === 'Enter')
    tasklist: {this.state.value}
 }
*/



//This is a handler that sets the state after the Enter key is pressed
/*   CreateTask = (event) => {
    if(event.key === 'Enter'){
    this.setState({
      tasklist: event.target.value,
  });}
  }
*/

//This was another try at handling the Onkeypress
// by filling out the state as an array.

CreateTask = (event) => {
  if (event.key === 'Enter'){
    //creation d'une variable tasklist qui copie le state grace a slice
    let tasklist = this.state.tasklist.slice();
    //on pousse la valeur de l'input dans cette nouvelle variable
    tasklist.push(event.target.value);
    //l'ancien state et le dernier input, contenu par la variable tasklist, devient le nouveau state
    this.setState({tasklist});
    event.target.value='';
  }
  }



  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my amazing To do app</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input value={this.props.value} placeholder="Enter Task" /*onChange={this.StoreStateHandler}*/ onKeyPress={this.CreateTask} ></input> 
        
       <Tasklist tasklist={[this.state.tasklist]}/>
      </div>
    );
  }
}

export default App;

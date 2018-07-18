import React from 'react';

  class Task extends React.Component {


    render() {
      return (
       
        <div>
        {this.props.task}
        </div> 
        
      );
    }
  }
  
export default Task;
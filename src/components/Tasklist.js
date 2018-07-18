import React from 'react';
import Task from './Task';

class Tasklist extends React.Component {

    render() {

let Tasks = '';
let test = ['tache0', 'tache1', 'tache2'];
let list = ''
for (let item in test) {

    let Tasks = {nom: test[item].task }

};

test.push(Tasks);

      return (
        <div className="List">
{
    list.map(function (item) { return <Task task={item} />; })
        
        }
        </div>
      );
    }
  }
  
export default Tasklist;
import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
      ],
      selectedTask:undefined,
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];

  };

  taskClicked=(name)=>{

    this.setState({selectedTask:name})
  }

  moveBack=()=>{
    let id;
    console.log(this.state.selectedTask)
    for(let i=0;i<this.state.tasks.length;i++){
      if(this.state.selectedTask===this.state.tasks[i].name){
        id=i;
        break
      }
    }
    let oldtasks=this.state.tasks
    oldtasks[id].stage=this.state.tasks[id].stage>0?
    this.state.tasks[id].stage-1:this.state.tasks[id].stage

    this.setState({tasks:oldtasks})
  }

  moveFront=()=>{
    let id;
    console.log(this.state.selectedTask)
    for(let i=0;i<this.state.tasks.length;i++){
      if(this.state.selectedTask===this.state.tasks[i].name){
        id=i;
        break
      }
    }
    let oldtasks=this.state.tasks
    oldtasks[id].stage=this.state.tasks[id].stage<3?
    this.state.tasks[id].stage+1:this.state.tasks[id].stage

    this.setState({tasks:oldtasks})
  }

  
  render() {
    
    const { tasks } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="App">
        <Controls selectedTask={this.state.selectedTask} moveBack={this.moveBack} 
        moveFront={this.moveFront}/>
        <Board
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
          taskClicked={this.taskClicked}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import taskNameToId from './Task'
class Controls extends Component {
  render() {
    console.log(this.props.selectedTask)
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
            value={this.props.selectedTask}
          />
          <button
            style={{ marginLeft: '1rem' }}
            data-testid="move-back-btn"
            onClick={this.props.moveBack}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            data-testid="move-forward-btn"
            onClick={this.props.moveFront}
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;

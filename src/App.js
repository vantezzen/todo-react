// Import React
import React from 'react';
import './App.css';

// Import components
import { TaskList } from './components/TaskList';
import { TaskComposer } from './components/TaskComposer';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Set state
    this.state = {
      // Empty tasks object
      // This will later hold the created tasks
      tasks: {},

      // ID for the next task
      nextId: 0
    }

    // Bind 'this' to handlers
    this.handleTaskAdd = this.handleTaskAdd.bind(this);
    this.handleTaskToggleComplete = this.handleTaskToggleComplete.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
  }

  // Add new, uncompleted task to the tasks array
  // text: Text for the new task
  handleTaskAdd(text) {
    const id = this.state.nextId;

    let tasks = this.state.tasks;
    tasks[id] = {
      id,
      text,
      completed: false
    };

    this.setState({
      tasks,
      nextId: id + 1
    });
  }

  // Toggle the completed status of a task
  // task: ID of the task to toggle
  handleTaskToggleComplete(task) {
    if (this.state.tasks[task]) {
      let tasks = this.state.tasks;
      tasks[task].completed = !tasks[task].completed;

      this.setState({
        tasks
      });
    }
  }
  
  // Delete task from task list
  // task: ID of the task to delete
  handleTaskDelete(task) {
    if (this.state.tasks[task]) {
      let tasks = this.state.tasks;
      tasks[task] = undefined;

      this.setState({
        tasks
      });
    }
  }

  // Sort tasks by uncomplete and complete
  get sorted() {
      let uncomplete = [];
      let complete = [];

      for (let task in this.state.tasks) {
        if(this.state.tasks[task]) {
          if (this.state.tasks[task].completed) {
              complete.push(this.state.tasks[task]);
          } else {
              uncomplete.push(this.state.tasks[task]);
          }
        }
      }

      let sorted = uncomplete.concat(complete);

      return sorted;
  }

  render() {
    return (
      <div className="container d-flex justify-content-center mt-4">
        <div className="card w-100">
            <div className="card-header text-center">
                Todo
            </div>
            <div className="card-body">
              <TaskList 
                tasks={ this.sorted }
                onTaskToggleComplete={ this.handleTaskToggleComplete }
                onTaskDelete={ this.handleTaskDelete } />
              <TaskComposer onTaskAdd={ this.handleTaskAdd } />
            </div>
        </div>
      </div>
    );
  }
}

export default App;

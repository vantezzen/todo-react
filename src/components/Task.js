// Import React and CSS
import React from 'react';
import './Task.css';

export class Task extends React.Component {
    constructor(props) {
        super(props);

        // Bind 'this' to handlers
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // Handle click event to toggle completed status of task
    handleClick() {
        this.props.onTaskToggleComplete(
            this.props.task.id
        );
    }

    // Handle delete click to delete current task
    handleDelete() {
        this.props.onTaskDelete(
            this.props.task.id
        );        
    }

    render() {
        const task = this.props.task;

        return (
           <li 
            className={ "list-group-item todo-item " + (task.completed && 'item-done') }
            onClick={ this.handleClick }>
                {/* Show icon depending on current completed status */}
                <i className={ "far " + (task.completed ? 'fa-check-circle' : 'fa-circle') }></i>
                
                <span className="item-text">{ task.text }</span>

                {/* Delete task */}
                <span className="float-right" onClick={ this.handleDelete }>
                    <i className="fas fa-trash"></i>
                </span>
            </li>
        );
    }
}
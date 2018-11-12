// Import React and CSS
import React from 'react';
import './TaskList.css';

// Import Task component
import { Task } from './Task';

export class TaskList extends React.Component {
    render() {
        // Create task elements
        const tasks = this.props.tasks.map(task => 
            <Task 
                task={ task } 
                key={ task.id }
                onTaskToggleComplete={ this.props.onTaskToggleComplete }
                onTaskDelete={ this.props.onTaskDelete } />
        );

        return (
            <ul className="list-group list-group-flush">
                { tasks }
            </ul>
        );
    }
}
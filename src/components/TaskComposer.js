// Import React and CSS
import React from 'react';
import './TaskComposer.css';

export class TaskComposer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        // Bind 'this' to handlers
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    // Handle input change event to update state value
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    // Handle keyPress to add task on Enter key
    handleKeyPress(event) {
        if (event.key === 'Enter' && this.state.value !== '') {
            // Add task
            this.props.onTaskAdd(this.state.value);

            // Clear input
            this.setState({
                value: ''
            });
        }
    }


    render() {
        return (
            <input 
                type="text" 
                className="form-control add-task" 
                placeholder="Add a task..." 
                autoFocus
                value={this.state.value} 
                onChange={this.handleChange}
                onKeyPress={ this.handleKeyPress } />
        );
    }
}
import React, { Component } from 'react';
import TodosHeader from'./TodosHeader';
import TasksList from './TasksList';

export default class TodosMain extends Component {
    render() {
        return(
            <div className='main-todos-container'>
                <TodosHeader onPress={ this.props.newTask }/>
                <TasksList user={ this.props.user } deleteTask={ this.props.deleteTask } todos={ this.props.todos }/>
            </div>
        )
    }
}
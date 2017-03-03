import React, { Component } from 'react';
import TodosHeader from'./TodosHeader';
import TasksList from './TasksList';

export default class TodosMain extends Component {
    render() {
        return(
            <div className='main-todos-container'>
                <TodosHeader />
                <TasksList />
            </div>
        )
    }
}
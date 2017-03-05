import React, { Component } from 'react';
import TodosHeader from'./TodosHeader';
import TasksList from './TasksList';

export default class TodosMain extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className='main-todos-container'>
                <TodosHeader onPress={ this.props.newTask }/>
                <TasksList user={ this.props.user } todos={ this.props.todos }/>
            </div>
        )
    }
}
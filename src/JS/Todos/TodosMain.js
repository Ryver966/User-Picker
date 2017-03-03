import React, { Component } from 'react';
import TodosHeader from'./TodosHeader';
import TasksList from './TasksList';

export default class TodosMain extends Component {
    constructor(props) {
        super(props);
        this.newTask = this.newTask.bind(this);
    }
    newTask(taskFieldObject) {
        const userName = this.props.user.name;
        const userArr = JSON.parse(localStorage.getItem(userName));
        if(taskFieldObject.value.length === 0) {
            alert('Enter your task');
            return false;
        } else {
            userArr.push({ task: taskFieldObject.value });
            console.log(userArr);
            localStorage.setItem(userName, JSON.stringify(userArr));
            taskFieldObject.value = '';
            return true;
        }
    };
    render() {
        console.log(this.props.user.name);
        return(
            <div className='main-todos-container'>
                <TodosHeader onPress={ this.newTask }/>
            </div>
        )
    }
}
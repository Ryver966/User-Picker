import React, { Component } from 'react';
import '../../styles/UserPicker.css';
import User from './User';
import UserPopup from './UserPopup';
import TodosMain from '../Todos/TodosMain';

export default class UserPicker extends Component {
    constructor(props) {
        super(props);
        this.popupOpen = this.popupOpen.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.newTask = this.newTask.bind(this);
        this.removeTask = this.removeTask.bind(this);

        this.state = {
            isOpened: false,
            activeUser: this.props.users[0],
            todos: JSON.parse(localStorage.getItem(this.props.users[0].name))
        };
    };

    removeTask(e) {
        const target = e.target;
        const taskArr = JSON.parse(localStorage.getItem(this.state.activeUser.name));
        const taskIndex = taskArr.findIndex(x => x.task === target.parentNode.parentNode.firstChild.innerHTML);
        taskArr.splice(taskIndex, 1);
        localStorage.setItem(this.state.activeUser.name, JSON.stringify(taskArr));
        this.setState({
            todos: taskArr
        });
        return true;
    };

    newTask(taskFieldObject) {
        const userName = this.state.activeUser.name;
        const userArr = JSON.parse(localStorage.getItem(userName));
        if(taskFieldObject.value.length === 0) {
            alert('Enter your task');
            return false;
        } else {
            userArr.push({ task: taskFieldObject.value });
            localStorage.setItem(userName, JSON.stringify(userArr));
            this.setState({
                todos: userArr
            });
            taskFieldObject.value = '';
            return true;
        };
    };

    popupOpen() {
        this.setState({
            isOpened: !this.state.isOpened
        });
    };

    isSelected(user) {
        setTimeout(() => {
            this.setState({
                activeUser: user,
                isOpened: false,
                todos: JSON.parse(localStorage.getItem(user.name))
            })
        }, 200);
        console.log(this.state.todos)
    };

    render() {
        console.log(JSON.parse(localStorage.getItem(this.state.activeUser.name)));
        return(
            <div className='main-container'>
                <div className='active-user'>
                    <h2 className='main-screen-txt'>{ this.state.activeUser.name }</h2>
                    <User user={ this.state.activeUser } onPress={ this.popupOpen } />
                    <UserPopup users={ this.props.users } isOpened={ this.state.isOpened } onPress={ this.isSelected } />
                </div>
                    <TodosMain user={ this.state.activeUser } deleteTask={ this.removeTask } todos={ this.state.todos } newTask={ this.newTask }/>
            </div>
        )
    }
}
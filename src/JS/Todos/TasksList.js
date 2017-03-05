import React, { Component } from 'react';
import '../../styles/Todos.css';

export default class TasksList extends Component {
    render() {
        const todos = JSON.parse(localStorage.getItem(this.props.user.name)).map(todo => 
            <tr>
                <td>{ todo.task }</td>
                <td>
                    <input type='button' value='delete' />
                    <input type='button' value='Edit' />
                </td>
            </tr>
        )
        return(
            <table className='tasks-table'>
                <thead className='table-header'>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { todos }
                </tbody>
            </table>
        )
    }
}
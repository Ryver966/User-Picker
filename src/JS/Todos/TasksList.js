import React, { Component } from 'react';
import '../../styles/Todos.css';

export default class TasksList extends Component {
    render() {
        const todos = JSON.parse(localStorage.getItem(this.props.user.name)).map(todo => 
            <tr>
                <td>{ todo.task }</td>
                <td>
                    <input type='button' value='Delete' />
                    <input type='button' value='Edit' />
                </td>
            </tr>
        )
        return(
            <table className='tasks-table'>
                <thead className='table-header'>
                    <tr>
                        <th className='left-column-header'>Tasks</th>
                        <th className='right-column-header'>Actions</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    { todos }
                </tbody>
            </table>
        )
    }
}
import React, { Component } from 'react';
import '../../styles/Todos.css';

export default class TasksList extends Component {
    render() {
        const tasks = this.props.todos.map(taskObj => 
            <tr>
                <td className='task-name-column'>{ taskObj.task }</td>
                <td>
                    <input type='button' value='Delete' onClick={ this.props.deleteTask }/>
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
                    { tasks }
                </tbody>
            </table>
        )
    }
}
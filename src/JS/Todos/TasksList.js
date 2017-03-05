import React, { Component } from 'react';
import '../../styles/Todos.css';

export default class TasksList extends Component {
    render() {
        console.log(this.props.user.name);
        return(
            <table className='tasks-table'>
                <thead className='table-header'>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test</td>
                        <td>
                            <input type='button' value='Test' />
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
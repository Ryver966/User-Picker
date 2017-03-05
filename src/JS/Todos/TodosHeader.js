import React, { Component } from 'react';
import '../../styles/Todos.css';

export default class TodosHeader extends Component {
    render() {
        return(
            <div className='todos-header'>
                <input type='text' className='add-task-field' placeholder='What you need to do?' />
                <input type='button' className='add-task-btn' value='+' onClick={ () => this.props.onPress(document.getElementsByClassName('add-task-field')[0]) } />
            </div>
        )
    }
}
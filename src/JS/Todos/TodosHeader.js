import React, { Component } from 'react';
import '../../styles/Todos.css';

export default class TodosHeader extends Component {
    render() {
        return(
            <div className='todos-header'>
                <input type='text' placeholder='What you need to do?' />
                <input type='button' value='+' />
            </div>
        )
    }
}
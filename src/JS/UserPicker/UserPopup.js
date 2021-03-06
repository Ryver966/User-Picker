import React, { Component } from 'react';
import '../../styles/UserPicker.css';
import User from './User';

export default class UserPopup extends Component {
    render() {
        const users = this.props.users.map(user => 
            <li className='user-list' key={ user.id }>
                <User user={ user } onPress={ this.props.onPress } />
            </li>
        )
        return(
            <div className={ `popup-container ${ this.props.isOpened ? 'show' : 'hide' }` }>
                <p className='popup-txt'>Select User</p>
                <ul className='users-conatiner'>
                    { users }
                </ul>
            </div>
        )
    }
}
import React, { Component } from 'react';
import '../../styles/UserPicker.css';
import User from './User';
import UserPopup from './UserPopup';

export default class UserPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeUser: this.props.users[0]
        };
    };

    render() {
        console.log(this.props.users);
        return(
            <div className='main-container'>
                <div className='active-user'>
                    <User user={ this.props.users[0] }/>
                    <UserPopup />
                </div>
            </div>
        )
    }
}
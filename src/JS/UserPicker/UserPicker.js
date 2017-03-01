import React, { Component } from 'react';
import '../../styles/UserPicker.css';
import User from './User';
import UserPopup from './UserPopup';

export default class UserPicker extends Component {
    constructor(props) {
        super(props);
        this.popupOpen = this.popupOpen.bind(this);

        this.state = {
            isOpened: false
        };
    };

    popupOpen() {
        console.log('test')
        this.setState({
            isOpened: !this.state.isOpened
        });
    }

    render() {
        return(
            <div className='main-container'>
                <div className='active-user'>
                    <User user={ this.props.users[0] } onPress={ this.popupOpen } />
                    <UserPopup users={ this.props.users } isOpened={ this.state.isOpened } />
                </div>
            </div>
        )
    }
}
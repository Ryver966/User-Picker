import React, { Component } from 'react';
import '../../styles/UserPicker.css';
import User from './User';
import UserPopup from './UserPopup';

export default class UserPicker extends Component {
    constructor(props) {
        super(props);
        this.popupOpen = this.popupOpen.bind(this);
        this.isSelected = this.isSelected.bind(this);

        this.state = {
            isOpened: false,
            activeUser: this.props.users[0]
        };
    };

    popupOpen() {
        console.log('test')
        this.setState({
            isOpened: !this.state.isOpened
        });
    };

    isSelected(user) {
        setTimeout(() => {
            this.setState({
                activeUser: user,
                isOpened: false
            })
        }, 500);
    };

    render() {
        return(
            <div className='main-container'>
                <div className='active-user'>
                    <h2 className='main-screen-txt'>{ this.state.activeUser.name }</h2>
                    <User user={ this.state.activeUser } onPress={ this.popupOpen } isMainScreenUser={ true }/>
                    <UserPopup users={ this.props.users } isOpened={ this.state.isOpened } onPress={ this.isSelected } />
                </div>
            </div>
        )
    }
}
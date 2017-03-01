import React, { Component } from 'react';
import '../../styles/UserPicker.css';

export default function User(props) {
    return(
        <div className='user-avatar'>
            <img src={ props.user.src } className='image-style' />
        </div>
    )
}
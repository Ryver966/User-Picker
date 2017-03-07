import React from 'react';
import ReactDOM from 'react-dom';
import User from '../UserPicker/User';
import { shallow } from 'enzyme';

describe('user', () => {
    const popupOpenMock = jest.fn();
    let props;
    beforeAll(() => {
        props = {
            user: { name: 'Daren', id: 2 },
            onPress: popupOpenMock
        }
    })

    it('single user', () => {
        const wrapper = shallow(<User { ...props } />);
        expect(wrapper.find('.image-style').length).toBe(1)
    });
    it('calls function from onPress prop', () => {
        const wrapper = shallow(<User { ...props } />);
        wrapper.find('img').simulate('click');
        expect(popupOpenMock)
    })
})
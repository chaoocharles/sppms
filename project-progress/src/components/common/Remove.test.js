import React from 'react';
import {shallow} from 'enzyme';
import Remove from './Remove';


const setUp = (props = {}) => {
    const component = shallow(
            <Remove {...props}/>
    )
    return component
}

describe('Remove Component', () => {

    let component;
    beforeEach(() => {
        component = setUp()
    })

    it('Should render without errors', () => {
    console.log(component.debug())
    const wrapper = component.find('.testRemoveBtn');
    expect(wrapper.length).toBe(1);
    })
})
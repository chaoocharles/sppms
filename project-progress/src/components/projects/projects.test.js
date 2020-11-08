import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import CreateProject from './CreateProject';

const mockStore = configureMockStore();
const store = mockStore({})

const setUp = (props = {}) => {
    const component = shallow(
        <Provider store = {store}>
            <CreateProject {...props}/>
        </Provider>
    )
    return component
}

describe('CreateProject Component', () => {

    let component;
    beforeEach(() => {
        component = setUp()
    })

    it('Should render without crashing', () => {
    // console.log(component.debug())
    const wrapper = component.contains(<CreateProject/>);
    expect(wrapper).toBe(true);
    })
})

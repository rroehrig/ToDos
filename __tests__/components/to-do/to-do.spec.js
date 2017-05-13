import React from 'react';
import { shallow } from 'enzyme';
import ToDo from '../../../app/components/to-do/to-do';

describe('ToDo', () => {
    const doNothing = () => {
    };
    // Snapshot testing
    it('renders a completed task correctly in a snapshot', () => {
        const toDoWrapper = shallow(
            <ToDo completed onPress={doNothing}> my completed Task </ToDo>
        );
        expect(toDoWrapper).toMatchSnapshot();
    });
    it('renders a completed task correctly in a snapshot', () => {
        const toDoWrapper = shallow(<ToDo completed={false} onPress={doNothing}>my uncompleted Task</ToDo>);
        expect(toDoWrapper).toMatchSnapshot();
    });

    // testing action calls
    it('triggers the onPress action by pressing the component', () => {
        const mockedOnPress = jest.fn();
        const toDoWrapper = shallow(<ToDo completed onPress={mockedOnPress}>my completed Task</ToDo>);
        expect(mockedOnPress).not.toHaveBeenCalled();
        toDoWrapper.simulate('press');
        expect(mockedOnPress).toHaveBeenCalledTimes(1);
    });
});

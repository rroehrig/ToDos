import React from 'react';
import { shallow } from 'enzyme';
import ToDoList from '../../../app/components/to-do-list/to-do-list';

describe('ToDoList', () => {
    const mockedOnToDoPress = jest.fn();

    const firstToDo = {
        text: 'my first Todo',
        id: 1,
        completed: false,
    };
    const toDos = [firstToDo];
    const toDoWrapper = shallow(<ToDoList onToDoPress={mockedOnToDoPress} toDos={toDos} />);
    // Snapshot testing
    it('renders a ToDoList with one task correctly in a snapshot', () => {
        expect(toDoWrapper).toMatchSnapshot();
    });
});

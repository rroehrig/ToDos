import ToDosReducer, { addTodo, toggleTodo } from '../../app/modules/to-dos';

describe('ToDosReducer', () => {
    const doneToDo = {
        text: 'my second ToDo',
        id: 2,
        completed: true,
    };
    const undoneToDo = {
        text: 'my second ToDo',
        id: 2,
        completed: false,
    };

    it('adds correctly a ToDo', () => {
        const initialState = [];
        const action = addTodo('my second ToDo');
        const expectedState = [undoneToDo];
        expect(ToDosReducer(initialState, action)).toEqual(expectedState);
    });
    it('toggles correctly a undone ToDo', () => {
        const initialState = [undoneToDo];
        const action = toggleTodo(2);
        const expectedState = [doneToDo];

        expect(ToDosReducer(initialState, action)).toEqual(expectedState);
    });
    it('toggles correctly a done ToDo', () => {
        const initialState = [doneToDo];
        const action = toggleTodo(2);
        const expectedState = [undoneToDo];

        expect(ToDosReducer(initialState, action)).toEqual(expectedState);
    });
});

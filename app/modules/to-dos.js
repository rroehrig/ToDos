const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// State of a single todoentry
const todo = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false,
            };
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                completed: !state.completed,
            });

        default:
            return state;
    }
};

// state of the todolist

const initialState = [{
    text: 'Feedback zum Vortrag geben',
    id: 1,
    completed: false,
}];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action),
            ];
        case TOGGLE_TODO:
            return state.map(t =>
                todo(t, action),
            );
        default:
            return state;
    }
};

export default todos;

// Actions
let nextTodoId = 1;
export const addTodo = (text) => {
    nextTodoId += 1;
    return ({
        type: ADD_TODO,
        id: nextTodoId,
        text,
    });
};

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id,
});


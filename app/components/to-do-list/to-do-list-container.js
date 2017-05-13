import { connect } from 'react-redux';
import ToDoList from './to-do-list';
import { toggleTodo } from '../../modules/to-dos';

const mapStateToProps = state => ({
    toDos: state.todos,
});

const mapDispatchToProps = dispatch => (
    {
        onToDoPress: (id) => {
            dispatch(toggleTodo(id));
        },
    });

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default ToDoListContainer;

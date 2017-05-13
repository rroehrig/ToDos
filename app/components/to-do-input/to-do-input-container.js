import { connect } from 'react-redux';
import ToDoInput from './to-do-input';
import { addTodo } from '../../modules/to-dos';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
    {
        onAddTodo: (text) => {
            dispatch(addTodo(text));
        },
    });

const ToDoInputConatiner = connect(mapStateToProps, mapDispatchToProps)(ToDoInput);

export default ToDoInputConatiner;

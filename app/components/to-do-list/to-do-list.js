import React, { PropTypes } from 'react';
import { ListView } from 'react-native';
import ToDo from '../to-do/to-do';

const ToDoList = (props) => {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const data = ds.cloneWithRows(props.toDos);

    const onToDoPress = (id) => {
        props.onToDoPress(id);
    };
    const renderToDoForRowdata = rowdata => (
        <ToDo
            onPress={() => {
                onToDoPress(rowdata.id);
            }}
            completed={rowdata.completed}
        >
            {rowdata.text}
        </ToDo>);

    return (<ListView
        dataSource={data}
        renderRow={rowdata => renderToDoForRowdata(rowdata)}
    />);
};

ToDoList.propTypes = {
    toDos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        }),
    ).isRequired,
    onToDoPress: PropTypes.func.isRequired,
};

export default ToDoList;

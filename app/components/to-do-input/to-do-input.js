import React, { Component, PropTypes } from 'react';
import { TextInput, View, TouchableHighlight, Text, StyleSheet, Image } from 'react-native';
import addSymbol from './addTodoPlus.png';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        borderColor: '#3c9f4c',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'white',
    },

    textinput: {
        fontSize: 20,
        flex: 3,
        paddingHorizontal: 15,
    },

    addSymbol: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        margin: 10,
    },

    addButton: {
        flex: 1,
        backgroundColor: '#46c858',
    },
});

class ToDoInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    render() {
        const addTodo = () => {
            if (this.state.text) {
                this.props.onAddTodo(this.state.text);
            }
            this.setState({ text: '' });
        };
        return (<View style={styles.container}>
            <TextInput
                style={styles.textinput}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
                onSubmitEditing={addTodo}
                placeholder="Was gibt es zu erledigen?"
            />
            <TouchableHighlight style={styles.addButton} onPress={addTodo} underlayColor="#46c858">
                <Image style={styles.addSymbol} source={addSymbol} />
            </TouchableHighlight>
        </View>);
    }

}

ToDoInput.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default ToDoInput;

import React, { PropTypes } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        paddingHorizontal: 15,
    },

    container: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 5,
        justifyContent: 'center',
        backgroundColor: 'white',
    },

})

const ToDo = props => (
    <TouchableHighlight style={styles.container} onPress={props.onPress} underlayColor="white">
        <Text style={[styles.text, {textDecorationLine: props.completed ? 'line-through' : 'none'}]}>
            {props.children}
        </Text>
    </TouchableHighlight>
);

export default ToDo;

ToDo.propTypes = {
    children: PropTypes.node.isRequired,
    completed: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
};

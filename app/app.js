import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Image, View, StyleSheet, Text } from 'react-native';
import ToDoList from './components/to-do-list/to-do-list-container';
import ToDoInput from './components/to-do-input/to-do-input-container';
import reducers from './modules';
import BackgroundImage from './backgroundImage.jpg';

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

const store = createStore(
    reducers,
    applyMiddleware(loggerMiddleware),
);

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },

    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 2,
        margin: 10,
        marginBottom: 15,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
    },

    headertext: {
        fontSize: 32,
        fontFamily: 'bold',
        textAlign: 'center',
        margin: 10,
    },

    addTodo: {
        height: 60,
        marginHorizontal: 10,
        marginBottom: 30,
    },

    toDoList: {
        flex: 1,
        marginHorizontal: 10,
    },
    subHeader: {
        fontSize: 16,
    },
});

const App = () => (
    <Provider store={store}>
        <Image style={styles.backgroundImage} source={BackgroundImage}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>Meine Aufgaben</Text>
                </View>
                <View style={styles.addTodo}>
                    <ToDoInput />
                </View>
                <View style={styles.toDoList}>
                    <ToDoList />
                </View>
            </View>
        </Image>
    </Provider >
);

export default App;

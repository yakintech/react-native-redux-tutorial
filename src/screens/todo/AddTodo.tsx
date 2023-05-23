import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const AddTodo = () => {

    const [title, settitle] = useState('');

    let dispatch = useDispatch();

    const addToDo = () => {
        let newTodoItem = {
            id: Math.floor(Math.random() * 10000),
            title: title
        }

        dispatch({ type: 'ADD_TODO', payload: newTodoItem })
    }

    const emptyTodos = () => {
        dispatch({type:'EMPTY'})
    }

    return (
        <View>
            <TextInput style={styles.input} onChangeText={settitle} />
            <Button onPress={addToDo} title='Add To Do'></Button>
            <Button onPress={emptyTodos} title='empty'></Button>

        </View>
    )
}

export default AddTodo


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
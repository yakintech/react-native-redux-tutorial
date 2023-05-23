import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const CounterScreen = () => {

    const [value, setvalue] = useState('');

    let dispatch = useDispatch();


    const increaseValue = () => {
        dispatch({ type: 'INCREASE' })
    }

    const decreaseValue = () => {
        dispatch({ type: 'DECREASE' })
    }

    const emptyValue = () => {
        dispatch({ type: 'EMPTY' })
    }

    const increaseByValue = () => {
        dispatch({type:'INCREASE_BY_VALUE', payload:Number(value)})
    }

    return (
        <View>
            <Button title='Increase' onPress={increaseValue}></Button>
            <Button title='Decrease' onPress={decreaseValue}></Button>
            <Button title='Empty' onPress={emptyValue}></Button>

            <View>
                <TextInput style={styles.input} onChangeText={setvalue} />
                <Button title='Increase By Value' onPress={increaseByValue}></Button>
            </View>
        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
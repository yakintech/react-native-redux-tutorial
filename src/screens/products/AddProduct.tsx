import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';

const AddProduct = () => {

    const [name, setname] = useState('');

    let dispatch = useDispatch();

    const add = () => {
        axios.post('https://northwind.vercel.app/api/products', { name: name })
            .then(res => {
                dispatch({type:'ADD_TO_PRODUCT', payload:res})
            })
    }

    return (<>
        <View>
            <TextInput style={styles.input} onChangeText={setname} />
            <Button title='add' onPress={add}></Button>
        </View>
    </>)
}

export default AddProduct

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
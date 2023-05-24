import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../App';

const ToDoList = () => {


    let dispatch = useDispatch();
    let {todoState} = useSelector<RootState, any>(state => state);

    const remove = (id:any) => {
        dispatch({type:'REMOVE_TODO', payload:id})
    }

    return (
        <View>
            {
                todoState && todoState.map((item:any) => <Pressable key={item.id} onPress={() => remove(item.id)}><Text>{item.title}</Text></Pressable> )
            }
        </View>
    )
}

export default ToDoList
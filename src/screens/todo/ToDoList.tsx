import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../App';

const ToDoList = () => {


    let data = useSelector<RootState, any>(state => state);


    return (
        <View>
            {
                data && data.map((item:any) => <Text>{item.title}</Text>)
            }
        </View>
    )
}

export default ToDoList
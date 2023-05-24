import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../App';


const HomeScreen = () => {

  //use selector hook ile global STATE erişiyorum. listener, subs
  let { counterState } = useSelector<RootState, any>(state => state);

  console.log('Home Screen rendered!');


  return (
    <View>
      <Text style={{ fontSize: 40 }}>{counterState}</Text>
    </View>
  )
}

export default HomeScreen
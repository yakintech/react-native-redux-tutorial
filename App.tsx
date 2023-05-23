import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { CounterReducer } from './src/screens/store/CounterReducer'
import HomeScreen from './src/screens/HomeScreen'
import CounterScreen from './src/screens/CounterScreen'
import { ToDoReducer } from './src/screens/store/ToDoReducer'
import AddTodo from './src/screens/todo/AddTodo'
import ToDoList from './src/screens/todo/ToDoList'


// const store = createStore(CounterReducer);
const store = createStore(ToDoReducer);

export type RootState = ReturnType<typeof store.getState>

const App = () => {
  return (<>
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AddTodo />
        <ToDoList />
      </SafeAreaView>

    </Provider>
  </>)
}

export default App
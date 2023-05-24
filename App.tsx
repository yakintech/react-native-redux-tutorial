import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { CounterReducer } from './src/screens/store/reducers/CounterReducer'
import HomeScreen from './src/screens/HomeScreen'
import CounterScreen from './src/screens/CounterScreen'
import AddTodo from './src/screens/todo/AddTodo'
import ToDoList from './src/screens/todo/ToDoList'
import ProductListScreen from './src/screens/products/ProductListScreen'
import AddProduct from './src/screens/products/AddProduct'
import thunk from 'redux-thunk'
import { rootReducer } from './src/screens/store/reducers/rootReducer'


// const store = createStore(CounterReducer);


const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>

const App = () => {
  return (<>
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <ProductListScreen/>
        {/* <AddProduct/> */}
      </SafeAreaView>

    </Provider>
  </>)
}

export default App
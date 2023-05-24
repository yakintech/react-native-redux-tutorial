import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../App';
import { productActions } from '../store/actions/productAction';

const ProductListScreen = () => {

  let { productState } = useSelector<RootState, any>(state => state);


  let dispatch = useDispatch();



  useEffect(() => {

    // dispatch(productActions.load())

  }, [])



  return (<>
    <FlatList
      data={productState}
      renderItem={({ item }: any) => <Text>{item.name}</Text>}
    />
  </>
  )
}

export default ProductListScreen
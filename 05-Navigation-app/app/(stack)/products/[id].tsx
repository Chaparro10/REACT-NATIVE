import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { productsTore } from '@/store/product.store';

const ProductDetail = () => {


    const {id}=useLocalSearchParams();

    const product=productsTore.find((item)=>item.id==id);

  return (
    <View className='px-5 mt-10'>
            <Text className='font-noto-black text-2xl'>
                    {product?.title}
            </Text>
            <Text className=''>
                    {product?.description}
            </Text>
            <Text className='font-noto-black'>
                    {product?.price}
            </Text>
    </View>
  )
}

export default ProductDetail;
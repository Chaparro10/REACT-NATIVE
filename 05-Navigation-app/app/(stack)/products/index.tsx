import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { productsTore } from '@/store/product.store'
import { Link } from 'expo-router'


const products = () => {
  return (
    <View className='flex flex1 px-4'>
      <FlatList data={productsTore}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className='mt-10'>
            <Text className='text-2xl font-noto-black'>
              {item.title}
            </Text>
            <Text className='text-2xl font-noto-light'>
              {item.description}
            </Text>



            <View className='flex flex-row justify-between'>
              <Text className='font-noto-bold'>{item.price}</Text>
              <Link href={`/(stack)/products/${item.id}`} className='text-primary'>Ver detalle</Link>
            </View>
          </View>



        )}
      />
    </View>
  )
}

export default products
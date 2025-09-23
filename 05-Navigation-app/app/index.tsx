
import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className='m-20 px-10'>
      <Text className='text-3xl font-bold text-primary'>index</Text>

      <Link href='/home'>
        home
      </Link>
    </View>
  )
}

export default index
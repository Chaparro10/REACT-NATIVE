import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const HomeScreen = () => {
    return (
        <View className='px-20 mt-20'>
            <Text>HOME</Text>
            <Link className='mb-5' href='/products'>
                ir a productos
            </Link>
            <Link className='mb-5' href='/profile'>
                ir a perfilr
            </Link>
            <Link className='mb-5' href='/settings'>
                ir a configuracion
            </Link>
        </View>
    )
}

export default HomeScreen
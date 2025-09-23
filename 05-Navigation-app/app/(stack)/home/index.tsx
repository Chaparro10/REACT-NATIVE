import { View, Text } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const HomeScreen = () => {
    return (
        <View className='px-20 mt-20'>
            <Text>HOME</Text>
            <CustomButton color='primary' onPress={()=>router.push('/products')}>Productos</CustomButton>
          
            <CustomButton color='primary' onPress={()=>router.push('/profile')}>Perfil</CustomButton>

            <CustomButton color='primary' onPress={()=>router.push('/settings')}>Configuracion</CustomButton>

        </View>
    )
}

export default HomeScreen
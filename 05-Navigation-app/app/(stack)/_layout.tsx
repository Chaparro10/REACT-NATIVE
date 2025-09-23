import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack >
            <Stack.Screen name='home/index'
                options={{
                    title: 'home screen',
                }} />
            <Stack.Screen name='products/index'
                options={{
                    title: 'products screen',
                }} />
            <Stack.Screen name='profile/index'
                options={{
                    title: 'profile screen',
                }} />

<Stack.Screen name='settings/index'
                options={{
                    title: 'settings screen',
                }} />


        </Stack>
    )
}

export default StackLayout

import React, { useEffect } from 'react'
import "./global.css"
import { Slot, SplashScreen, Stack } from 'expo-router'
import {useFonts} from 'expo-font'



SplashScreen.preventAutoHideAsync();
const RootLayout = () => {


   const [ fontsLoaded,error]= useFonts({
         'NotoSans_Condensed-Black':require('./assets/fonts/NotoSans_Condensed-Black.ttf'),
         'NotoSans_Condensed-ExtraLightItalic':require('./assets/fonts/NotoSans_Condensed-ExtraLightItalic.ttf'),
        'NotoSans_Condensed-SemiBold':require('./assets/fonts/NotoSans_Condensed-SemiBold.ttf'),
    })


    useEffect(()=>{
        if(error) throw error;
        if(fontsLoaded)SplashScreen.hideAsync();
    },[fontsLoaded,error])


    if(!fontsLoaded && !error) return null;
    
  return <Slot/>
}

export default RootLayout;
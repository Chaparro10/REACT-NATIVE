import ThemeText from '@/components/ThemeText'
import { globalStyles } from '@/styles/global-styles'
import { Text, View } from 'react-native'

 const Index =()=> {
    return (
      <View style={globalStyles.calculatorContainer}>
        <ThemeText
        variant='h1'
        >
          50x5000
        </ThemeText>
        <ThemeText variant='h2'>250</ThemeText>
      </View>
    )
}

export default Index
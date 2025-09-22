import CalculatorButton from '@/components/CalculatorButton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'
import { Operator } from '@/hooks/useCalculator'
import { globalStyles } from '@/styles/global-styles'
import { Text, View } from 'react-native'
const Index = () => {


  const { 
    formula, 
    number, 
    buildNumber, 
    clear, 
    toggleSign, 
    handlePercent, 
    handleOperator, 
    calculate 
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>


      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText
          variant='h1'
        >
          {formula}
        </ThemeText>
        <ThemeText variant='h2'>{number}</ThemeText>
      </View>

      {/* Botones */}
      <View style={globalStyles.row}>
        <CalculatorButton label='C'
          color={Colors.lightGray}
          blackText
          onPress={() => clear()} />
        <CalculatorButton label='+/-'
          color={Colors.lightGray}
          blackText
          onPress={() => toggleSign()} />
        <CalculatorButton label='%'
          color={Colors.lightGray}
          blackText
          onPress={() => handlePercent()} />
        <CalculatorButton label='÷'
          color={Colors.orange}
          onPress={() => handleOperator(Operator.divide)} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='7'
          color={Colors.lightGray}
          blackText
          onPress={() => buildNumber('7')} />


        <CalculatorButton label='8'
          color={Colors.lightGray}
          blackText
          onPress={() => buildNumber('8')} />
        <CalculatorButton label='9'
          color={Colors.lightGray}
          blackText
          onPress={() => buildNumber('9')} />
        <CalculatorButton label='x'
          color={Colors.orange}
          onPress={() => handleOperator(Operator.multiply)} />
      </View>


      <View style={globalStyles.row}>
        <CalculatorButton label='4'
          color={Colors.lightGray}
          blackText
          onPress={() => buildNumber('4')} />
        <CalculatorButton label='5'
          color={Colors.lightGray}
          blackText
          onPress={() => buildNumber('5')} />
        <CalculatorButton label='6'
          color={Colors.lightGray}
          blackText
          onPress={() => buildNumber('6')} />
        <CalculatorButton label='-'
          color={Colors.orange}
          onPress={() => handleOperator(Operator.subtrack)} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='1'
          color={Colors.lightGray}
          blackText
          onPress={() => buildNumber('1')} />
        <CalculatorButton label='2'
          color={Colors.lightGray}
          blackText
          onPress={() => buildNumber('2')} />
        <CalculatorButton label='3'
          color={Colors.lightGray}
          blackText
          onPress={() => buildNumber('3')} />
        <CalculatorButton label='+'
          color={Colors.orange}
          onPress={() => handleOperator(Operator.add)} />
      </View>


      <View style={globalStyles.row}>
        <CalculatorButton label='0'
          doubleSize
          color={Colors.lightGray}
          blackText
          onPress={() => buildNumber('0')} />
        <CalculatorButton label='.'
          color={Colors.lightGray}
          blackText
          onPress={() => buildNumber('.')} />
        <CalculatorButton label='='
          color={Colors.orange}
          onPress={() => calculate()} />

      </View>



    </View>
  )
}

export default Index
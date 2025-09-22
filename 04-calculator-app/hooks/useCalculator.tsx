import { useEffect, useRef, useState } from "react"




export enum Operator {
    add = '+',
    subtrack = '-',
    multiply = 'x',
    divide = '÷',
}

export const useCalculator = () => {


    const [formula, setFormula] = useState('');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator | undefined>(undefined);


    useEffect(() => {
        // Actualiza la fórmula cuando cambia el número
        setFormula(number);
    }, [number])

    const buildNumber = (numberString: string) => {
        console.log('numberString::::', numberString)

        //VERIFICAR EL PUNTO DECIMAL
        if (number.includes('.') && numberString == '.') return;
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString == '.') {
                return setNumber(number + numberString);
            }

            //Evaluar si es otro cero y no un punto
            if (numberString == '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            //Evaluar si es diferente de cero, no hay punto y es el primer numero
            if (numberString != '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            //Evitar el 0000.00000
            if (numberString == '0' && !number.includes('.')) {
                return;
            }
        }


        setNumber(number + numberString);
    }


    const clear = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('');
        lastOperation.current = undefined;
    }

    const toggleSign = () => {
        if (number === '0') return;
        
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const handlePercent = () => {
        const num = parseFloat(number);
        setNumber((num / 100).toString());
    }
    
    const handleOperator = (operator: Operator) => {
        if (number.endsWith('.')) {
            setNumber(number.slice(0, -1));
        }
        
        setPrevNumber(number);
        setNumber('0');
        lastOperation.current = operator;
        setFormula(prevFormula => `${prevFormula} ${operator} `);
    }

    const calculate = () => {
        if (!lastOperation.current) return;
        
        const num1 = parseFloat(prevNumber);
        const num2 = parseFloat(number);
        let result = 0;
        
        switch (lastOperation.current) {
            case Operator.add:
                result = num1 + num2;
                break;
            case Operator.subtrack:
                result = num1 - num2;
                break;
            case Operator.multiply:
                result = num1 * num2;
                break;
            case Operator.divide:
                result = num1 / num2;
                break;
        }
        
        setNumber(result.toString());
        setFormula(result.toString());
        lastOperation.current = undefined;
    }

    return {
        formula,
        number,
        prevNumber,
        buildNumber,
        clear,
        toggleSign,
        handlePercent,
        handleOperator,
        calculate,
    }





}
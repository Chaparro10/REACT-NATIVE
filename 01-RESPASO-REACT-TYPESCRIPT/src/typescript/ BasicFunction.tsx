

export const  BasicFunction = () => {
    
    const addTwoNumber=(a:number,b:number):number=>{
        return a + b
    }

  return (
    <div>
        <h1>
            BasicFunction
        </h1>

        <p>
            El resultado de la suma es: {addTwoNumber(1,4)}
        </p>
    </div>
  )
}
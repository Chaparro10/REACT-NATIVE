
import React from 'react'
import { useAuthContext } from '../context/AuthContex'

export const LoginPage = () => {
    const {isChecking} = useAuthContext();


    if(isChecking){
        return(
            <h1>Verificando usuario</h1>
        )
    }


  return (
    <div>
        <h1>
            LoginPage
        </h1>
        <span>
            {isChecking}
        </span>
    </div>
  )
}

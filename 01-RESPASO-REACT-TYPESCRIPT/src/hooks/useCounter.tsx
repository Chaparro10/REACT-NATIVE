

import React, { useState } from 'react'

export const useCounter = () => {
const [count,setCount]=useState<number>(10); 

    const sum1=()=>setCount((prev)=>prev+1);
    const rest1=()=>setCount((prev)=>prev-1);

    return{
        count:count,
        sum1:sum1,
        rest1:rest1
    }
}

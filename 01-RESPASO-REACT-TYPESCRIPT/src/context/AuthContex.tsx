import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";




 enum AuthStatus {
    'checking',
    'authenticated',
    'unauthenticated',
 }
 interface User{
    email:string,
    password:string
 }
interface AuthState{
    status:AuthStatus,
    token?:string,
    user?:User,
    isChecking:boolean
}

export const AuthContext=createContext({} as AuthState);
export const useAuthContext=()=>useContext(AuthContext);

export const AuthProvider=({children}:PropsWithChildren)=>{
    const [status,setStatus]=useState<AuthStatus>(AuthStatus.checking);
    useEffect(()=>{
            setTimeout(()=>{
                setStatus(AuthStatus.unauthenticated)
            },1500);
    },[])
    return (
        <>
        <AuthContext.Provider value={{status:AuthStatus.checking,isChecking:status ==AuthStatus.checking}}>
        {children}
        </AuthContext.Provider>
        </>
    )
}
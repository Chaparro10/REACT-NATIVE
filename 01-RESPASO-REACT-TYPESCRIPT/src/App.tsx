
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicTypes } from './typescript/BasicTypes'
import ObjectLiteral from './typescript/ObjectLiteral'
import { BasicFunction } from './typescript/ BasicFunction'
import { Counter } from './components/Counter'
import { AuthProvider } from './context/AuthContex'
import { LoginPage } from './components/LoginPage'
import { UserPage } from './components/UserPage'
import { FormsPage } from './components/FormsPage'

function App() {

  return (
    <>
    <AuthProvider>
<h1 className='text-3xl font-bold underline'>REACT + TYPESCRIPT</h1>
    <BasicTypes/>
    <ObjectLiteral/>
    <BasicFunction/>
    <Counter/>
    <LoginPage/>
    <UserPage/>
    <FormsPage/>
    </AuthProvider>
    </>
  )
}

export default App


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicTypes } from './typescript/BasicTypes'
import ObjectLiteral from './typescript/ObjectLiteral'
import { BasicFunction } from './typescript/ BasicFunction'
import { Counter } from './components/Counter'

function App() {

  return (
    <>
    <h1 className='text-3xl font-bold underline'>REACT + TYPESCRIPT</h1>
    <BasicTypes/>
    <ObjectLiteral/>
    <BasicFunction/>
    <Counter/>
    </>
  )
}

export default App

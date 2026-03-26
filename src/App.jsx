import './App.css'
import { useState } from 'react'
import Bulb from './components/Bulb'
import Counter from './components/Counter'

function App() { // App 컴포넌트(부모 컴포넌트)
  return (
    <>
      <Bulb />
      <Counter />
    </>
  )
}

export default App

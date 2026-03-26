import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Cotroller'
import {useState} from 'react'

function App() { // App 컴포넌트(부모 컴포넌트)
  const [count, setCount] = useState(0);
  
  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>

      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App

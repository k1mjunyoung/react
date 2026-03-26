import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Cotroller'

function App() { // App 컴포넌트(부모 컴포넌트)
  return (
    <div className="App">
      <h1>Simple Counter</h1>

      <section>
        <Viewer />
      </section>

      <section>
        <Controller />
      </section>
    </div>
  )
}

export default App

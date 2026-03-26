import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'

function App() { // App 컴포넌트(부모 컴포넌트)
  const buttonProps = {
    text : "매일",
    color: "red"
  };

  return (
    <>
      <Header />
      <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <div>자식요소</div>
        <Header/>
      </Button>
      <Main />
      <Footer />
    </>
  )
}

export default App

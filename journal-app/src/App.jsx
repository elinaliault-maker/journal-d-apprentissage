import './App.css'
import Intro from './components/articles/intro'
import paperTexture from './assets/paper-texture.jpg'

function App() {

  return (
    <>
      <img id="background-texture" src={paperTexture} alt=""/>
      <Intro />
    </>
  )
}

export default App

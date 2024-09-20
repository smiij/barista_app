import { useState } from 'react'
import viteLogo from '/vite.svg'
import BaristaForm from './components/BaristaForm'
import './App.css'
import logo from './components/logo.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <h1 className='title-container' >
          <img src={logo} alt='logo'
            className='image-container'/>On My Grind
          
        </h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />

    </>
  )
}

export default App

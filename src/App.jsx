import { useEffect, useState } from 'react'
import './App.css'
import Img from './assets/divider-mobile.svg'
import Icon from './assets/icon-dice.svg'

function App() {
  const [adviceData, setAdviceData] = useState({})

    const getAdvice = () => {
      let parameter = {
        method : 'GET'
      }
      fetch('https://api.adviceslip.com/advice', parameter)
      .then(response => response.json())
      .then(data => setAdviceData(data.slip))
    }
    useEffect(()=>{
      getAdvice()
    },[])
    
  return (
    <div className="App">
      <div className='advice-container'>
      <h4>
        ADVICE #<span>{adviceData.id}</span>
      </h4>
        <p>
          {/* click */}
        {adviceData.advice}
        </p>
        <div>
          <img src={Img} alt="" />
        </div>
        <div className='icon' onClick={getAdvice}>
          <img src={Icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
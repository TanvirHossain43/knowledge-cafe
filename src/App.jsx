import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import QuestionAnswer from './Components/QuestionAnswer/QuestionAnswer'


function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <QuestionAnswer></QuestionAnswer>
    </div>
  )
}

export default App

import './App.css'
import { Routes, Route } from "react-router-dom"
import Intro from './components/Intro'
import Game from './components/Game'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="game" element={<Game />} />
      </Routes>
      
    </div>
  )
}

export default App

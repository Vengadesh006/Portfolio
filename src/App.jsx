import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home/Home'
import { Nav } from './components/Nav/Nav'
import { Service } from './components/service/Service'
import { Skills } from './components/Skills/Skils'
import { Project } from './components/Project/Project'
import { About } from './components/About/About'
import { Education } from './components/Education/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Nav />
      <div className="top-move" />
      <Home />
      <Service />
      <Skills />
      <Education />
      <Project />
      <About />
     
    </>
  )
}

export default App

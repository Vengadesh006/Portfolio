import { useState } from 'react'
import './App.css'
import { Nav } from './components/navbar/Nav'
import {Header} from './components/header/Header'
import {Progress} from "./components/progress/Progress"
import {Contact} from "./components/contact/Contact"
import { Project } from './components/project/Project'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <div className="space" style={{marginTop : "68px"}} />
    <Header />
    <Progress />
    <div className="space" style={{marginTop : "68px"}} />
    <Project />
    <div className="space" style={{marginTop : "68px"}} />
    <Contact />
    <div className="space" style={{marginTop : "68px"}} />
      
    </>
  )
}

export default App

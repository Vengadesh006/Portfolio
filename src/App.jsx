import { useState } from 'react'
import './App.css'
import { Nav } from './components/navbar/Nav'
import {Header} from './components/header/Header'
// import {About} from "./components/about/About"
import {Progress} from "./components/progress/Progress"
import {Contact} from "./components/contact/Contact"
import { Service } from './components/Service/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <div className="space" style={{marginTop : "68px"}} />
    <Header />
    {/* <About /> */}
    <Progress />
     <div className="space" style={{marginTop : "68px"}} />
    <Service />
    <div className="space" style={{marginTop : "68px"}} />
    <Contact />
    <div className="space" style={{marginTop : "68px"}} />
      
    </>
  )
}

export default App

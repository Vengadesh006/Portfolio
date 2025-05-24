import React, { useEffect, useState } from 'react'
import './Header.css'
import img from '../../assets/venky.jpeg'
// import './SocialIcons.css'; 

export const Header = () => {

const [text, setText] = useState('Python Developer');

useEffect(() => {
  let texts = ["Full-Stack Developer","Software Developer", "Web Developer"]
  let index = 0 

  const interval = setInterval(() => {
    setText(texts[index])
    index = (index + 1) % texts.length
  },4000)
  return () => clearInterval(interval)
})


  return (
    <>
      <div className="container-fluid p-3" id='Header' style={{color : "white"}} >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 text-center text-md-start">
              <h1 className="">VENGADESH V</h1>
              <h2 className="text-items">
                <span className='text first-text' > I'm a </span>
                <span className='text second-text' > {text} </span>
              </h2>
              <p className="fs-5">
                Experienced in building full-stack web applications using Django (DRF) for the backend and React.js for the frontend.
                Skilled in creating APIs, user interfaces, and database-driven features with a focus on clean code and responsive design.
              </p>
              <button className="btn btn-danger btn-lg mt-4">Hire Me <span> <i className="bi bi-briefcase"></i> </span> </button>
            
            <div className="icons">
              <span>
        <a href="https://www.linkedin.com/in/vengadesh005/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
      </span>
      <span>
        <a href="https://github.com/Vengadesh006" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
      </span>
      <span>
        <a href="https://www.instagram.com/white_vs_boy/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
      </span>
      <span>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
      </span>
             </div>
             
            </div>
            <div className="col-md-4 text-center mt-4 mt-md-0">
              <img
                src={img}
                alt="Profile"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>

        </div>

      </div>



    </>
  )
}

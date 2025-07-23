import React, { useEffect, useState } from 'react'
import "./Home.css"
import homeImage from "../../assets/home.jpg"


export const Home = () => {

  const [text, setText] = useState("Python Developer")

  const arr = ["Software Developer", "Full-Stack Developer", "Back-end Developer"]

  

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(arr[index])
      index = (index + 1) % arr.length
    },4000)

    return () => clearInterval(interval)
  })


  return (
    <>
      <div className="container py-5" id='Home'>
        <div className="row align-items-center">
          {/* Left Side: Text Content */}
          <div className="col-md-6">
            <h1 className="fw-bold display-4">VENGADESH V</h1>
            <h2 className="text-items">
              <span className='text first-text' > I'm a </span>
              <span className='text second-text' > {text} </span>
            </h2>
            <p className="lead">
              Enthusiastic and dedicated Entry-Level Python Full-Stack Developer with a solid foundation in
              <strong> Python, Django, and React.js</strong>. Experienced in building real-world projects that combine a dynamic React.js frontend with powerful Django REST API backends. Always eager to learn and grow with modern web technologies.
            </p>
            <div className="btn-items  mt-4">
              <a  href="mailto:vengadesh473@gmail.com" className="btn btn-danger btn-lg">
                Hire Me!
              </a>
            </div>
            <div className="icons my-4">
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

          {/* Right Side: Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={homeImage}
              alt="Profile"
              className="img-fluid rounded shadow"
              width="100%"
              style={{ maxWidth: '500px', height: 'auto' }}
            />
          </div>
        </div>
        <hr />
      </div>


    </>
  )
}

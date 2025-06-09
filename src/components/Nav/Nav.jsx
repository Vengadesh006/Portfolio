import React from 'react'

export const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div className="container">
          <h2 href="#" className="navbar-brand fw-bold"><span className='text-danger' >V</span>PORT</h2>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-scroll="true"
            data-bs-toggle="offcanvas"
            data-bs-target="#NABARITEMS"
            aria-controls="NABARITEMS"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-start" tabIndex="-1" id="NABARITEMS">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav nav-underline ms-auto">
                <li className="nav-item">
                  <a href="#Home" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#Service" className="nav-link">Service</a>
                </li>
                <li className="nav-item">
                  <a href="#Skills" className="nav-link">Skills</a>
                </li>
                <li className="nav-item">
                  <a href="#Project" className="nav-link">Projects</a>
                </li>
                <li className="nav-item">
                  <a href="#Education" className="nav-link">Education</a>
                </li>
                <li className="nav-item">
                  <a href="#About" className="nav-link">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>


    </>
  )
}


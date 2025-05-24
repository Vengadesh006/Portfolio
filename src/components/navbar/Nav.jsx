import React from 'react'

export const Nav = () => {

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top' >
        <div className="container">
          <a href="" className='navbar-brand' > <span style={{color : 'red',fontSize :"2rem",fontWeight : 'bold'}} >V</span>PORTFOLIO </a>
         <button className='navbar-toggler' data-bs-target="#PROFILEPAGE" data-bs-toggle="collapse" > <span className='navbar-toggler-icon' > </span> </button>

         <div className="collapse navbar-collapse" id='PROFILEPAGE'>
          <ul className="navbar-nav nav-underline ms-auto">
            <li className="nav-item">
              <a href="#Header" className="nav-link"> Home </a>
            </li>
          
            <li className="nav-item">
              <a href="#Progress" className="nav-link"> Skills </a>
            </li>
            <li className="nav-item">
              <a href="#Service" className="nav-link"> Service </a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-link"> Contact </a>
            </li>
              <li className="nav-item">
              <a href="#About-page" className="nav-link">About Us </a>
            </li>
          </ul>
         </div>

        </div>
        

      </nav>
    
    
    </>
  )
}

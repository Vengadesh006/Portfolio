import React from 'react'
import "./Contact.css"

export const Contact = () => {
  return (
    <>
        <div className="container" id='Contact' >
          <div className="row d-flex align-items-center">
            <div className="col para1">
              <h1> <span className='text-danger'>G</span>et In  <span className='text-danger'>T</span>ouch </h1>
              <p> 
                Feel free to get in touch with me. I am always open to discssing new projects,
                 creative ideas or get ideas opportunities to be part of your open visions.
              </p>
              <div className="contact-address">
                <div className="contact-icon">
                  <span> <i className="bi bi-calendar3-range-fill"></i> </span>
                </div>
                <div className="contact-infor">
                  <h4> Address </h4>
                  <h5> Rajathanikaottai,East Street </h5>
                  <h5> Dindigul-624203 </h5>
                </div>
              </div>
              <div className="contact-address">
                <div className="contact-icon">
                  <span> <i className="bi bi-telephone-fill"></i></span>
                </div>
                <div className="contact-infor">
                  <h4> Phone </h4>
                  <h5> +91 9345965363 </h5>
                 
                </div>
              </div>
              <div className="contact-address">
                <div className="contact-icon">
                  <span> <i className="bi bi-envelope-fill"></i> </span>
                </div>
                <div className="contact-infor">
                  <h4> Email </h4>
                  <h5 className='' > <a href="mailto:vengadesh473@gmail.com"> vengadesh473@gmail.com </a> </h5>
                </div>
              </div>

            </div>
            <div className="col mt-4" style={{color : 'white'}} >
              <div className="form-data">
                <h1 className='text-white text-center' >  <span className='text-danger'>C</span>ontact <span className='text-danger'>U</span>s </h1>
                <form action="">
                  <div className="form-group my-3" >
                    <label htmlFor="" className='form-label' > username: </label>
                    <input type="text" className='form-control' placeholder='username' />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="" className='form-label'> Email : </label>
                    <input type="email" className='form-control' placeholder='Email' />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="" className='form-label'> Subject: </label>
                    <input type="text"  className='form-control' placeholder='Subject' />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="" className='form-label'> Comment: </label>
                    <input type="textarea" className='form-control' placeholder='comment' />
                  </div>
                  <div className="submit-btn mt-4 d-flex justify-content-center">
                    <button className='btn btn-danger w-50' > Submit </button>
                  </div>
                  
                </form>

              </div>

            </div>
          </div>

        </div>
    
    </>
  )
}

import React from 'react'
import "./About.css"

export const About = () => {
  return (
    <>
      <div className="container" id='About' >
        <hr />
        <div className="row">
          <div className="col mt-4">
            <h4 className='my-3'>Get in Touch Info</h4>
            <p className='fw-bold' >
              Feel free to get in touch with me. I am always open to discssing new projects,
              creative ideas or get ideas opportunities to be part of your open visions.
            </p>
            <div className="contact-address">
              <div className="contact-icon">
                <span> <i className="bi bi-calendar3-range-fill"></i> </span>
              </div>
              <div className="contact-infor">
                <h5> Address </h5>
                <p> Rajathaikottai,East Street </p>
                <p> vettaikaran Street </p>
                <p> Dindigul-624203 </p>
              </div>
            </div>
            <div className="contact-address">
              <div className="contact-icon">
                <span> <i className="bi bi-telephone-fill"></i></span>
              </div>
              <div className="contact-infor">
                <h5> Phone </h5>
                <p> +91 9345965363 </p>

              </div>
            </div>
            <div className="contact-address">
              <div className="contact-icon">
                <span> <i className="bi bi-envelope-fill"></i> </span>
              </div>
              <div className="contact-infor">
                <h5> Email </h5>
                <p className='link-offset-2' > <a href="mailto:vengadesh473@gmail.com"> vengadesh473@gmail.com </a> </p>
              </div>
            </div>

          </div>
          <div className="col-12 col-md-8 col-lg-6 mt-4">
            <div className="form-data border p-4 rounded-4 shadow-sm bg-light">
              <h5 className="text-center mb-4">Contact Us</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">Comment:</label>
                  <textarea
                    className="form-control"
                    id="comment"
                    rows="5"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-danger">
                    Submit
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

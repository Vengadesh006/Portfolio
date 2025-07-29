import React from 'react'
import "./Education.css"

export const Education = () => {
  return (
    <>
    <h4 className='text-center my-4'id='Education' > EDUCATION </h4>
   <div className="container backgrounds">
    <div className="row align-info">
        <div className="col cols">
            <div className="edu-icons">
                <i className="bi bi-person-circle"></i>
            </div>
            <div className="edu-info">
                <p className='para1'>May 2020 - Aug 2023</p>
                <h5 className='edu-head' >Madurai Kamaraj University</h5>
                <h3 className='edu-second'>BSc in Computer Science</h3>
               
            </div>
        </div>
        <div className="col cols">
            <div className="edu-icons">
               <i class="bi bi-backpack3"></i>
            </div>
            <div className="edu-info">
                <p className='para1' >Jan 2024 - Oct 2024</p>
                <h5 className='edu-head' >Edex Tech IT Solution</h5>
                <h3 className='edu-second' >Full-Stack Python Course</h3>
               
            </div>
        </div>
    </div>
</div>

    </>
  )
}

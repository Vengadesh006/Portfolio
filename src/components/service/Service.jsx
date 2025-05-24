import React from 'react';
import './Service.css';
import img1 from '../../assets/m4.jpeg'
import img2 from "../../assets/lonuge.jpg"

export const Service = () => {
    const arr = [
        {
            name: "Room Booking Managemnet",
            image: img1,
            url : "https://github.com/Vengadesh006/E-commerce-Site-"
        },
        {
            name: "E-Commerce Site",
            image: img2,
            url : "https://github.com/Vengadesh006/Hotel-Room-Booking-Management"
        },
        {
            name: "Student Attendance Management",
            image: "https://www.shutterstock.com/image-vector/time-attendance-tracking-system-abstract-600nw-2282512623.jpg",
            url : "https://github.com/Vengadesh006/Coures_management"
        }
    ];

    return (
        <div className="container" id='Service' >
            <h1 className='text-center my-5 text-white' > <span className='text-danger' >P</span>roject </h1>
            <div className="row justify-content-center">
                {arr.map((item, index) => (
                    <div className="col-md-4 mb-4 image-code " key={index}>
                        <div className="card service-img text-white bg-dark h-100">
                           <a href={item.url}>
                            <img
                                src={item.image}
                                className="card-img-top service-image"
                                alt={item.name}
                            />
                            </a> 
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

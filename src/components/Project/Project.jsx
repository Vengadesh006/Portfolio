import React, { useState } from 'react'
import img1 from "../../assets/activewear.jpg"
import img2 from "../../assets/homeDecor.jpg"
import img3 from "../../assets/chat.jpg"
import { motion } from 'framer-motion'
import { fadeIn } from '../../variant'




export const Project = () => {
    const arr = [
        {
            name: "Room Booking Managemnet",
            image: img2,
            url: "https://github.com/Vengadesh006/E-commerce-Site-",
            desc: ` Search rooms based on date, type, and availability using dynamic queries to the MySQL database.`,
            language : ["Django","Mysql","Html","Css3"]
        },
        {
            name: "E-Commerce Site",
            image: img1,
            url: "https://github.com/Vengadesh006/Hotel-Room-Booking-Management",
            desc: `Developed a full-stack e-commerce platform using Django Rest Framework (DRF) for backend and React.js for frontend.`,
            language : ["React.js","Django REST Framework","Mysql","Bootstrap"]},
        {
            name: "Student Attendance Management",
            image: "https://www.shutterstock.com/image-vector/time-attendance-tracking-system-abstract-600nw-2282512623.jpg",
            url: "https://github.com/Vengadesh006/Coures_management",
            desc: `Developed a hotel booking system with user registration, login, booking history, and profile management`
            ,language : ["Django","Mysql","Html","Css3"]
        },
        {
            name: "Websocket chat",
            image: img3,
            url: "",
            desc: `Primarily for building RESTful APIs, but can be integrated with WebSockets for real-time features.`,
            language : ["React.js","Django REST Framework","Mysql","Bootstrap"]
        }
    ];
    const [selectedProject, setSelectedProject] = useState(null);

    const handleViewProject = (project) => {
        setSelectedProject(project);
    };

    return (
        <>
            <div className="container my-5" id='Project' >
                <h2 className="text-center mb-4">Projects</h2>

                <motion.div
                 variants={fadeIn('up',0.5)}
                initial = "hidden"
                whileInView={"show"}
                viewport={{once : false,amount : 0.7}}
                
                
                className="row g-4">
                    {arr.map((item, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={item.image}
                                    className="card-img-top img-fluid"
                                    alt={item.name}
                                    style={{ height: "180px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text flex-grow-1">{item.desc}</p>
                                     <div className="mb-2">
            {Array.isArray(item.language) &&
              item.language.map((tech, techIndex) => (
                <span
                  className="badge text-bg-secondary me-1 mb-1"
                  key={techIndex}
                >
                  {tech}
                </span>
              ))}
          </div>
                                    <button
                                        className="btn btn-danger mt-auto"
                                        // style={{backgroundColor : "#e75b69",color:"White"}}
                                        data-bs-toggle="modal"
                                        data-bs-target="#projectModal"
                                        onClick={() => handleViewProject(item)}
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Modal (single, dynamic) */}
                <div
                    className="modal fade"
                    id="projectModal"
                    tabIndex="-1"
                    aria-labelledby="projectModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content shadow-lg rounded-4 border-0">
                            <div className="modal-header bg-danger text-white rounded-top-4">
                                <h1 className="modal-title fs-4" id="projectModalLabel">
                                    {selectedProject?.name}
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body p-4">
                                <h5 className="fw-semibold">Description</h5>
                                <p className="text-muted">{selectedProject?.desc}</p>

                                <div className="mt-3">
                                    <span className="fw-semibold">URL: </span>
                                    <a
                                        href={selectedProject?.url}
                                        className="text-decoration-none text-primary"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {selectedProject?.url}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

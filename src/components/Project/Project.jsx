import React from 'react'
import "./Project.css"
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import room from "../../assets/activewear.jpg"
import chat from "../../assets/chat.jpg"
import hotal from "../../assets/homeDecor.jpg"
import code from "../../assets/code.jpg"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const projects = [
  {
    name: 'Room Booking Management',
    image: hotal,
    url: 'https://github.com/Vengadesh006/Hotel-Room-Booking-Management',
    desc: 'Search rooms based on date, type, and availability using dynamic queries to the MySQL database.',
    language: ['Django', 'MySQL', 'HTML', 'CSS3'],
  },
  {
    name: 'E-Commerce Site',
    image: room,
    url: 'https://github.com/Vengadesh006/E-commerce-Site-',
    desc: 'Developed a full-stack e-commerce platform using Django Rest Framework (DRF) for backend and React.js for frontend.',
    language: ['React.js', 'Django REST Framework', 'MySQL', 'Bootstrap'],
  },
  {
    name: 'Student Attendance Management',
    image: code ,
    url: 'https://github.com/Vengadesh006/Coures_management',
    desc: 'Developed a student attendance system with features like login, attendance records, and course tracking.',
    language: ['Django', 'MySQL', 'HTML', 'CSS3'],
  },
  {
    name: 'WebSocket Chat App',
    image: chat,
    url: '#',
    desc: 'Integrated WebSocket with DRF for real-time chat and live data sync between users.',
    language: ['React.js', 'Django Channels', 'WebSocket', 'Bootstrap'],
  },
]

export const Project = () => {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">My Projects</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        
      >
        {projects.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="card mx-1 shadow-sm rounded p-3 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src={item.image}
                  className="img-fluid"
                  alt={item.name}
                  height={100}
                  width={200}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
                <div className="mb-3">
                  {item.language.map((lang, index) => (
                    <span
                      key={index}
                      className="badge bg-secondary mx-1"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

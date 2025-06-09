import React from 'react'
import "./Service.css"
import { fadeIn } from '../../variant'
import { motion } from 'framer-motion'


export const Service = () => {
    const arr = [
        {
            "icons" :<i className="bi bi-code-slash"></i>,
            "content" : "Web Development",
            "color" : "red",
            "desc" :"I'm a passionate Web Developer skilled in building responsive, user-friendly, and performance-optimized websites. I specialize in front-end technologies like HTML, CSS, JavaScript, and React.js, and also have hands-on experience with back-end development using Python (Django) and database management with"
        },
        {
            "icons" :<i className="bi bi-robot"></i>,
            "content" : "Data Structures and Algorithms",
             "color" : "green",
            "desc" :"Data Structures are ways of organizing and storing data so it can be accessed and modified efficientlyAlgorithms are step-by-step procedures or formulas for solving problems using data structures."
        },
        {
            "icons" :<i className="bi bi-database"></i>,
            "content" : "DataBase",
             "color" : "blue",
             "desc" : `A database is an organized collection of data that can be easily accessed, managed, and updated.It is the backbone of most web and software applications, allowing systems to store and retrieve data efficiently.`
        }
        
    ]

  return (
    <>
     <h3 className='text-center mb-4' id='Service' > Provide Service </h3>
    <div className="container-card">
        {arr.map((items,index) => (
            <motion.div 
            variants={fadeIn('up',0.5)}
            initial = "hidden"
            whileInView={"show"}
            viewport={{once : false,amount : 0.7}}
            
            className="cards" style={{"--color" :items.color }} key={index} >
                <div className="new-icons"> {items.icons} </div>
                <h5> {items.content} </h5>
                <p>
                    {items.desc}
                </p>
            </motion.div>
        ))}
    </div>
    <hr />        
    </>
  )
}

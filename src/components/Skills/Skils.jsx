import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';
import pngimage from "../../assets/type-14704.gif";
import {
    CircularProgressbar,
    buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from '../../variant';

export const Skills = () => {
    const skills = [
        { language: "Python", Score: 80 },
        { language: "React.js", Score: 70 },
        { language: "JavaScript", Score: 80 },
        { language: "MySQL", Score: 50 },
        { language: "DRF Django Rest Framework", Score: 75 },
        { language: "Bootstarp", Score: 65 }
    ];

    const [animationScore, setAnimationScore] = useState(skills.map(() => 0));

    // Setup scroll trigger
    const skillsRef = useRef(null);
    const isInView = useInView(skillsRef, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            setAnimationScore(prev =>
                prev.map((val, i) =>
                    val < skills[i].Score ? val + 1 : val
                )
            );
        }, 100); // Faster update

        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <div className="container" id="Skills" ref={skillsRef}>
            <h2 className="text-center my-5">My Skills</h2>

            <div className="row align-items-center">
                {/* Left section */}
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <motion.img
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        src={pngimage}
                        className="img-fluid mb-3"
                        style={{
                            height: "auto",
                            maxHeight: "400px",
                            objectFit: "cover",
                            width: "100%"
                        }}
                        alt="Skill Illustration"
                    />
                    <motion.div
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <h5 className="text-danger mb-3">
                            ____ Dedicated to hard-working and professionalism
                        </h5>
                        <p className="para">
                            Dedicated and hard-working Python Full-Stack Developer with experience in building responsive web applications using Django Rest Framework and React.js. Committed to writing clean, efficient code and delivering professional, user-focused solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Right section - Progress Bars */}
                <div className="col-12 col-md-6">
                    <div className="row g-4 justify-content-center">
                        {skills.map((item, i) => (
                            <div className="col-6 col-sm-4 text-center" key={i}>
                                <div className="progress-item">
                                    <CircularProgressbar
                                        value={animationScore[i]}
                                        text={`${animationScore[i]}%`}
                                        styles={buildStyles({
                                            pathColor: 'red',
                                            textColor: '#000',
                                            trailColor: '#eee',
                                            pathTransitionDuration: 1,
                                        })}
                                    />
                                    <p className="mt-2">{item.language}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

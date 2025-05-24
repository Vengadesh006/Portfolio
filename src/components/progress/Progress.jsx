import React, { useEffect, useState } from 'react';
import './Progress.css';
import {
    CircularProgressbar,
    buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Progress = () => {
    const skills = [
        { language: "Python", Score: 80 },
        { language: "React.js", Score: 70 },
        { language: "JavaScript", Score: 80 },
        { language: "MySQL", Score: 50 },
        { language: "DRF Django Rest Framework", Score: 75 },
        { language: "Bootstarp", Score: 65 }
    ];

    const [animationScore, setAnimationScore] = useState(skills.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationScore(prev =>
                prev.map((val, i) => (val < skills[i].Score ? val + 1 : val))
            );
        }, 30);
        return () => clearInterval(interval);
    }, []);


    return (
        < >
       
            <div className='my-5'  style={{ color: 'white'}} id='Progress' >
                <div className="container d-flex a-items-center ">
                    <div className="row">
                        {/* Left Section */}
                        <div className="col">
                            <h1 className='my-5'> <span className='text-danger' >M</span>y  <span className='text-danger' >S</span>kills</h1>
                            <h5 className='my-4 text-danger'> ____ Dedicated to hard-working and professionalism</h5>
                            <p className='para' >
                                Dedicated and hard-working Python Full-Stack Developer with experience in building responsive web applications using Django Rest Framework and React.js. Committed to writing clean, efficient code and delivering professional, user-focused solutions.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="col-md-6">
                            <div className="row g-4">
                                {skills.map((item, i) => (
                                    <div className="col-6 col-sm-4 text-center" key={i}>
                                        <div className="progress-item">
                                            <CircularProgressbar
                                                value={animationScore[i]}
                                                text={`${animationScore[i]}%`}
                                                styles={buildStyles({
                                                    pathColor: 'red',
                                                    textColor: 'white',
                                                    trailColor: '#eee',
                                                    pathTransitionDuration: 0.5,
                                                })}
                                            />
                                            <p className="mt-2">{item.language}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

import React from 'react';
import {skills} from "../../../constants/dummy";

const Skills = () => {
    return (
        <>
            <section id="skills" className="skills">
                {/*Skills*/}
                <div className="skills container">

                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>

                    <div className="row skills-content">

                        <div className="row">

                            {
                                skills?.map(item => (
                                    <div className="col-md-6" key={item.id}>
                                        <div className="progress">
                                            <span className="skill">
                                                {item.name}
                                                <i className="val">{item.now}%</i>
                                            </span>
                                            <div className="progress-bar-wrap">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    aria-valuenow={item.now}
                                                    aria-valuemin={item.min}
                                                    aria-valuemax={item.max}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                {/*End Skills*/}

                {/*Interests*/}
                <div className="interests container">

                    <div className="section-title">
                        <h2>Interests</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="ri-robot-fill" style={{color: '#5578ff'}}/>
                                <h3>Artificial Intelligence</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="icon-box">
                                <i className="ri-robot-line" style={{color: '#ffbb2c'}}/>
                                <h3>Machine Learning</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="ri-emotion-normal-fill" style={{color: '#e80368'}}/>
                                <h3>Deep Learning</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <i className="ri-search-fill" style={{color: '#e361ff'}}/>
                                <h3>Cyber Security</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-database-2-line" style={{color: '#47aeff'}}/>
                                <h3>Database Clustering</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-download-cloud-line" style={{color: '#ffa76e'}}/>
                                <h3>Cloud Computing</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-image-2-fill" style={{color: '#11dbcf'}}/>
                                <h3>Digital Image Processing</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="ri-server-fill" style={{color: '#4233ff'}}/>
                                <h3>Server Management</h3>
                            </div>
                        </div>

                    </div>

                </div>
                {/*End Interests*/}

            </section>
        </>
    );
};

export default Skills;

import React from 'react';
import Image from "next/image";
import {coreTechs} from "../../../constants/dummy";

const About = () => {
    return (
        <>
            <section id="about" className="about">

                {/*About Me*/}
                <div className="about-me container">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>Learn more about me</p>
                        <p
                            style={{
                                fontSize: '1rem',
                                fontWeight: '500',
                                lineHeight: '1.5',
                                textTransform: 'none',
                                textAlign:'justify'
                            }}
                            className="card-subtitle">
                            As a committed and seasoned software engineer, I bring over five years of valuable experience
                            in managing and contributing to mid to large-scale, challenging projects. In the past two years,
                            I have embraced the role of Team Lead, where I have successfully transformed client requirements
                            into robust products. My expertise spans developing microservice architectures, mastering DevOps
                            practices, and leveraging AWS services to enhance project outcomes. Passionate about continuous
                            learning, I am always eager to acquire new skills and apply them innovatively in my work.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <Image
                                loading='eager'
                                width={450}
                                height={450}
                                src="/assets/img/me.png"
                                className="img-fluid"
                                alt="profile image"/>

                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>My Core Technologies:</h3>

                            <div className="row">
                                <div className="col-lg-12">
                                    <ul>
                                        {coreTechs?.map(item=>(
                                            <li key={item.id}>
                                                 <p style={{
                                                     fontSize: '1rem',
                                                     fontWeight: '500',
                                                     lineHeight: '1.5',
                                                     textTransform: 'none',
                                                     textAlign:'justify'
                                                 }}>
                                                     {item.id}. <strong>{item.title}:</strong>{item.techs}
                                                 </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*End About Me*/}

                {/*Counts*/}
                <div className="counts container">


                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <div className="count-box">
                                <i className="bi bi-emoji-smile"/>
                                <span data-purecounter-start="0" data-purecounter-end="50"
                                      data-purecounter-duration="1"
                                      className="purecounter"></span>
                                <p><strong>Happy Clients</strong></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                                <i className="bi bi-journal-richtext"/>
                                <span data-purecounter-start="0" data-purecounter-end="100"
                                      data-purecounter-duration="1"
                                      className="purecounter"></span>
                                <p><strong>Projects</strong> I have done</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-headset"/>
                                <span data-purecounter-start="0" data-purecounter-end="1453"
                                      data-purecounter-duration="1"
                                      className="purecounter"></span>
                                <p><strong>Hours Of Support</strong></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-award"/>
                                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1"
                                      className="purecounter"></span>
                                <p><strong>Hard Working</strong> tough projects</p>
                            </div>
                        </div>

                    </div>

                </div>
                {/*End Counts*/}

            </section>
        </>
    );
};

export default About;

import React from 'react';
import Image from "next/image";

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
                                textTransform: 'none'
                            }}
                            className="fst-italic">
                            I like to build awesome software. For more than four years I am working on this
                            developing sector. In this period I have developed many web and mobile applications
                            using many environments and programming languages. I love my profession and I am always
                            looking for the improvements and progressions in my career.
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
                            <h3>My Core Tech:</h3>

                            <div className="row">
                                <div className="col-lg-12">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"/>
                                            <strong>Frontend:</strong>
                                            <span>
                                                React Js (Next Js, Redux, Flux, Material UI, React-bootstrap), Vue Js(Nuxt Js, Vuex).
                                            </span>
                                        </li>

                                        <li><i className="bi bi-chevron-right"/> <strong>Backend:</strong>
                                            <span>
                                                PHP (Laravel, Codeigniter), Node Js (Express Js).
                                            </span>
                                        </li>

                                        <li><i className="bi bi-chevron-right"/> <strong>Apps Development:</strong>
                                            <span>
                                                Native (Java, Android, Swift), Cross Platform (React Native, Ionic).
                                            </span>
                                        </li>

                                        <li><i className="bi bi-chevron-right"/> <strong>Api Development:</strong>
                                            <span>
                                                Rest Api (Laravel), GraphQL.
                                            </span>
                                        </li>

                                        <li><i className="bi bi-chevron-right"/> <strong>Database:</strong>
                                            <span>
                                                MySQL, MongoDB, Firebase.
                                            </span>
                                        </li>

                                        <li><i className="bi bi-chevron-right"/> <strong>DevOps:</strong>
                                            <span>
                                                Digital Ocean,AWS, Cloud, Linux (Apache, Mysql Server), Docker, Kubernetes, Jenkins.
                                            </span>
                                        </li>
                                        <li><i className="bi bi-chevron-right"/> <strong>Scrum Agile
                                            Methodology:</strong>
                                            <span>
                                                Git, Bitbucket, Github, Gitlab, Trello, Jira, ClickUp.
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <p>
                                Very passionate about learning new technologies, breaking down complex problems, and
                                learning from other developers and I always keep myself updated with the latest
                                platforms, frameworks, libraries, and technologies.
                            </p>
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

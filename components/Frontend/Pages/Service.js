import React from 'react';

const Service = () => {
    return (
        <>
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title">
                        <h2>Services</h2>
                        <p>My Services</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble"/></div>
                                <h4><a href="">Web Development</a></h4>
                                <p>
                                    For Web Development I use frontend technologies React Js (Next Js, Redux, Flux,
                                    Material UI, React-bootstrap), Vue Js(Nuxt Js, Vuex), backend PHP (Laravel,
                                    Codeigniter), Node Js (Express Js), and database MySQL, MongoDB, Firebase.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-android"/></div>
                                <h4><a href="">Apps Development</a></h4>
                                <p>For Development I use Native (Java, Android, Swift), Cross Platform (React Native,
                                    Ionic), Rest API (Laravel), GraphQL, Node Js (Express Js), and database technologies
                                    MySQL, MongoDB, Firebase.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dev-to"/></div>
                                <h4><a href="">Developer Operations (DevOps)</a></h4>
                                <p>For developer operations, auto deployment, server setup, load balancing etc I use
                                    Digital Ocean,AWS, Cloud, Linux (Apache, Mysql Server), Docker, Kubernetes, Jenkins,
                                    Git, Bitbucket, Github, Gitlab.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxs-server"/></div>
                                <h4><a href="">Server</a></h4>
                                <p>AWS, Digital Ocean Server setup, hosting allocation, domain configuration etc.</p>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-cart-fill"/></div>
                                <h4><a href="">e-Commerce Solution</a></h4>
                                <p>Provide pos integrated multi-vendor e-commerce solution.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-visa"/></div>
                                <h4><a href="">Freelancing</a></h4>
                                <p>Freelancer of upwork, fiverr & freelancer dot com.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Service;

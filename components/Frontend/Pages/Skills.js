import React from 'react';

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

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">98%</i></span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="98"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">React JS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="90"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Android, Java <i className="val">92%</i></span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="92"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">HTML, CSS, Bootstrap <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="80"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Vue JS <i className="val">72%</i></span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="72"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Figma, Photoshop, Gravit Designer, Adobe XD <i
                                    className="val">62%</i></span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="62"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill">PHP <i className="val">95%</i></span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="95"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Laravel <i className="val">98%</i></span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="98"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">CodeIgniter <i className="val">78%</i></span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="78"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Mysql/MariaDB <i className="val">95%</i></span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="95"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Unix OS (Linux, Mac)<i className="val">98%</i></span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="98"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            {/*Digital Ocean Server*/}
                            <div className="progress">
                                <span className="skill">Digital Ocean, AWS Server<i className="val">78%</i></span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="78"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

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
                        <div className="col-lg-3 col-md-4">
                            <div className="icon-box">
                                <i className="ri-robot-line" style={{color: '#ffbb2c'}}/>
                                <h3>Machine Learning</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="ri-robot-fill" style={{color: '#5578ff'}}/>
                                <h3>Artificial Intelligence</h3>
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
                                <h3>Server</h3>
                            </div>
                        </div>

                        {/*<div className="col-lg-3 col-md-4 mt-4">*/}
                        {/*    <div className="icon-box">*/}
                        {/*        <i className="ri-anchor-line" style={{color: '#b2904f'}}/>*/}
                        {/*        <h3>Dirada Pack</h3>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-3 col-md-4 mt-4">*/}
                        {/*    <div className="icon-box">*/}
                        {/*        <i className="ri-disc-line" style={{color: '#b20969'}}/>*/}
                        {/*        <h3>Moton Ideal</h3>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-3 col-md-4 mt-4">*/}
                        {/*    <div className="icon-box">*/}
                        {/*        <i className="ri-base-station-line" style={{color: '#ff5828'}}/>*/}
                        {/*        <h3>Verdo Park</h3>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-3 col-md-4 mt-4">*/}
                        {/*    <div className="icon-box">*/}
                        {/*        <i className="ri-fingerprint-line" style={{color: '#29cc61'}}/>*/}
                        {/*        <h3>Flavor Nivelanda</h3>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>

                </div>
                {/*End Interests*/}

            </section>
        </>
    );
};

export default Skills;

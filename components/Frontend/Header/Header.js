import React from 'react';

const Header = () => {
    return (
        <>
            {/*Start Header*/}
            <header id="header">
                <div className="container">

                    <h1>
                        <a href="https://juyelrana.com/">Md. Juyel Rana</a>
                    </h1>

                    <h2>A passionate <span>Full Stack Developer</span> from Dhaka, BD</h2>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link active" href="#header">Home</a></li>
                            <li><a className="nav-link" href="#about">About</a></li>
                            <li><a className="nav-link" href="#skills">Skills</a></li>
                            <li><a className="nav-link" href="#resume">Resume</a></li>
                            <li><a className="nav-link" href="#services">Services</a></li>
                            <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
                            <li><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"/>
                    </nav>
                    {/*navbar*/}

                    <div className="social-links">

                        <a
                            title="Linkedin"
                            href="https://www.linkedin.com/in/mohammad-juyel-rana-39b51a118/"
                            target='_blank'
                            className="linkedin" rel="noreferrer">
                            <i className="bi bi-linkedin"/>
                        </a>
                        <a
                            title="Email"
                            href="mailto:contact@mjuyelrana.com"
                            target='_blank'
                            className="email"
                            rel="noreferrer">
                            <i className="bi bi-envelope"/>
                        </a>
                        <a
                            title="Github"
                            href="https://github.com/JuyelRana"
                            className="github"
                            target="_blank"
                            rel="noreferrer">
                            <i className="bi bi-github"/>
                        </a>
                        <a
                            title="stack-overflow"
                            href="https://stackoverflow.com/users/4043779/md-juyel-rana"
                            className="stack-overflow"
                            target="_blank"
                            rel="noreferrer">
                            <i className="bx bxl-stack-overflow"/>
                        </a>
                        <a
                            title='Facebook'
                            target='_blank'
                            href="#"
                            className="facebook">
                            <i className="bi bi-facebook"/>
                        </a>
                        <a
                            title='Skype'
                            href="skype:juyel.rana30?text"
                            className="skype"
                            target="_blank"
                            rel="noreferrer">
                            <i className="bi bi-skype"/>
                        </a>
                    </div>

                </div>
            </header>
            {/*End Header*/}
        </>
    );
};

export default Header;

import React from 'react';
import {socialLinks} from "../../../constants/dummy";

const Header = ({baseUrl}) => {
    return (
        <>
            {/*Start Header*/}
            <header id="header">
                <div className="container">

                    <h1>
                        <a href={baseUrl}>Md. Juyel Rana</a>
                    </h1>

                    <h2>A passionate <span>Full Stack Developer</span> from Rajshahi, Bangladesh. Now working in Kyoto, Japan.</h2>

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
                        {
                            socialLinks?.map(item => (
                                <a
                                    title={item.title}
                                    href={item.url}
                                    target={item.target}
                                    className={item.anchorClass}
                                    rel={item.rel} key={item.id}>
                                    <i className={item.iClass}/>
                                </a>
                            ))
                        }
                    </div>

                </div>
            </header>
            {/*End Header*/}
        </>
    );
};

export default Header;

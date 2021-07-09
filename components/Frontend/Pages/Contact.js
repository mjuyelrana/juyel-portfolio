import React from 'react';

const Contact = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Contact Me</p>
                    </div>

                    <div className="row mt-2">

                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-map"/>
                                <h3>My Address</h3>
                                <p>4/A Rafiq Housing(4th Floor), 10, Shekertek, Adbar, Mohammadpur, Dhaka-1207</p>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-share-alt"/>
                                <h3>Social Profiles</h3>
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

                                    {/*<a*/}
                                    {/*    title="stack-overflow"*/}
                                    {/*    href="https://stackoverflow.com/users/4043779/md-juyel-rana"*/}
                                    {/*    className="stack-overflow"*/}
                                    {/*    target="_blank"*/}
                                    {/*    rel="noreferrer">*/}
                                    {/*    <i className="bx bx-stack-overflow"/>*/}
                                    {/*</a>*/}

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
                        </div>

                        <div className="col-md-6 mt-4 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-envelope"/>
                                <h3>Email Me</h3>
                                <p>mjuyelrana@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-phone-call"/>
                                <h3>Call Me</h3>
                                <p>+8801726903951</p>
                            </div>
                        </div>
                    </div>

                    <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name"
                                       placeholder="Your Name" required/>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email"
                                       placeholder="Your Email" required/>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject"
                                   placeholder="Subject" required/>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message"
                                      required/>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>

                </div>
            </section>
        </>
    );
};

export default Contact;

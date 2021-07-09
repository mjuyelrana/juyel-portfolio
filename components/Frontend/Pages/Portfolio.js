import React from 'react';
import {portfolios} from "../../../constants/dummy";
import Image from "next/image";

const Portfolio = () => {
    return (
        <>
            <section id="portfolio" className="portfolio">
                <div className="container">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>My Works</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container">


                        {
                            portfolios?.map((product, index) => (

                                <div className={`col-lg-4 col-md-6 portfolio-item filter-${product.type}`}
                                     key={product.id}>
                                    <div className="portfolio-wrap">
                                        <Image
                                            loading='eager'
                                            width={800}
                                            height={600}
                                            src={product.image}
                                            className="img-fluid"
                                            alt={product.name}/>

                                        <div className="portfolio-info">

                                            <h4>{product.name}</h4>

                                            <p>{product.type.toUpperCase()}</p>

                                            <div className="portfolio-links">

                                                <a href={product.image}
                                                   data-gallery="portfolioGallery"
                                                   className="portfolio-lightbox"
                                                   title={product.name}>
                                                    <i className="bx bx-plus"/>
                                                </a>

                                                {/*<a href={product.url}*/}
                                                {/*   data-gallery="portfolioDetailsGallery"*/}
                                                {/*   data-glightbox="type: external"*/}
                                                {/*   className="portfolio-details-lightbox"*/}
                                                {/*   title="Portfolio Details">*/}
                                                {/*    <i className="bx bx-link"/>*/}
                                                {/*</a>*/}

                                                <a
                                                    target="_blank"
                                                    href={product.url}
                                                    title={product.name} rel="noreferrer">
                                                    <i className="bx bx-link"/>
                                                </a>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </div>
            </section>
        </>
    );
};
export default Portfolio;




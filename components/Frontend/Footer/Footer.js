import React from 'react';

const Footer = ({baseUrl}) => {
    return (
        <>
            <div className="credits">
                Designed & Developed by <a href={baseUrl}>Md Juyel Rana</a>
            </div>
        </>
    );
};

export default Footer;

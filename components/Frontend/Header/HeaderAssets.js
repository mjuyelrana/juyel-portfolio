import React from 'react';
import Script from 'next/script'

const HeaderAssets = () => {
    return (
        <>
            {/*Vendor JS Files*/}
            <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
            <Script src="/assets/vendor/glightbox/js/glightbox.min.js"/>
            <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"/>
            <Script src="/assets/vendor/php-email-form/validate.js"/>
            <Script src="/assets/vendor/purecounter/purecounter.js"/>
            <Script src="/assets/vendor/swiper/swiper-bundle.min.js"/>
            <Script src="/assets/vendor/waypoints/noframework.waypoints.js"/>

            {/*Template Main JS File*/}
            <Script src="/assets/js/main.js"/>
        </>
    );
};

export default HeaderAssets;

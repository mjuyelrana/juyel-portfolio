import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {

    const [baseUrl, setBaseUrl] = useState('');

    useEffect(() => {
        setBaseUrl(window.location.host);
    }, [])

    return (
        <>
            <Header baseUrl={baseUrl}/>
            {children}
            <Footer baseUrl={baseUrl}/>
        </>
    );
};

export default Layout;

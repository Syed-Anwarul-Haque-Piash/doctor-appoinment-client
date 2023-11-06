import React from 'react';
import Header from '../components/Header/Header';
import Routers from '../routes/Routers';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header></Header>
            {/* <main>
                <Routers></Routers>
            </main> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Layout;
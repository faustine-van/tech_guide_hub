import React from 'react';
import Navbar from './Home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';


function Layout() {
    return (
        <> 
        <Navbar/>
        <Outlet />
        <Footer />
        </>
    );
}

export default Layout;
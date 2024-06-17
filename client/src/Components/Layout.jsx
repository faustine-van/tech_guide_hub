import React from 'react';
import Navbar from './Home/Navbar';
import { Outlet } from 'react-router-dom';


function Layout() {
    return (
        <> 
        <Navbar/>
        <Outlet />
        </>
    );
}

export default Layout;
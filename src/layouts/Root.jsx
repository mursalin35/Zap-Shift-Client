import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;
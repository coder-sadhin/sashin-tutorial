import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shered/Footer';
import Header from '../components/shered/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='dark:bg-black'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
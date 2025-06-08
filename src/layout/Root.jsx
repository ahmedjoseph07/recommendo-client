import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <div className='flex-grow'> <Outlet/> </div>
            <div>footer</div>
        </div>
    );
};

export default Root;
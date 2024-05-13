import React from 'react';
import Navigation from '../pages/Shared/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Navigation/>
            <Outlet/>
        </div>
    );
};

export default LoginLayout;
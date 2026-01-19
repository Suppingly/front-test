import React from 'react';
import { Route,Routes } from 'react-router-dom';

import Home from './HomePage/Home';
import Blog from './Blog/Blog';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
        </Routes>
    );
};

export default AppRoutes;
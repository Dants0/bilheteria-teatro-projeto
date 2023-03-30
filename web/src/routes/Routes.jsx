import { Routes, Route } from "react-router-dom";
import React from 'react'

import Home from "../pages/Home";
import Login from "../pages/RegisterAndLogin";
import Announcement from "../pages/Announcement";
import Sobre from "../pages/Sobre";

// import Profile from '../page/Profile/index'
// import Login from '../page/Login/index'
// import NotFoundPage from "../page/NotFoundPage";
// import Annoucement from "../page/Announcement";
// import Users from "../page/Users";

const PathRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cartaz' element={<Announcement/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            {/* <Route path='/profile' element={<Profile/>}/>
            <Route path='*' element={<NotFoundPage/>}/> */}
        </Routes>
    )
}

export default PathRoutes
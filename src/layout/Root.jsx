import React from 'react'
import MainLayout from './MainLayout'
import { Route, Routes } from 'react-router'
import Home from '../page/Home'

const Root = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />}></Route>
                
            </Route>
            


        </Routes>
    )
}

export default Root

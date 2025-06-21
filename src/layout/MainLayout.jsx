import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='w-11/12 mx-auto mt-4'>
       <Outlet/>
    </div>
  )
}

export default MainLayout

import React from 'react'
import ProductsDashboard from './ProductsDashboard'
import Customer from '../components/Customer'

const Home = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center my-4'>Welcome to the Bill Payments App</h1>
      <Customer/>
      <ProductsDashboard/>
    </div>
  )
}

export default Home

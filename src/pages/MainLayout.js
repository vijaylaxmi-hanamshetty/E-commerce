import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
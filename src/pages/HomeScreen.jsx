import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CarouselHighlight from '../components/CarouselHighlight'

import '../styles/HomeScreen.css'
import Welcome from '../components/Welcome'
import ShortAbout from '../components/ShortAbout'
import Banner from '../components/Banner'

export default function HomeScreen() {
  return (
    <>
      <Navbar />
      <main className="home-container">
        <Banner />
        <Welcome />
        <CarouselHighlight />
        <ShortAbout />
        <Footer />
      </main>
    </>
  )
}

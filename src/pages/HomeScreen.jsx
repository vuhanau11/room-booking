import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CarouselHighlight from '../components/CarouselHighlight';
import banner from '../assets/banner.jpg';
import banner1 from '../assets/banner1.jpg';

import '../styles/HomeScreen.css';
import Welcome from '../components/Welcome';
import ShortAbout from '../components/ShortAbout';

export default function HomeScreen() {
  return (
    <>
      <Navbar />
      <main className="home-container">
        <div className="mt--42">
          <div className="banner">
            <img src={banner} alt="banner" className="banner-img" />
            <img src={banner1} alt="banner1" className="banner-img1" />
          </div>
        </div>
        <Welcome />
        <CarouselHighlight />
        <ShortAbout />
        <Footer />
      </main>
    </>
  );
}

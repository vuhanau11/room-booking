import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CarouselHighlight from '../components/CarouselHighlight';
import banner from '../assets/banner.jpg';

import '../styles/HomeScreen.css';
import Welcome from '../components/Welcome';

export default function HomeScreen() {
  return (
    <>
      <Navbar />
      <main className="home-container">
        <div className="mt--42">
          <div className="banner">
            <img src={banner} alt="banner" />
          </div>
        </div>
        <Welcome />
        <CarouselHighlight />
        <Footer />
      </main>
    </>
  );
}

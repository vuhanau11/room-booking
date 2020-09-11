import React from 'react'
import banner from '../assets/banner.jpg'
import banner1 from '../assets/banner1.jpg'

export default function Banner() {
  return (
    <div className="mt--42">
      <div className="banner">
        <img src={banner} alt="banner" className="banner-img" />
        <img src={banner1} alt="banner1" className="banner-img1" />
      </div>
    </div>
  )
}

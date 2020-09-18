import React from 'react'
import Service from '../services/ApiService'
import Slider from 'react-slick'
import { useQuery } from 'react-query'

import { settings } from '../models/settingSlick'
import Loading from '../components/Loading'
import NotFound from '../components/NotFound'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import '../styles/CarouselHighlight.css'
import ListCity from './ListCity'

export default function CarouselHighlight() {
  const { status: loading, data: city } = useQuery('city', () =>
    Service.getCity()
  )
  if (loading === 'loading') return <Loading />
  if (loading === 'error') return <NotFound />

  return (
    <div className="carousel">
      <div className="carousel-title">
        <h2>Địa điểm nổi bật</h2>
        <p>
          Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn
        </p>
      </div>
      <Slider {...settings} className="slider">
        {city.data.map((data) => (
          <ListCity key={data.id} listCity={data} />
        ))}
      </Slider>
    </div>
  )
}

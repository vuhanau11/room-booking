import React, { useState, useEffect } from 'react';
import Service from '../services/ApiService';
import Slider from 'react-slick';

import { settings } from '../models/settingSlick';
import Loading from '../components/Loading';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../styles/CarouselHighlight.css';
import ListCity from './ListCity';

export default function CarouselHighlight() {
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Service.getCity()
      .then((res) => {
        setCity(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="carousel">
      <div className="carousel-title">
        <h2>Địa điểm nổi bật</h2>
        <p>
          Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn
        </p>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <Slider {...settings} className="slider">
          {city.map((data) => (
            <ListCity key={data.id} listCity={data} />
          ))}
        </Slider>
      )}
    </div>
  );
}

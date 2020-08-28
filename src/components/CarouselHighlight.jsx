import React, { useState, useEffect } from 'react';
import Service from '../services/ApiService';
import Slider from 'react-slick';

import { settings } from '../models/settingSlick';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../styles/CarouselHighlight.css';

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
            <div key={data.id}>
              <Link to={`/city/${data.id}`}>
                <div className="image-item">
                  <img alt="city" src={data.imgUrl} />
                </div>
                <div className="text-item">
                  <p>{data.title}</p>
                  <span>
                    <b>{data.num}</b> chỗ ở
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

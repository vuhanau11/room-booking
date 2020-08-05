import React, { useState, useEffect } from 'react';
import Service from '../services/ApiService';
import '../styles/CarouselHighlight.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function CarouselHighlight() {
  const [place, setPlace] = useState([]);
  useEffect(() => {
    Service.getRooms()
      .then((res) => {
        setPlace(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel">
      <div className="carousel-title">
        <h2>Địa điểm nổi bật</h2>
        <p>
          Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn
        </p>
      </div>
      <Slider {...settings} className="slider">
        {place.map((data) => (
          <div key={data.id}>
            <div className="image-item">
              <img alt={'users here'} src={data.imgUrl} />
            </div>
            <div className="text-item">
              <p>{data.title}</p>
              <span>
                <b>{data.num}</b> chỗ ở
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

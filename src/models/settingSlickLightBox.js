export const settingLightBox = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      },
    },
    {
      breakpoint: 487,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
      },
    },
  ],
};

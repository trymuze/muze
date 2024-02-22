import React from 'react';
import Slider from 'react-slick';

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // slides every 2 seconds
  };

  return (
    <div className="hero-carousel-wrapper">
      <Slider {...settings}>
        <div>
          <img src="/path/to/your/image1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="/path/to/your/image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="/path/to/your/image3.jpg" alt="Image 3" />
        </div>
        <div>
          <img src="/path/to/your/image4.jpg" alt="Image 4" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;

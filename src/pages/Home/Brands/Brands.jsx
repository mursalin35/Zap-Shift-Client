import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amzon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import monster from "../../../assets/brands/moonstar.png";
import renssted from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import sterPepal from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandsLogos = [amzon, casio, monster, renssted, star, sterPepal];

const Brands = () => {
  return (
    <div className="mt-16">
        <h2 className="text-center font-bold text-2xl mb-8">We've helped thousands of sales teams</h2>
      <Swiper
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {brandsLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <img src={logo} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;

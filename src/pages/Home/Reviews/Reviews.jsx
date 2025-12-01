import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import customer from "../../../assets/customer-top.png";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewsCard from "./ReviewsCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  return (
    <div className="mt-24">
      <div className="flex flex-col items-center">
        <img className="max-h-screen " src={customer} alt="customer" />
        <h2 className="text-4xl font-bold text-secondary mt-6">
          What our customers are sayings
        </h2>
        <p className="text-sm text-gray-500 text-center mt-4 font-semibold mb-16">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>

      <Swiper
      loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "40%",
          depth: 100,
          modifier: 1,
          scale: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((reviewCard) => (
          <SwiperSlide key={reviewCard.id}>
            <ReviewsCard reviewCard={reviewCard} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;

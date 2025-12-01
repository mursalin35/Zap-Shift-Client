import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurService from "../OurService/OurService";
import Brands from "../Brands/Brands";
import FeaturesList from "../FeaturesList/FeaturesList";
import MerchantBanner from "../MerchantBanner/MerchantBanner";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurService />
      <Brands />
      <FeaturesList />
      <MerchantBanner />
      <Reviews reviewsPromise={reviewsPromise} />
    </div>
  );
};

export default Home;

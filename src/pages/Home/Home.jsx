import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import CategoriesSection from '../../Components/CategoriesSection/CategoriesSection';
import FeaturedBooks from '../../Components/FeaturedBooks/FeaturedBooks';
import LatestBooks from '../../Components/LatestBooks/LatestBooks';
import Onsale from '../../Components/Onsale/Onsale';
import NewArrivals from '../../Components/NewArrivals/NewArrivals';
import BestsellingBooks from '../../Components/BestsellingBooks/BestsellingBooks';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <CategoriesSection />
      <FeaturedBooks />
      <LatestBooks />
      <Onsale />
      <NewArrivals />
      <BestsellingBooks />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
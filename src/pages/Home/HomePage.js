// src/pages/Home/HomePage.js
import React from 'react';
import Introduction from '../../components/Home/Introduction';
import WhyChooseUs from '../../components/Home/WhyChooseUs';
import Courses from '../../components/Home/Courses';
import Faculty from '../../components/Home/Faculty';
import SuccessStories from '../../components/Home/SuccessStories';
import CTA from '../../components/Home/CTA';

function HomePage() {
  return (
    <>
      <Introduction />
      <WhyChooseUs />
      <Courses />
      <Faculty />
      <SuccessStories />
      <CTA />
    </>
  );
}

export default HomePage;
import React from 'react';
import HeroBanner from '../component/HeroBanner';
import PetCareFeatures from '../component/PetCareFeatures';
import ServiceDetail from '../component/ServiceDetail';
import img1 from '/assets/images/about-petcare.png'

const Services = () => {
  return (
    <>
      <HeroBanner 
        badgeText="Services!"
        titleLine1="Caring Services"
        titleLine2="for Happy"
        highlightText="Pets"
        subText="Providing compassionate, reliable, and professional care to keep pets healthy, happy, and loved."
      />

      <PetCareFeatures
        badgeText="Every Pets Deserves Care!"
        title="Personalize Pet Care You Can Always"
        highlightTitle="Trust"
        description="High-quality veterinary care to keep pets healthy and happy from routine checkups to advanced treatments, always."
        image={img1}
        phone="00123456789"
      />

      <ServiceDetail />
    </>
  );
};

export default Services;
import React from 'react'
import HeaderSection from '../components/OtcDeskComponents/HeaderSection';
import WhyUs from '../components/OtcDeskComponents/WhyUs';
import Benefits from '../components/OtcDeskComponents/Benefits';
import WhatMakesUsDifferent from '../components/OtcDeskComponents/WhatMakesUsDifferent';
import Works from '../Components/OtcDeskComponents/Works'
import Footprint from '../Components/OtcDeskComponents/Footprint'
import Countries from '../Components/OtcDeskComponents/Countries'
import Faq from '../Components/OtcDeskComponents/Faq'

const OtcDesk = () => {
  return (
    <>
      <HeaderSection />
      <WhyUs />
      <Benefits />
      <WhatMakesUsDifferent />
      <Works/>
      <Footprint/>
      <Countries/>
      <Faq/>
    </>
  )
}

export default OtcDesk

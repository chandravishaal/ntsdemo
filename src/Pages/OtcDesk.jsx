import React from 'react'
import HeaderSection from '../Components/OtcDeskComponents/HeaderSection';
import WhyUs from '../Components/OtcDeskComponents/WhyUs';
import Benefits from '../Components/OtcDeskComponents/Benefits';
import WhatMakesUsDifferent from '../Components/OtcDeskComponents/WhatMakesUsDifferent';
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

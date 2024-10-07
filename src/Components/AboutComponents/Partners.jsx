import React from 'react'
import DesktopPartners from './DesktopPartners'
import MobilePartners from './MobilePartners'

const Footer = () => {
  return (
    <div>
      <div className='hidden lg:block z-40'>
        <DesktopPartners />
      </div>
      <div className='block lg:hidden'>
        <MobilePartners />
      </div>
    </div>
  )
}

export default Footer
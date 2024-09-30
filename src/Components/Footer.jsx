import React from 'react'
import MobileFooter from './MobileFooter'
import DesktopFooter from './DesktopFooter'

const Footer = () => {
  return (
    <div>
      <div className='hidden lg:block'>
        <DesktopFooter />
      </div>
      <div className='block lg:hidden'>
        <MobileFooter />
      </div>
    </div>
  )
}

export default Footer
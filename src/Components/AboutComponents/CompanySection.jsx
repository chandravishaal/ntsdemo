import React from 'react';
import DesktopCompanySection from './DesktopCompanySection';
import MobileCompanySection from './MobileComapanySection';

const CompanySection = ()=> {
  return(
    
    <div>

      <div className='hidden sm:block'>
      <DesktopCompanySection/>
      </div>

      <div className='block sm:hidden'>
      <MobileCompanySection/>
      </div>

    </div>


  )
}

export default CompanySection;
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'

const Navbar = () => {
  return (
    <div className='w-full'>
      <div className='hidden lg:block'>
        <DesktopNavbar />
      </div>
      <div className='block lg:hidden'>
        <MobileNavbar />
      </div>
    </div>
  )
}

export default Navbar
import laptopImage from '../../assets/Images/laptop.png';

const AboutHeader = () => {
  return (
        <div className="bg-gray-50">
          <div className="relative flex justify-center items-center h-[50rem]">
            {/* Image container */}
            <div className="relative w-full h-full aboutHeader-background">
              {/* Main background image */}
              
              <div className='flex justify-center items-center container mx-auto'>


              <div className='flex flex-[.6]'></div>
              <div className='flex flex-col flex-[.4]'>
                <h1 className='text-5xl font-bold mb-8 mt-52'>Who we are</h1>
                <h1 className='text-3xl mb-8 whitespace-nowrap'>India&apos; one of the largest Cryptocurrency <br /> Exchange</h1>
                <h1 className='text-2xl'>At North Star Metrics, we are the best platform for buying and selling crypto while making it seamless, secure, and accessible to everyone.</h1>
              </div>

              </div>

            </div>
          </div>
        </div>
  )
}

export default AboutHeader
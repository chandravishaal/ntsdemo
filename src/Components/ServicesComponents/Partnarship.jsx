import React from 'react'

const Partnarship = () => {
  return (
     <section
        className="h-svh w-full flex items-center justify-center bg-cover bg-center "
        style={{
          backgroundImage: "url('/src/assets/Images/ServicesImages/last_section_bg.png')",
        }}
      >
     <div id="main" className=' container relative bg-cover bg-center bg-no-repeat h-[40rem] flex items-center justify-center p-2  
    '>


<div id="left"className=' w-1/2 h-full
       flex items-center justify-center'>

        <div id="image" className='pr-10'>
          <img src="/src/assets/Images/ServicesImages/last_section_img.png" alt="" />
        </div>
      </div>


      <div id="right" className=' w-1/2 h-full
      space-y-10 text-left flex flex-col  justify-start py-10 pl-14
      '>
      
             <div id="heading">
           <h2 className="text-3xl md:text-4xl font-century-gothic font-bold  text-cyan-400">
             Partnership Program<br />
             <span className="text-gray-800 font-century-gothic text-3xl font-light ">Regulated and Professional trading <br />With cryptocurrencies</span>
           </h2>
           </div> 
           <div id="heding2">
           <p className="text-lg md:text-xl font-antipasto-pro">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
             eiusmod tempor incididunt ut la.
           </p>
           </div>
           <div id="button">
           <button className=" font-century-gothic 
            lg:px-3 lg:py-1.5  text-md button text-center cursor-pointer  lg:text-base text-sm 
            transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-md shadow-[0_4px_#118baa]
           
           ">
             Know more
           </button>
           </div>
        </div>


     
      </div>
    </section>
  )
}

export default Partnarship

import React from 'react'

const BannerSection = () => {
  return (
    <div className='banner h-[450px] w-full bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url("../src/assets/bg.jpeg")` }}>
        <div className='bannerWrapper w-5/6 mx-auto h-full flex flex-row justify-center items-center py-8 px-12'>
            <div className=' w-full flex justify-center items-center'>
                <img src='../src/assets/BANNER.png' alt='Banner-Image' className='featuredImage h-[400px] w-[400px]'/>
            </div>
            <div className='w-full h-full flex flex-col py-12 gap-3 sideText text-neutral-800'>
              <p className=' text-3xl tracking-wide'>Your one stop <span className=' font-bold'> SUPERSTORE</span></p>
              <p className=' text-3xl'>for all your <span className=' font-bold'>SUPPLIES</span> and</p>
              <p className=' text-3xl tracking-wide'><span className=' font-bold'>BILLS PAYMENT</span> services.</p>
              <button className='CTA w-fit h-fit py-2 px-12 flex flex-row justify-center items-center rounded-full mt-4 cursor-pointer hover:scale-50'>
                <img src='../src/assets/SEND.png' alt='send-icon' className="h-4 w-4" />
                <a href='#Contact' className='CTAText ml-2 text-white'>GET IN TOUCH</a>
              </button>
            </div>
        </div>

    </div>
  )
}

export default BannerSection
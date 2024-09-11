import React from 'react'

const About = () => {
  return (
    <div className=' h-fit w-full bg-cover bg-center bg-no-repeat ' id='About' style={{ backgroundImage: `url("../src/assets/bg.jpeg")` }}>
    <div className='w-5/6 mx-auto h-full flex flex-col py-12 gap-10 items-center px-12'>
    <h2 className='text-neutral-800 text-xl font-bold w-full text-center'>ABOUT US</h2>
    <p className=' text-center w-9/12 px-12 text-lg'>
    Exclusive PRESS-OK Superstore is a Small and Medium Scale business operating a superstore that caters to a variety of needs with different products, as well as offers services,  especially in the areas of Pharmacy and Bills payment. The business is located in Warri, Delta State, and also offers delivery services to customers within Delta State.
    </p>
    </div>

</div>
  )
}

export default About
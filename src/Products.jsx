import React from 'react'

const Products = () => {
  return (
    <div className='products w-full h-fit py-16 border-b-2 border-gray-300 ' id='Products'>
        <div className=' w-5/6 h-full mx-auto flex flex-col gap-10 justify-center items-center'>
            <h2 className='text-neutral-800 text-xl font-bold'>OUR PRODUCTS</h2>
            <div className='productItems grid grid-cols-3 gap-4 h-fit w-full justify-center items-center px-12'>
                <div className='p1 bg-cover cursor-pointer bg-center bg-no-repeat bg-slate-500 w-full h-52 flex justify-center items-center text-white' style={{ backgroundImage: `url("../src/assets/products/prov.jpeg")`}}>
                    <div className='overlay bg-stone-500 w-full h-full opacity-80 relative'></div>
                    <p className=' absolute z-10 text-white flex justify-center items-center text-xl'>Provisions</p>
                </div>
                <div className='p2 bg-cover cursor-pointer bg-center bg-no-repeat w-full h-52 flex justify-center items-center text-white' style={{ backgroundImage: `url("../src/assets/products/gifts.jpeg")`}}>
                <div className='overlay bg-stone-500 w-full h-full opacity-80 relative'></div>
                <p className=' absolute z-10 text-white flex justify-center items-center text-xl'>Household/Gift Items</p>
                </div>
                <div className='p3 bg-cover cursor-pointer bg-center bg-no-repeat w-full h-52 flex justify-center items-center text-white' style={{ backgroundImage: `url("../src/assets/products/conf.jpeg")`}}>
                <div className='overlay bg-stone-500 w-full h-full opacity-80 relative'></div>
                <p className=' absolute z-10 text-white flex justify-center items-center text-xl'>Confectionaries</p>
                </div>
                <div className='p3 bg-cover cursor-pointer bg-center bg-no-repeat w-full h-52 flex justify-center items-center text-white' style={{ backgroundImage: `url("../src/assets/products/rx.jpeg")`}}>
                <div className='overlay bg-stone-500 w-full h-full opacity-80 relative'></div>
                <p className=' absolute z-10 text-white flex justify-center items-center text-xl'>Rx</p>
                </div>
                <div className='p3 bg-cover cursor-pointer bg-center bg-no-repeat w-full h-52 flex justify-center items-center text-white' style={{ backgroundImage: `url("../src/assets/products/dis.jpeg")`}}>
                <div className='overlay bg-stone-500 w-full h-full opacity-80 relative'></div>
                <p className=' absolute z-10 text-white flex justify-center items-center text-xl'>Disinfectants</p>
                </div>
                <div className='p3 bg-cover cursor-pointer bg-center bg-no-repeat w-full h-52 flex justify-center items-center text-white' style={{ backgroundImage: `url("../src/assets/products/ste.jpeg")`}}>
                <div className='overlay bg-stone-500 w-full h-full opacity-80 relative'></div>
                <p className=' absolute z-10 text-white flex justify-center items-center text-xl'>Sterilizers</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Products
import {useState, useEffect} from 'react'
import { storage } from './Firebase';
import { ref, getDownloadURL } from "firebase/storage"

const Services = () => {

    // DOWNLOAD BANNER IMAGE
const [s1Image, setS1Image] = useState('');
const [s2Image, setS2Image] = useState('');

useEffect(() => {
  // Function to fetch the image from Firebase Storage
  const fetchs1Image = async () => {
    const ImgRef = ref(storage, 'services/s1.jpeg'); 
    try {
      const url = await getDownloadURL(ImgRef);
      setS1Image(url); // Set the downloaded image URL as the background
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  const fetchs2Image = async () => {
    const ImgRef = ref(storage, 'services/s2.jpeg'); 
    try {
      const url = await getDownloadURL(ImgRef);
      setS2Image(url); // Set the downloaded image URL as the background
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  fetchs1Image();
  fetchs2Image();
}, []); // Run this effect only once when the component mounts

  return (
    <div className='services w-full h-fit py-8 px-24' id='Services'>
        <div className=' flex flex-col gap-10 justify-center items-center w-5/6 mx-auto pt-4 pb-12'>
            <h2 className='text-neutral-800 text-xl font-bold w-full text-center'>OUR SERVICES</h2>
            <div className='serviceItems grid grid-cols-2 gap-4 h-fit w-full justify-center items-center px-12'>
                <div className='p1 bg-cover cursor-pointer bg-center bg-no-repeat bg-slate-500 w-full h-64 flex justify-center items-center text-white' style={{ backgroundImage: `url(${s1Image})`}}>
                    <div className='overlay bg-stone-500 w-full h-full opacity-80 relative'></div>
                    <p className=' absolute z-10 text-white flex justify-center items-center text-xl'>POS System</p>
                </div>
                <div className='p2 bg-cover cursor-pointer bg-center bg-no-repeat w-full h-64 flex justify-center items-center' style={{ backgroundImage: `url(${s2Image})`}}>
                <div className='overlay bg-stone-500 w-full h-full opacity-80 relative'></div>
                <p className=' absolute z-10 text-white flex justify-center items-center text-xl'>Bills Payment</p>
                </div>


            </div>
        </div>

    </div>
  )
}

export default Services
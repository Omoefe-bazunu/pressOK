import { useState, useEffect } from "react";
import { storage } from "./Firebase";
import { ref, getDownloadURL } from "firebase/storage";

const Products = () => {
  // DOWNLOAD BANNER IMAGE
  const [p1Image, setP1Image] = useState("");
  const [p2Image, setP2Image] = useState("");
  const [p3Image, setP3Image] = useState("");
  const [p4Image, setP4Image] = useState("");
  const [p5Image, setP5Image] = useState("");
  const [p6Image, setP6Image] = useState("");

  useEffect(() => {
    // Function to fetch the image from Firebase Storage
    const fetchP1Image = async () => {
      const ImgRef = ref(storage, "products/p1.jpeg");
      try {
        const url = await getDownloadURL(ImgRef);
        setP1Image(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    const fetchP2Image = async () => {
      const ImgRef = ref(storage, "products/p2.jpeg");
      try {
        const url = await getDownloadURL(ImgRef);
        setP2Image(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    const fetchP3Image = async () => {
      const ImgRef = ref(storage, "products/p3.jpeg");
      try {
        const url = await getDownloadURL(ImgRef);
        setP3Image(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    const fetchP4Image = async () => {
      const ImgRef = ref(storage, "products/p4.jpeg");
      try {
        const url = await getDownloadURL(ImgRef);
        setP4Image(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    const fetchP5Image = async () => {
      const ImgRef = ref(storage, "products/p5.jpeg");
      try {
        const url = await getDownloadURL(ImgRef);
        setP5Image(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    const fetchP6Image = async () => {
      const ImgRef = ref(storage, "products/p6.jpeg");
      try {
        const url = await getDownloadURL(ImgRef);
        setP6Image(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchP1Image();
    fetchP2Image();
    fetchP3Image();
    fetchP4Image();
    fetchP5Image();
    fetchP6Image();
  }, []); // Run this effect only once when the component mounts

  return (
    <div
      className="products w-full h-fit py-16 border-b-2 border-gray-300 "
      id="Products"
    >
      <div className=" w-5/6 h-full mx-auto flex flex-col gap-10 justify-center items-center">
        <h2 className="text-neutral-800 text-xl font-bold">OUR PRODUCTS</h2>
        <div className="productItems grid grid-cols-3 gap-4 h-fit w-full justify-center items-center px-12">
          <div
            className="p1 bg-cover cursor-pointer bg-center bg-no-repeat bg-slate-500 w-full h-52 flex justify-center items-center text-white"
            style={{ backgroundImage: `url(${p1Image})` }}
          >
            <div className="overlay bg-stone-500 w-full h-full opacity-80 relative"></div>
            <p className=" absolute z-10 text-white flex justify-center items-center text-xl">
              Provisions
            </p>
          </div>
          <div
            className="p2 bg-cover cursor-pointer bg-center bg-no-repeat w-full h-52 flex justify-center items-center text-white"
            style={{ backgroundImage: `url(${p2Image})` }}
          >
            <div className="overlay bg-stone-500 w-full h-full opacity-80 relative"></div>
            <p className=" absolute z-10 text-white flex justify-center items-center text-xl">
              Household/Gift Items
            </p>
          </div>
          <div
            className="p3 bg-cover cursor-pointer bg-center bg-no-repeat w-full h-52 flex justify-center items-center text-white"
            style={{ backgroundImage: `url(${p3Image})` }}
          >
            <div className="overlay bg-stone-500 w-full h-full opacity-80 relative"></div>
            <p className=" absolute z-10 text-white flex justify-center items-center text-xl">
              Confectionaries
            </p>
          </div>
          <div
            className="p3 bg-cover cursor-pointer bg-center bg-no-repeat w-full h-52 flex justify-center items-center text-white"
            style={{ backgroundImage: `url(${p4Image})` }}
          >
            <div className="overlay bg-stone-500 w-full h-full opacity-80 relative"></div>
            <p className=" absolute z-10 text-white flex justify-center items-center text-xl">
              Rx
            </p>
          </div>
          <div
            className="p3 bg-cover cursor-pointer bg-center bg-no-repeat w-full h-52 flex justify-center items-center text-white"
            style={{ backgroundImage: `url(${p5Image})` }}
          >
            <div className="overlay bg-stone-500 w-full h-full opacity-80 relative"></div>
            <p className=" absolute z-10 text-white flex justify-center items-center text-xl">
              Disinfectants
            </p>
          </div>
          <div
            className="p3 bg-cover cursor-pointer bg-center bg-no-repeat w-full h-52 flex justify-center items-center text-white"
            style={{ backgroundImage: `url(${p6Image})` }}
          >
            <div className="overlay bg-stone-500 w-full h-full opacity-80 relative"></div>
            <p className=" absolute z-10 text-white flex justify-center items-center text-xl">
              Sterilizers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

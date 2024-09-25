import { useState, useEffect } from "react";
import { storage } from "./Firebase";
import { ref, getDownloadURL } from "firebase/storage";

const BannerSection = () => {
  // DOWNLOAD IMAGE
  const [bannerImage, setbannerImage] = useState("");
  const [bgImage, setBgImage] = useState("");
  const [MsgImage, setMsgImage] = useState("");

  useEffect(() => {
    // Function to fetch the image from Firebase Storage
    const fetchImage = async () => {
      const bannerRef = ref(storage, "gen/BANNER.png");
      try {
        const url = await getDownloadURL(bannerRef);
        setbannerImage(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    const fetchBgImage = async () => {
      const bgRef = ref(storage, "gen/bg.jpeg");
      try {
        const url = await getDownloadURL(bgRef);
        setBgImage(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    const fetchMsgImage = async () => {
      const MsgRef = ref(storage, "gen/SEND.png");
      try {
        const url = await getDownloadURL(MsgRef);
        setMsgImage(url); // Set the downloaded image URL as the background
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
    fetchBgImage();
    fetchMsgImage();
  }, []); // Run this effect only once when the component mounts

  return (
    <div
      className="banner h-[450px] w-full bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bannerWrapper w-5/6 mx-auto h-full flex flex-row justify-center items-center py-8 px-12">
        <div className=" w-full flex justify-center items-center">
          <img
            src={bannerImage}
            alt="Banner-Image"
            className="featuredImage h-[400px] w-[400px]"
          />
        </div>
        <div className="w-full h-full flex flex-col py-12 gap-3 sideText text-neutral-800">
          <p className=" text-3xl tracking-wide">
            Your one stop <span className=" font-bold"> SUPERSTORE</span>
          </p>
          <p className=" text-3xl">
            for all your <span className=" font-bold">SUPPLIES</span> and
          </p>
          <p className=" text-3xl tracking-wide">
            <span className=" font-bold">BILLS PAYMENT</span> services.
          </p>
          <button className="CTA w-fit h-fit py-2 px-12 flex flex-row justify-center items-center rounded-full mt-4 cursor-pointer hover:scale-50">
            <img src={MsgImage} alt="send-icon" className="h-4 w-4" />
            <a href="#Contact" className="CTAText ml-2 text-white">
              GET IN TOUCH
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

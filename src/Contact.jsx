import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="products w-full h-fit py-8 px-24" id="Contact">
      <div className=" flex flex-col gap-10 justify-center items-center w-5/6 mx-auto pt-4 pb-12">
        <h2 className="text-neutral-800 text-xl font-bold w-full text-center">
          CONTACT US
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

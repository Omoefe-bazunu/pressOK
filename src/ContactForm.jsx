import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { dbase } from "./Firebase";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    info: "",
    name: "",
    msg: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    if (formData) {
      const form = document.getElementById("contactForm");
      form.reset();

      try {
        const colRef = collection(dbase, "messages");
        await addDoc(colRef, {
          contactInfo: formData.info,
          name: formData.name,
          message: formData.msg,
          createdAt: serverTimestamp(),
        });
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <>
      <form
        id="contactForm"
        className="form flex flex-col gap-8 w-full items-center"
      >
        <input
          type="text"
          placeholder="Email/PhoneNumber"
          className="border-b-2 border-slate-200 w-full outline-none mt-4"
          name="info"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Name"
          className="border-b-2 border-slate-200 w-full outline-none mt-4 bg-none"
          name="name"
          onChange={handleChange}
        />
        <textarea
          placeholder="Message"
          className="border-b-2 border-slate-200 w-full outline-none mt-4"
          name="msg"
          onChange={handleChange}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="CTA w-fit h-fit py-2 px-16 flex flex-row justify-center items-center rounded-full mt-4 cursor-pointer hover:scale-50 text-white"
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default ContactForm;

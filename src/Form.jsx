import React, { useEffect, useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    Info: '',
    Name: '',
    Msg: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

 const handleSubmit = () => {
    console.log(formData)
 }


  return (
    <>
      <form className='form flex flex-col gap-8 w-full items-center'>
        <input
          type='text'
          placeholder='Email/PhoneNumber'
          className='border-b-2 border-slate-200 w-full outline-none mt-4'
          name='contactInfo'
          onChange={handleChange}
        />
      
        <input
          type='text'
          placeholder='Name'
          className='border-b-2 border-slate-200 w-full outline-none mt-4'
          name='name'
          onChange={handleChange}
        />
        <textarea
          placeholder='Message'
          className='border-b-2 border-slate-200 w-full outline-none mt-4'
          name='message'
          onChange={handleChange}
        />
        <button type='submit' onClick={handleSubmit}className='CTA w-fit h-fit py-2 px-16 flex flex-row justify-center items-center rounded-full mt-4 cursor-pointer hover:scale-50 text-white'>SUBMIT</button>
      </form>
    </>
  );
};

export default Form;
'use client'
import React, { useState } from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:''
  })
  const [loading, setLoading] = useState(false); 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

  try{
    setLoading(true)
    const response = await fetch('http://localhost:3000/api/contact',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })

    // console.log(formData) //debug statement

    if(response.ok) {
      toast('Mail sent successfully!', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
      });
    }
    else {
      toast('Failed to send Mail!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        transition: Bounce,
      });
    }
  }
  catch (error) {
    // console.error(' Error sending message', error)
    toast('Error sending mail!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
    });
  }
  finally {
    setLoading(false); 
  }

}
  return (
    <>
    <div className='max-w-md mx-auto mt-8 p-6 bg-white border rounded shadow-md'>
    <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-600'>
            Name:
            <input className='mt-1 p-2 w-full border rounded-md' type='text' name="name" onChange={handleChange} required/>
          </label>
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-600'>
            Email:
            <input className='mt-1 p-2 w-full border rounded-md' type='email' name='email' onChange={handleChange} required/>
          </label>
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-600'>
            Message:
            <textarea className='mt-1 p-2 w-full border rounded-md' name='message' onChange={handleChange} required/>
          </label>
        </div>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600' type="submit">{loading ? 'Sending...': 'Submit'}</button>
        <ToastContainer theme='light' position='top-right' autoClose = {3000} hideProgressBar={true} transition={Bounce} closeOnClick pauseOnFocusLoss />
      </form>
    </div>
    </>
  )
}

export default Contact
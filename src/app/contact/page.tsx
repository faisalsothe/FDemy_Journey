'use client'
import React, { useState } from 'react';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm("service_qne406j", 'template_w51iu28', e.currentTarget, '-690n2hqHlGQe75Rw')
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          Swal.fire({
            icon: 'success',
            title: 'Success...',
            text: 'Message Sent successfully!!',
          })
        },
        (error) => {
          console.error('Email sending failed:', error);
        }
      );
    setFormData({
      name: '',
      email: '',
      description: '',
    });
  };

  return (
    <div className="mt-10 w-full max-w-md mx-auto">
        <h1 className="text-center text-4xl font-semibold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            autoFocus
          />
        </div>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
             className={`shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        {/* Message Textarea */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Message
          </label>
          <textarea
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            id="description"
            name="description"
            rows={4}
            placeholder="Your Message"
            value={formData.description}
            onChange={handleMessageChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

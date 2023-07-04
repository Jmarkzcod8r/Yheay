"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import Pic from '../../Pics/pic.jpg'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
     <Image src={Pic} alt="Logo" className='flex absolute h-screen z-1'/>
      <div className="w-full max-w-sm z-10">

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 mx-auto text-center">Log In</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy; 2023 My Website. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
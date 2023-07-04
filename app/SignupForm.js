import React from 'react';

const SignupForm = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleGoogleSignup = () => {
    // Handle Google sign-up logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Sign up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md focus:outline-none focus:bg-indigo-600"
          >
            Sign up
          </button>
        </form>
      </div>
      <div className="max-w-md w-full px-6 py-4 mt-4 bg-white rounded-lg shadow-md">
        <p className="text-gray-700">
          Or sign up using Google:
        </p>
        <button
          onClick={handleGoogleSignup}
          className="flex items-center justify-center w-full py-2 mt-4 bg-red-500 hover:bg-red-600 text-white rounded-md focus:outline-none focus:bg-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.29 14.71c-.17.56-.61 1.04-1.18 1.18a7.49 7.49 0 0 1-8.24 0A1.25 1.25 0 1 1 4.71 14.3c.17-.56.61-1.04 1.18-1.18a5.99 5.99 0 0 1 6.62 0A1.25 1.25 0 0 1 14.3 14.7zM16.25 10a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SignupForm;

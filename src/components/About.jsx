import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-100' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-gray-800'>
        About <span className='text-blue-600 underline underline-offset-4 decoration-blue-500 font-light'>Our Brand</span>
      </h1>
      <p className='text-gray-500 max-w-xl text-center mb-8 leading-relaxed'>
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt='' className='w-full sm:w-1/2 max-w-lg rounded-lg shadow-md' />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-10 md:gap-16 w-full'>
            <div className='text-4xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300'>
              <p>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div className='text-4xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300'>
              <p>12+</p>
              <p>Projects Completed</p>
            </div>
            <div className='text-4xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300'>
              <p>20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div className='text-4xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300'>
              <p>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className='my-10 max-w-lg leading-relaxed'>
            Welcome to Estate, your ultimate destination for finding your dream property. Whether you're searching for a cozy home, a luxurious apartment, or a lucrative
            investment opportunity, we offer a curated selection of real estate options to match your needs.
          </p>
          <button className='bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

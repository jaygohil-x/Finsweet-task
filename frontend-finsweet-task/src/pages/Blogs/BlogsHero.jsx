import React from 'react';
import heroImg from "../../assets/Client-First - IMAGES/white-desk-working.svg"
const BlogsHero = () => {
  return (
    <div className="bg-purple-50 w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="uppercase text-yellow-500 font-semibold text-sm mb-2">
                FEATURED POST
              </div>
              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                Step-by-step guide to choosing great font pairs
              </h1>
              <div className="text-gray-600 text-sm mb-4">
                By John Doe | May 23, 2022
              </div>
              <p className="text-gray-700 mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300">
                Read More &gt;
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src={heroImg}
                alt="Man working at desk" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
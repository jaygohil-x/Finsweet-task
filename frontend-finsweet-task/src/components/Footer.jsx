import React from 'react'

const Footer = () => {
  return (
    <div>
      <>
     
     <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Upper section */}
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold mb-6 text-white">{'{'}Finsweet</h1>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-auto">
            <p className="text-center mb-4 md:mb-0">Subscribe to our newsletter to get latest updates and news</p>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
              />
              <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-r-md hover:bg-yellow-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Lower section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          <div className="text-sm text-center md:text-left mb-4 md:mb-0">
            <p>Finstreet 118 2561 Fintown</p>
            <p>
              <a href="mailto:hello@finsweet.com">Hello@finsweet.com</a> &nbsp; 020 7993 2905
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>

    </>
    </div>
  )
}

export default Footer

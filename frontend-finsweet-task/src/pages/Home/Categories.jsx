 import technology from "../../assets/Client-First - icons/business-and-trade 1.svg"
 import startup from "../../assets/Client-First - icons/Icon (2).svg"
 import economy from "../../assets/Client-First - icons/icon.svg"
 import business from "../../assets/Client-First - icons/Icon-1.svg"

export default function CategorySection() {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Choose A Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Business Category */}
            <div className="group p-8 border-2 border-gray-200 rounded-lg text-center transition-all duration-300 hover:bg-yellow-400">
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 p-3 rounded-full">
                  {/* Icon for Business */}
                  <img src={business} alt="Business" className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Business</h3>
              <p className="text-gray-600 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
  
            {/* Startup Category */}
            <div className="group p-8 border-2 border-gray-200 rounded-lg text-center transition-all duration-300 hover:bg-yellow-400">
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 p-3 rounded-full">
                  {/* Icon for Startup */}
                  <img src={startup} alt="Startup" className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Startup</h3>
              <p className="text-gray-600 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
  
            {/* Economy Category */}
            <div className="group p-8 border-2 border-gray-200 rounded-lg text-center transition-all duration-300 hover:bg-yellow-400">
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 p-3 rounded-full">
                  {/* Icon for Economy */}
                  <img src={economy} alt="Economy" className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Economy</h3>
              <p className="text-gray-600 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
  
            {/* Technology Category */}
            <div className="group p-8 border-2 border-gray-200 rounded-lg text-center transition-all duration-300 hover:bg-yellow-400">
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 p-3 rounded-full">
                  {/* Icon for Technology */}
                  <img src={technology} alt="Technology" className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Technology</h3>
              <p className="text-gray-600 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
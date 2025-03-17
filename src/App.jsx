import React, { useState, useEffect } from "react";

const App = () => {
  const [progress, setProgress] = useState(0);

  // Simulate construction progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white p-6">
      {/* Main content container */}
      <div className="max-w-4xl w-full relative">
        {/* Floating UI elements */}
        <div className="absolute top-0 left-0 opacity-30 animate-pulse">
          <div className="w-16 h-8 bg-blue-400 rounded-md mb-2"></div>
          <div className="w-24 h-6 bg-purple-400 rounded-md"></div>
        </div>

        <div className="absolute bottom-0 right-0 opacity-30 animate-pulse">
          <div className="w-20 h-10 bg-indigo-400 rounded-md mb-2"></div>
          <div className="w-16 h-8 bg-blue-400 rounded-md"></div>
        </div>

        {/* Construction cones */}
        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
          <div className="w-8 h-16 bg-orange-500 relative">
            <div className="w-14 h-4 bg-orange-300 absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-t-full"></div>
            <div className="w-14 h-4 bg-white absolute top-4 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>

        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
          <div className="w-8 h-16 bg-orange-500 relative">
            <div className="w-14 h-4 bg-orange-300 absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-t-full"></div>
            <div className="w-14 h-4 bg-white absolute top-4 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>

        {/* Main construction content */}
        <div className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-purple-500 border-opacity-30">
          <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Under Construction
          </h1>

          {/* Robotic arm */}
          <div className="flex justify-center mb-8 relative h-32">
            <div className="w-6 h-48 bg-gray-700 absolute -bottom-4 left-1/2 transform -translate-x-16"></div>
            <div className="w-24 h-6 bg-gray-600 absolute bottom-32 left-1/2 transform -translate-x-16 rotate-45 origin-left"></div>
            <div className="w-24 h-6 bg-gray-500 absolute bottom-24 left-1/2 transform translate-x-2 -rotate-45 origin-left"></div>
            <div className="w-10 h-10 bg-gray-400 rounded-full absolute bottom-16 left-1/2 transform translate-x-20 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
            </div>

            {/* UI element being built */}
            <div className="absolute top-0 left-1/2 transform translate-x-8 bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-md shadow-lg">
              <div className="w-32 h-16 bg-gray-800 rounded-sm flex items-center justify-center">
                <div className="w-20 h-2 bg-blue-400 rounded-full mb-2"></div>
                <div className="w-16 h-2 bg-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>

       

          {/* Progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="text-center text-lg mb-8">
            I'm building something amazing. Please check back soon!
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-sm text-purple-300 opacity-70">
        © 2025 • Oktonius Zevanya Simanungkalit
      </div>
    </div>
  );
};

export default App;

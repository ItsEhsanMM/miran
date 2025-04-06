import React from "react";

const Loading = () => {
   return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
         <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-t-4 border-indigo-600 rounded-full animate-spin mb-4"></div>
            <p className="text-xl text-gray-700 font-medium">Loading...</p>
         </div>
      </div>
   );
};

export default Loading;

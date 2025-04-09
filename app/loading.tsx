import React from "react";

const Loading = () => {
   return (
      <div
         className="flex items-center justify-center h-screen"
         style={{ backgroundColor: "var(--background)", color: "var(--text)" }}
      >
         <div className="flex flex-col items-center">
            <div
               className="w-16 h-16 border-4 border-t-4 rounded-full animate-spin mb-4"
               style={{
                  borderColor:
                     "var(--foreground) transparent transparent transparent",
               }}
            ></div>
            <p className="text-xl font-medium">Loading...</p>
         </div>
      </div>
   );
};

export default Loading;

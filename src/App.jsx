import React from "react";
import backgroundVideo from "./assets/324f53c8af273f72c36f5c0d35af7b30.mp4"; 
import logo from "./assets/light.svg"; 
import SearchBar from "./searchBar";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 filter z-0 "
        src={backgroundVideo}
        autoPlay
        loop
        muted
        
      />


      <div className="relative z-10 container mx-auto px-2  h-full flex flex-col justify-start items-center text-center">
        
        <img
          src={logo}
          alt="pradeep-Logo"
          className=" drop-shadow-2xl w-[80px] md:w-[80px] max-w-full"
        />

        <p className="hidden lg:block text-white opacity-80 text-lg md:text-md mb-2 font-light font-cossette-titre-regular">
          Experience weather like never before with real-time data,
          beautiful visuals, and precise forecasts for any location worldwide.
          <br />
          <span className="text-sm text-gray-400 font-cossette-titre-regular">
            A small weekend project made by PradeepKumar
          </span>
        </p>
      </div>
      <div className="relative z-10 container mx-auto px-2  h-full flex flex-col justify-start items-center text-center">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;

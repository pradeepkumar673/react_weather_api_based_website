import React from "react";
import backgroundVideo from "./assets/324f53c8af273f72c36f5c0d35af7b30.mp4";
import logo from "./assets/light.svg";
import SearchBar from "./searchBar";
import TemperatureToggle from "./Temparaturetoggle";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import WeatherCard from "./WeatherCard";
import WeatherForecast from "./assets/WeatherForecast";

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
      <div className="flex flex-row items-center relative z-10 mt-4 justify-center left-0">
        
      </div>
      {/* {<div className="space-y-8">
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 ">
            <LoadingSpinner />
            <p className="text-white/80 text-center mt-4 font-medium">
              Fetching latest weather data........
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <ErrorMessage />
        </div>
      </div>} */}
      <div className="px-4 grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <WeatherCard />
        </div>
        <div className="xl:col-span-1">
          <WeatherForecast />
          
        </div>
      </div>


    </div>
  );
}

export default App;

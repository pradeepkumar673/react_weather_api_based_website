import { Calendar } from "lucide-react";
import React from "react";

function WeatherForecast() {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-white/10 rounded-full">
          <Calendar className="w-6 h-6 text-white/80" />
        </div>
        <h2 className="text-xl font-semibold text-white">5 Day Forecast</h2>
      </div>
    </div>
  );
}

export default WeatherForecast;

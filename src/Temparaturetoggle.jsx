import React from "react";

function TemperatureToggle() {
  return (
    <div className="bg-white/5 backdrop-blur-2xl rounded-lg p-1 shadow-lg hover:shadow-xl transition-shadow z-50">
      <div className="flex items-center gap-1">
        <button className="px-3 py-1.5 rounded-l-lg bg-white/10 hover:bg-white/15 text-sm font-medium transition-all duration-200 shadow-sm text-white/90 hover:text-white">
          °C
        </button>
        <button className="px-3 py-1.5 rounded-r-lg bg-white/10 hover:bg-white/15 text-sm font-medium transition-all duration-200 shadow-sm text-white/90 hover:text-white">
          °F
        </button>
      </div>
    </div>
  );
}

export default TemperatureToggle;

const API_KEY = "86885ecd2b2cad6aacdaea840c653733";
const baseURL = "https://api.openweathermap.org/data/2.5";

export const getWeatherData = async (cityName) => {
    try {
        const response = await fetch(`${baseURL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found");
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                throw new Error("Failed to fetch weather data");
            }
        }
        
        const data = await response.json();
        if (!data.dt) {
            data.dt = Math.floor(Date.now() / 1000);
        }
        return data;
    } catch (error) {
        console.error("API Error:", error);
        if (error instanceof TypeError && error.message.includes("fetch")) {
            throw new Error("Network error");
        }
        throw error;
    }
}

export const getCurrentWeatherByCoords = async (lat, lon) => {
    try {
        const response = await fetch(`${baseURL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("Location not found");
            } else if (response.status === 401) {
                throw new Error("Unauthorized");
            } else {
                throw new Error("Failed to fetch weather data");
            }
        }
        const data = await response.json();
        if (!data.dt) {
            data.dt = Math.floor(Date.now() / 1000);
        }
        return data;
    } catch (error) {
        console.error("API Error:", error);
        if (error instanceof TypeError && error.message.includes("fetch")) {
            throw new Error("Network error");
        }
        throw error;
    }
}
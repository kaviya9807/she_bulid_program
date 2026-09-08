const API_KEY = "cc9ad79e5a521cef3d7e6f0112c7ed08";


async function getWeather() {

    const city = document
        .getElementById("cityInput")
        .value
        .trim();


    // Empty input check

    if (city === "") {

        showError("Please enter a city name.");

        return;
    }


    try {

        document.getElementById("error").textContent =
            "Loading weather...";


        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;


        const response = await fetch(url);


        console.log("Status:", response.status);


        // API key error

        if (response.status === 401) {

            throw new Error(
                "Invalid API key. Please check your API key."
            );
        }


        // City not found

        if (response.status === 404) {

            throw new Error(
                "City not found. Please check the city name."
            );
        }


        // Other errors

        if (!response.ok) {

            throw new Error(
                "Unable to get weather information."
            );
        }


        const data = await response.json();


        console.log("Weather data:", data);


        // Display city

        document.getElementById("cityName").textContent =
            `${data.name}, ${data.sys.country}`;


        // Display temperature

        document.getElementById("temperature").textContent =
            `${Math.round(data.main.temp)}°C`;


        // Display condition

        document.getElementById("condition").textContent =
            data.weather[0].description;


        // Display humidity

        document.getElementById("humidity").textContent =
            `${data.main.humidity}%`;


        // Display wind

        document.getElementById("wind").textContent =
            `${data.wind.speed} m/s`;


        // Display feels like

        document.getElementById("feelsLike").textContent =
            `${Math.round(data.main.feels_like)}°C`;


        // Clear error

        document.getElementById("error").textContent = "";


    } catch (error) {

        console.error("Error:", error);

        showError(error.message);

    }

}


function showError(message) {

    document.getElementById("error").textContent =
        "⚠️ " + message;

}
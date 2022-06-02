import transcodeWeatherCodeToString from "./transcodeWeatherCodeToString.js"

const updateCard = (weatherData, timeData, country, city) => {
    
    const WEATHER_CARDS_CONTAINER = document.getElementById('weather-cards-container')
    const WEATHER_CARD = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-0')
    const WEATHER_CARD_VISUAL = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-headervisual-0')
    const WEATHER_CARD_HEADER_H2 = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-headerh2-0')
    const WEATHER_CARD_DEGREES = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-degrees-0')
    const WEATHER_CARD_CITY = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-city-0')
    const WEATHER_CARD_COUNTRY = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-country-0')
    const WEATHER_CARD_FOOTER_INFO = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-footerinfo-0')
    
    
    let weatherCode = weatherData.hourly.weathercode[0];
    let weatherCodeData = transcodeWeatherCodeToString(weatherCode);
    
    WEATHER_CARD_VISUAL.setAttribute('xlink:href', weatherCodeData[1]);
    WEATHER_CARD_HEADER_H2.textContent = weatherCodeData[0];
    
    // WEATHER_CARD_DEGREES.innerHTML = `<sup>°</sup>${Math.round(weatherData.current_weather.temperature)}`;
    WEATHER_CARD_DEGREES.innerHTML = `<sup>°</sup>${Math.round(weatherData.hourly.temperature_2m[0])}`;
    
    WEATHER_CARD_COUNTRY.textContent = country;
    WEATHER_CARD_CITY.textContent = city;
    
    let formattedDate = timeData.formatted
                            // .replaceAll('-', '/')
                            .replace(' ', 'T')
    console.log(formattedDate);


    let date = new Date(formattedDate)
                .toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    WEATHER_CARD_FOOTER_INFO.textContent = date;
}

export default updateCard;
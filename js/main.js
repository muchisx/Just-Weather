import LOCATIONS from "./locations.js";
import getTemperatureAndTime from "./getTemperatureAndTime.js";
import createCountryList from "./createCountryList.js";
import updateCityList from "./updateCityList.js";


const FORM_WEATHER = document.querySelector('#form-weather-location');
const SELECT_COUNTRY = FORM_WEATHER.querySelector('#select-country');
const SELECT_CITY = FORM_WEATHER.querySelector('#select-city');

FORM_WEATHER.addEventListener("submit", (e) => {
    getTemperatureAndTime(e, SELECT_COUNTRY.value, SELECT_CITY.value, LOCATIONS)
});


createCountryList(SELECT_COUNTRY, LOCATIONS);




SELECT_COUNTRY.addEventListener("change", (e) => {
    updateCityList(SELECT_CITY, SELECT_COUNTRY.value, LOCATIONS)
})





























// tomorrow.io API


// const API_KEY = "JJGNGKXG88HZ2tRa7nanQPxGyAoPKtBF";
// const API_URL = "https://data.climawcell.co/v4/timelines?apikey=";

// const WEATHER_CARDS_CONTAINER = document.getElementById('weather-cards-container')


// const updateCardTemperature = (weatherData, country, city) => {

//     const WEATHER_CARD = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-0')
//     const WEATHER_CARD_VISUAL = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-headervisual-0')
//     const WEATHER_CARD_HEADER_H2 = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-headerh2-0')
//     const WEATHER_CARD_DEGREES = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-degrees-0')
//     const WEATHER_CARD_CITY = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-city-0')
//     const WEATHER_CARD_COUNTRY = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-country-0')

//     WEATHER_CARD_DEGREES.innerHTML = `<sup>°</sup>${Math.round(weatherData.data.timelines[0].intervals[0].values.temperature)}`;

//     WEATHER_CARD_COUNTRY.textContent = country;
//     WEATHER_CARD_CITY.textContent = city;

// }


// const getTemperature = async (e) => {
    
//     e.preventDefault();

//     let country = SELECT_COUNTRY.value;
//     let city = SELECT_CITY.value;
//     let coordinates = LOCATIONS
//                         .filter(item => item.country == country && item.city == city)
//                         .map(({lat, lng}) => ([lat, lng]))
//                         .flat()
//     let fields = [
//         "temperature",
//         "weatherCode",
//         "temperatureApparent",
//     ];
//     let res = await fetch(`${API_URL}${API_KEY}&location=${coordinates}&fields=${fields}`)
//                         .then(res => res.json())
//                         .then(data => updateCardTemperature(data, country, city))
// }

// FORM_WEATHER.addEventListener("submit", getTemperature)





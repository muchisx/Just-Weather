import getTemperatureAndTime from "./getTemperatureAndTime.js";
import createCityList from "./createCityList.js";

const launchRandomSearch = (e, APP, COUNTRIES, LOCATIONS, savedSelections) => {

    const randomizerCountry = Math.floor(Math.random()*COUNTRIES.length)
    const country = COUNTRIES[randomizerCountry]

    const CITIES = createCityList(LOCATIONS, country);
    const randomizerCities = Math.floor(Math.random()*CITIES.length)
    const city = CITIES[randomizerCities]

    APP.BUTTON_SEARCH_COUNTRY.classList.add('--search-location-state');
    APP.BUTTON_SEARCH_COUNTRY.innerText = 'Location';
    APP.BUTTON_SEARCH_CITY.classList.add('hidden-opa');
    APP.BUTTON_SEARCH_CITY.setAttribute('disabled', 'disabled');

    savedSelections.country = country;
    savedSelections.city = city;

    APP.BUTTON_REFRESH.dataset.for = 'form'

    getTemperatureAndTime(e, APP, country, city, LOCATIONS)

    return savedSelections
}

export default launchRandomSearch
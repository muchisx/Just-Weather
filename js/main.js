import LOCATIONS from "./locations.js";
import getTemperatureAndTime from "./getTemperatureAndTime.js";
import createCountryList from "./createCountryList.js";
import updateCityList from "./updateCityList.js";
import updateFormState from "./updateFormState.js";
import doOnWindowLoad from "./doOnWindowLoad.js";

const MAIN_CONTAINER = document.querySelector('#main-container')
const FORM_WEATHER = document.querySelector('#form-weather-location');
const SELECT_COUNTRY = FORM_WEATHER.querySelector('#select-country');
const SELECT_CITY = FORM_WEATHER.querySelector('#select-city');
const BUTTON_FORM_SEARCH = FORM_WEATHER.querySelector('#button-form-search')

FORM_WEATHER.addEventListener("submit", (e) => {
    getTemperatureAndTime(e, SELECT_COUNTRY.value, SELECT_CITY.value, LOCATIONS)
});


createCountryList(SELECT_COUNTRY, LOCATIONS);


SELECT_COUNTRY.addEventListener("change", (e) => {
    updateCityList(SELECT_CITY, BUTTON_FORM_SEARCH, SELECT_COUNTRY.value, LOCATIONS);
    updateFormState(SELECT_CITY, SELECT_CITY, BUTTON_FORM_SEARCH);
});

SELECT_CITY.addEventListener("change", (e) => {
    updateFormState(SELECT_CITY, SELECT_CITY, BUTTON_FORM_SEARCH);
});


window.addEventListener("load", (e) => {
    doOnWindowLoad(e, MAIN_CONTAINER);
});
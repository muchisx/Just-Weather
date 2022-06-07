import LOCATIONS from "./locations.js";
import getTemperatureAndTime from "./getTemperatureAndTime.js";
import createCountryList from "./createCountryList.js";
import updateCityList from "./updateCityList.js";
import updateFormState from "./updateFormState.js";
import doOnWindowLoad from "./doOnWindowLoad.js";
import searchLocationsList from "./searchLocationsList.js";
import progressForm from "./progressForm.js";
import returnAnimationsPromises from "./returnAnimationsPromises.js";
import launchSearch from "./launchSearch.js";
import {returnFormState, returnSelection} from "./utilities.js"

const MAIN_CONTAINER = document.querySelector('#main-container')

const FORM_WEATHER = document.querySelector('#form-weather-location');
const BUTTON_SEARCH_COUNTRY = FORM_WEATHER.querySelector('#button-form-search-country')
const BUTTON_SEARCH_CITY = FORM_WEATHER.querySelector('#button-form-search-city')

const SVG_SPRITE_CHILDS = Array.from(document.querySelectorAll('#svg-sprite-weather > symbol'))

const FORM_SEARCH = document.querySelector('#form-search')
const FORM_SEARCH_TITLE = FORM_SEARCH.querySelector('#form-search-title');
const FORM_SEARCH_UL = FORM_SEARCH.querySelector('#form-search-results');
const FORM_SEARCH_INPUT = FORM_SEARCH.querySelector('#form-search-input');

window.addEventListener("load", (e) => {
    doOnWindowLoad(e, MAIN_CONTAINER, SVG_SPRITE_CHILDS);
});


// -- 


const COUNTRIES = createCountryList(LOCATIONS)

let formState = FORM_SEARCH.dataset.state;
let selection = "";
let savedSelections = {};

FORM_WEATHER.addEventListener('submit', (e) => {

    e.preventDefault();

    launchSearch(e.submitter.id, MAIN_CONTAINER, FORM_SEARCH, FORM_SEARCH_TITLE,FORM_SEARCH_UL, FORM_SEARCH_INPUT, selection, formState, savedSelections)
    console.log(e.submitter.id);
})

FORM_SEARCH.addEventListener('submit', (e) => {
    e.preventDefault();

    selection = returnSelection(e);
    formState = returnFormState(e, FORM_SEARCH);
    savedSelections = progressForm(e, LOCATIONS, MAIN_CONTAINER, FORM_SEARCH, FORM_SEARCH_TITLE, FORM_SEARCH_UL, FORM_SEARCH_INPUT, selection, formState, savedSelections);
    console.log(savedSelections);
})

FORM_SEARCH_INPUT.addEventListener('input', (e) => {

    formState = returnFormState(e, FORM_SEARCH);
    searchLocationsList(FORM_SEARCH_INPUT, FORM_SEARCH_UL, COUNTRIES, LOCATIONS, formState, savedSelections)
});























// -----

// V1

// const SELECT_COUNTRY = FORM_WEATHER.querySelector('#select-country');
// const SELECT_CITY = FORM_WEATHER.querySelector('#select-city');
// const BUTTON_FORM_SEARCH = FORM_WEATHER.querySelector('#button-form-search')



// FORM_WEATHER.addEventListener("submit", (e) => {
//     getTemperatureAndTime(e, SELECT_COUNTRY.value, SELECT_CITY.value, LOCATIONS)
// });


// createCountryList(LOCATIONS, SELECT_COUNTRY);


// SELECT_COUNTRY.addEventListener("change", (e) => {
//     updateCityList(SELECT_CITY, BUTTON_FORM_SEARCH, SELECT_COUNTRY.value, LOCATIONS);
//     updateFormState(SELECT_CITY, SELECT_CITY, BUTTON_FORM_SEARCH);
// });

// SELECT_CITY.addEventListener("change", (e) => {
//     updateFormState(SELECT_CITY, SELECT_CITY, BUTTON_FORM_SEARCH);
// });
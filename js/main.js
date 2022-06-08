import LOCATIONS from "./locations.js";
import getTemperatureAndTime from "./getTemperatureAndTime.js";
import createCountryList from "./createCountryList.js";
import updateCityList from "./updateCityList.js";
import updateFormState from "./updateFormState.js";
import doOnWindowLoad from "./doOnWindowLoad.js";
import searchLocationsList from "./searchLocationsList.js";
import progressForm from "./progressForm.js";
import launchSearch from "./launchSearch.js";
import {returnFormState, returnSelection, returnAnimationsPromises} from "./utilities.js"
import navigateFormSearch from "./navigateFormSearch.js";


const MAIN_CONTAINER = document.querySelector('#main-container')

const FORM_SEARCH = document.querySelector('#form-search')
const FORM_SEARCH_TITLE = FORM_SEARCH.querySelector('#form-search-title');
const FORM_SEARCH_UL = FORM_SEARCH.querySelector('#form-search-results');
const FORM_SEARCH_INPUT = FORM_SEARCH.querySelector('#form-search-input');
const FORM_SEARCH_NAV_INFO = FORM_SEARCH.querySelector('#navigation-info')
const FORM_SEARCH_NAV_INFO_CITY = FORM_SEARCH.querySelector('#navigation-info-city')

const FORM_WEATHER = document.querySelector('#form-weather-location');
const BUTTON_GPS = FORM_WEATHER.querySelector('#form-weather-search-GPS')
const BUTTON_SEARCH_COUNTRY = FORM_WEATHER.querySelector('#button-form-search-country')
const BUTTON_SEARCH_CITY = FORM_WEATHER.querySelector('#button-form-search-city')
const BUTTON_REFRESH = FORM_WEATHER. querySelector('#form-weather-search-refresh')

const SVG_SPRITE_CHILDS = Array.from(document.querySelectorAll('#svg-sprite-weather > symbol'))

const APP = {
    MAIN_CONTAINER: MAIN_CONTAINER,
    
    FORM_SEARCH: FORM_SEARCH,
    FORM_SEARCH_TITLE: FORM_SEARCH_TITLE,
    FORM_SEARCH_UL: FORM_SEARCH_UL,
    FORM_SEARCH_INPUT: FORM_SEARCH_INPUT,
    FORM_SEARCH_NAV_INFO: FORM_SEARCH_NAV_INFO,
    FORM_SEARCH_NAV_INFO_CITY: FORM_SEARCH_NAV_INFO_CITY,

    FORM_WEATHER: FORM_WEATHER,
    BUTTON_GPS: BUTTON_GPS,
    BUTTON_SEARCH_COUNTRY: BUTTON_SEARCH_COUNTRY,
    BUTTON_SEARCH_CITY: BUTTON_SEARCH_CITY,
    BUTTON_REFRESH: BUTTON_REFRESH,

    SVG_SPRITE_CHILDS: SVG_SPRITE_CHILDS,
}


window.addEventListener("load", (e) => {
    doOnWindowLoad(e, APP);
});


const COUNTRIES = createCountryList(LOCATIONS)
let formState = APP.FORM_SEARCH.dataset.state;
let selection = "";
let savedSelections = {};



FORM_SEARCH.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (e.submitter.dataset.form == 'navigation') {
        formState = returnFormState(e, APP);
        
        navigateFormSearch(e, APP, formState, savedSelections);
    } else {
        selection = returnSelection(e);
        formState = returnFormState(e, APP);
        savedSelections = progressForm(e, APP, LOCATIONS, selection, formState, savedSelections);
    }
})

FORM_SEARCH_INPUT.addEventListener('input', (e) => {
    
    formState = returnFormState(e, APP);
    searchLocationsList(APP, COUNTRIES, LOCATIONS, formState, savedSelections)
});



FORM_WEATHER.addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.submitter.dataset.form == 'search-refresh') getTemperatureAndTime(e, savedSelections.country, savedSelections.city, LOCATIONS)

    if (e.submitter.dataset.form == 'search-location') launchSearch(e.submitter.id, APP, selection, formState, savedSelections)
})
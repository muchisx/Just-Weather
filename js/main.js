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
const FORM_WEATHER = document.querySelector('#form-weather-location');
const BUTTON_SEARCH_COUNTRY = FORM_WEATHER.querySelector('#button-form-search-country')
const BUTTON_SEARCH_CITY = FORM_WEATHER.querySelector('#button-form-search-city')
const SVG_SPRITE_CHILDS = Array.from(document.querySelectorAll('#svg-sprite-weather > symbol'))
const FORM_SEARCH = document.querySelector('#form-search')
const FORM_SEARCH_TITLE = FORM_SEARCH.querySelector('#form-search-title');
const FORM_SEARCH_UL = FORM_SEARCH.querySelector('#form-search-results');
const FORM_SEARCH_INPUT = FORM_SEARCH.querySelector('#form-search-input');
const FORM_SEARCH_NAV_INFO = FORM_SEARCH.querySelector('#navigation-info')
const FORM_SEARCH_NAV_INFO_CITY = FORM_SEARCH.querySelector('#navigation-info-city')


const APP = {
    MAIN_CONTAINER: MAIN_CONTAINER,
    FORM_WEATHER: FORM_WEATHER,
    BUTTON_SEARCH_COUNTRY: BUTTON_SEARCH_COUNTRY,
    BUTTON_SEARCH_CITY: BUTTON_SEARCH_CITY,
    SVG_SPRITE_CHILDS: SVG_SPRITE_CHILDS,
    FORM_SEARCH: FORM_SEARCH,
    FORM_SEARCH_TITLE: FORM_SEARCH_TITLE,
    FORM_SEARCH_UL: FORM_SEARCH_UL,
    FORM_SEARCH_INPUT: FORM_SEARCH_INPUT,
    FORM_SEARCH_NAV_INFO: FORM_SEARCH_NAV_INFO,
    FORM_SEARCH_NAV_INFO_CITY: FORM_SEARCH_NAV_INFO_CITY
}


window.addEventListener("load", (e) => {
    doOnWindowLoad(e, APP);
});


const COUNTRIES = createCountryList(LOCATIONS)
let formState = APP.FORM_SEARCH.dataset.state;
let selection = "";
let savedSelections = {};


FORM_WEATHER.addEventListener('submit', (e) => {
    e.preventDefault();

    launchSearch(e.submitter.id, APP, selection, formState, savedSelections)
})

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



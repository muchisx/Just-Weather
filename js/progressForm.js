import getTemperatureAndTime from "./getTemperatureAndTime.js";
import exitFormSearch from "./exitFormSearch.js";

const progressForm = (
    e, 
    APP,
    LOCATIONS, 
    selection, 
    formState, 
    savedSelections) => {

    if (formState == 'country-search') {

        APP.FORM_SEARCH.setAttribute('data-state', 'city-search')
        APP.FORM_SEARCH_INPUT.classList.remove('hidden');
        APP.FORM_SEARCH_TITLE.innerText = "Search the City"
        APP.FORM_SEARCH_UL.innerHTML = "";
        APP.FORM_SEARCH_INPUT.value = "";
        APP.FORM_SEARCH_INPUT.focus();
        
        savedSelections.country = selection

        APP.FORM_SEARCH_NAV_INFO.innerText = savedSelections.country;
        APP.FORM_SEARCH_NAV_INFO.classList.remove('display-none')
        APP.FORM_SEARCH_NAV_INFO.classList.add('half-fade-in-x2')

        return savedSelections
    }

    if (formState == 'city-search') {

        APP.FORM_SEARCH.setAttribute('data-state', 'done-search')
        APP.FORM_SEARCH_TITLE.innerText = "Let's Search!"
        APP.FORM_SEARCH_UL.innerHTML = "";
        APP.FORM_SEARCH_INPUT.classList.toggle('hidden')

        let buttonTag = document.createElement('button');
        buttonTag.classList.add('form-search-result', 'fade-in', '--result-start-search');

        APP.FORM_SEARCH_UL.append(buttonTag)

        savedSelections.city = selection

        APP.FORM_SEARCH_NAV_INFO_CITY.innerText = savedSelections.city;
        APP.FORM_SEARCH_NAV_INFO_CITY.classList.remove('display-none')
        APP.FORM_SEARCH_NAV_INFO_CITY.classList.add('half-fade-in-x2')

        return savedSelections
    }

    if (formState == 'done-search') {

        getTemperatureAndTime(e, APP, savedSelections.country, savedSelections.city, LOCATIONS);

        APP.BUTTON_SEARCH_COUNTRY.classList.remove('--search-location-state');
        APP.BUTTON_SEARCH_COUNTRY.innerText = savedSelections.country;
        APP.BUTTON_SEARCH_CITY.classList.remove('hidden-opa');
        APP.BUTTON_SEARCH_CITY.removeAttribute('disabled');
        APP.BUTTON_SEARCH_CITY.innerText = savedSelections.city;

        APP.BUTTON_REFRESH.setAttribute('data-for', 'form')

        exitFormSearch(APP, savedSelections);

        return savedSelections
    }
}

export default progressForm;
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


        return savedSelections

    }

    if (formState == 'city-search') {

        APP.FORM_SEARCH.setAttribute('data-state', 'done-search')
        APP.FORM_SEARCH_TITLE.innerText = "Let's Search!"
        APP.FORM_SEARCH_UL.innerHTML = "";
        APP.FORM_SEARCH_INPUT.classList.toggle('hidden')

        let buttonTag = document.createElement('button');
        buttonTag.classList.add('form-search-result', 'fade-in', '--result-start-search');
        
        // buttonTag.innerText = ""

        APP.FORM_SEARCH_UL.append(buttonTag)

        savedSelections.city = selection

        APP.FORM_SEARCH_NAV_INFO_CITY.innerText = savedSelections.city;
        APP.FORM_SEARCH_NAV_INFO_CITY.classList.remove('display-none')

        return savedSelections
    }

    if (formState == 'done-search') {

        getTemperatureAndTime(e, savedSelections.country, savedSelections.city, LOCATIONS);

        exitFormSearch(APP, savedSelections);


        return savedSelections
    }
}

export default progressForm;
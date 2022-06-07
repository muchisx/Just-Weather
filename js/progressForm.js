import returnAnimationsPromises from "./returnAnimationsPromises.js";
import getTemperatureAndTime from "./getTemperatureAndTime.js";

const progressForm = (
    e, 
    LOCATIONS, 
    MAIN_CONTAINER, 
    FORM_SEARCH, 
    FORM_SEARCH_TITLE, 
    FORM_SEARCH_UL, 
    FORM_SEARCH_INPUT, 
    selection, 
    formState, 
    savedSelections) => {

    
    if (formState == 'country-search') {

        FORM_SEARCH.setAttribute('data-state', 'city-search')
        FORM_SEARCH_INPUT.classList.remove('hidden');
        FORM_SEARCH_TITLE.innerText = "Search the City"
        FORM_SEARCH_UL.innerHTML = "";
        FORM_SEARCH_INPUT.value = "";
        FORM_SEARCH_INPUT.focus();

        savedSelections.country = selection

        return savedSelections

    }

    if (formState == 'city-search') {

        console.log('prog for city search');

        FORM_SEARCH.setAttribute('data-state', 'done-search')
        FORM_SEARCH_TITLE.innerText = "Let's Go!"
        FORM_SEARCH_UL.innerHTML = "";
        FORM_SEARCH_INPUT.classList.toggle('hidden')

        let buttonTag = document.createElement('button');
        buttonTag.classList.add('form-search-result');
        buttonTag.classList.add('fade-in');
        buttonTag.innerText = "Search"

        FORM_SEARCH_UL.append(buttonTag)

        savedSelections.city = selection

        return savedSelections
    }

    if (formState == 'done-search') {

        getTemperatureAndTime(e, savedSelections.country, savedSelections.city, LOCATIONS)

        FORM_SEARCH.classList.toggle('fade-out-x2')
            
        MAIN_CONTAINER.classList.add('blur-out')
        MAIN_CONTAINER.classList.remove('blur-in')
        MAIN_CONTAINER.classList.remove('pointer-events-none')

        returnAnimationsPromises(FORM_SEARCH, MAIN_CONTAINER)
        .then(() => {
            MAIN_CONTAINER.classList.toggle('blur-out')
            FORM_SEARCH.classList.toggle('display-none')
            FORM_SEARCH.classList.toggle('fade-out-x2')

        })


        return savedSelections
    }
}

export default progressForm;
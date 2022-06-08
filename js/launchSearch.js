import {returnAnimationsPromises} from "./utilities.js";
import resetForm from "./resetForm.js";
import progressForm from "./progressForm.js";

const launchSearch = (
    submitterId, 
    APP,
    selection,
    formState,
    savedSelections) => {

    APP.MAIN_CONTAINER.classList.toggle('blur-in', 'pointer-events-none');

    APP.FORM_SEARCH.classList.toggle('display-none');
    APP.FORM_SEARCH.classList.toggle('fade-in-x2');
    APP.FORM_SEARCH_INPUT.focus();

    returnAnimationsPromises(APP.FORM_SEARCH)
        .then(() => {
            APP.FORM_SEARCH.classList.toggle(('fade-in-x2'))
    })


    if (submitterId == 'button-form-search-country') {
        
        formState = 'country-search'
        resetForm(APP, formState, savedSelections);
    }

    if (submitterId == 'button-form-search-city') {

        selection = savedSelections.country
        formState = 'city-search'
        resetForm(APP, formState, savedSelections)
        progressForm(APP, selection, formState, savedSelections);

    }

}

export default launchSearch;
import returnAnimationsPromises from "./returnAnimationsPromises.js";
import resetForm from "./resetForm.js";
import progressForm from "./progressForm.js";

const launchSearch = (
    submitterId, 
    MAIN_CONTAINER, 
    FORM_SEARCH, 
    FORM_SEARCH_TITLE, 
    FORM_SEARCH_UL, 
    FORM_SEARCH_INPUT, 
    selection,
    formState,
    savedSelections) => {

    MAIN_CONTAINER.classList.toggle('blur-in', 'pointer-events-none');

    FORM_SEARCH.classList.toggle('display-none');
    FORM_SEARCH.classList.toggle('fade-in-x2');

    returnAnimationsPromises(FORM_SEARCH)
        .then(() => {
            FORM_SEARCH.classList.toggle(('fade-in-x2'))
    })


    if (submitterId == 'button-form-search-country') {
        
        formState = 'country-search'
        resetForm(FORM_SEARCH, FORM_SEARCH_TITLE, FORM_SEARCH_UL, FORM_SEARCH_INPUT, formState, savedSelections);
    }

    if (submitterId == 'button-form-search-city') {

        selection = savedSelections.country
        formState = 'city-search'
        resetForm(FORM_SEARCH, FORM_SEARCH_TITLE, FORM_SEARCH_UL, FORM_SEARCH_INPUT, formState, savedSelections)
        progressForm(MAIN_CONTAINER, FORM_SEARCH, FORM_SEARCH_TITLE, FORM_SEARCH_UL, FORM_SEARCH_INPUT, selection, formState, savedSelections);

    }

}

export default launchSearch;
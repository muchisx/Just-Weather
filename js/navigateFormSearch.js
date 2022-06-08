import resetForm from "./resetForm.js"
import exitFormSearch from "./exitFormSearch.js";

const navigateFormSearch = (
    e, 
    APP,
    formState,
    savedSelections) => {

    // const isGoingBack = e.submitter.id == 'navigation-back'
    const isClosing = e.submitter.id == 'navigation-close'

    if (isClosing) exitFormSearch(APP, savedSelections);

    else if (formState == 'country-search') exitFormSearch(APP, savedSelections);

    else if (formState == 'city-search') {
        resetForm(APP, 'country-search', savedSelections);
        APP.FORM_SEARCH_INPUT.focus();
    }
    
    else if (formState == 'done-search') {
        resetForm(APP, 'city-search', savedSelections)
        APP.FORM_SEARCH_INPUT.focus();
    };
    
}

export default navigateFormSearch;
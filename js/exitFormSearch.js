import {returnAnimationsPromises} from "./utilities.js";
import resetForm from "./resetForm.js";

const exitFormSearch = (APP, savedSelections) => {

    APP.FORM_SEARCH.classList.toggle('fade-out-x2')        
    APP.MAIN_CONTAINER.classList.add('blur-out')
    APP.MAIN_CONTAINER.classList.remove('blur-in')
    APP.MAIN_CONTAINER.classList.remove('pointer-events-none')

    returnAnimationsPromises(APP.FORM_SEARCH, APP.MAIN_CONTAINER)
    .then(() => {
        APP.MAIN_CONTAINER.classList.toggle('blur-out')
        APP.FORM_SEARCH.classList.toggle('display-none')
        APP.FORM_SEARCH.classList.toggle('fade-out-x2')
        resetForm(APP, 'country-search', savedSelections)
    })
}

export default exitFormSearch;
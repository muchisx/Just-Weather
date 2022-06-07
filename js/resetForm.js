
const resetForm = (
    FORM_SEARCH, 
    FORM_SEARCH_TITLE, 
    FORM_SEARCH_UL, 
    FORM_SEARCH_INPUT,
    TargetformState,
    savedSelections) => {

    if (TargetformState == 'country-search') {

    FORM_SEARCH.dataset.state = TargetformState;
    FORM_SEARCH_TITLE.innerText = 'Search the Country';
    FORM_SEARCH_UL.innerHTML = "";
    FORM_SEARCH_INPUT.value = "";
    FORM_SEARCH_INPUT.classList.remove('hidden');
    savedSelections = {}

    }

    if (TargetformState == 'city-search') {

    FORM_SEARCH.dataset.state = TargetformState;
    FORM_SEARCH_TITLE.innerText = 'Search the City';
    FORM_SEARCH_UL.innerHTML = "";
    FORM_SEARCH_INPUT.value = "";
    FORM_SEARCH_INPUT.classList.remove('hidden');
    savedSelections.city = "";
    }

    
}

export default resetForm;
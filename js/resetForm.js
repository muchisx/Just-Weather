
const resetForm = (
    APP,
    TargetformState,
    savedSelections) => {

    if (TargetformState == 'country-search') {

    APP.FORM_SEARCH.dataset.state = TargetformState;
    APP.FORM_SEARCH_TITLE.innerText = 'Search the Country';
    APP.FORM_SEARCH_UL.innerHTML = "";
    APP.FORM_SEARCH_INPUT.value = "";
    APP.FORM_SEARCH_INPUT.classList.remove('hidden');
    APP.FORM_SEARCH_NAV_INFO.innerText = "";
    APP.FORM_SEARCH_NAV_INFO.classList.add('display-none');
    APP.FORM_SEARCH_NAV_INFO_CITY.innerText = "";
    APP.FORM_SEARCH_NAV_INFO_CITY.classList.add('display-none');

    savedSelections = {}
    }

    if (TargetformState == 'city-search') {

    APP.FORM_SEARCH.dataset.state = TargetformState;
    APP.FORM_SEARCH_TITLE.innerText = 'Search the City';
    APP.FORM_SEARCH_UL.innerHTML = "";
    APP.FORM_SEARCH_INPUT.value = "";
    APP.FORM_SEARCH_INPUT.classList.remove('hidden');
    APP.FORM_SEARCH_NAV_INFO.classList.remove('display-none')
    APP.FORM_SEARCH_NAV_INFO.innerText = savedSelections.country;
    APP.FORM_SEARCH_NAV_INFO_CITY.innerText = "";
    APP.FORM_SEARCH_NAV_INFO_CITY.classList.add('display-none');

    savedSelections.city = "";
    }
}

export default resetForm;
import createCityList from "./createCityList.js";

const searchLocationsList = (
    APP, 
    COUNTRIES, 
    LOCATIONS, 
    formState, 
    savedSelections) => {

    APP.FORM_SEARCH_UL.innerHTML = "";

    const userInput = APP.FORM_SEARCH_INPUT.value

    if (formState == 'country-search') {

        const result = fuzzysort.go(userInput, COUNTRIES, {limit: 3, treshold: -10000})
                        .map(item => item.target)
        ;
        const buttonNodes = [];

        result.forEach((item) => {
            
            const buttonTag = document.createElement('button');
            buttonTag.classList.add('form-search-result', 'fade-in');
            buttonTag.innerText = item;

            buttonNodes.push(buttonTag)
            APP.FORM_SEARCH_UL.append(buttonTag)
        })
    }
    
    if (formState == 'city-search') {

        const country = savedSelections.country
        const CITIES = createCityList(LOCATIONS, country)
        const result = fuzzysort.go(userInput, CITIES, {limit: 3, treshold: -10000})
                        .map(item => item.target)
        ;
        const buttonNodes = [];

        result.forEach((item) => {

            const buttonTag = document.createElement('button');
            buttonTag.classList.add('form-search-result');
            buttonTag.classList.add('fade-in');
            buttonTag.innerText = item;

            buttonNodes.push(buttonTag)
            APP.FORM_SEARCH_UL.append(buttonTag)
        })
    }
};

export default searchLocationsList;
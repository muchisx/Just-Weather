import createCityList from "./createCityList.js";

const searchLocationsList = (inputElement, ulElement, COUNTRIES, LOCATIONS, formState, savedSelections) => {

    ulElement.innerHTML = "";

    let userInput = inputElement.value

    if (formState == 'country-search') {

        const result = fuzzysort.go(userInput, COUNTRIES, {limit: 6, treshold: -10000})
                        .map(item => item.target)
                        ;

        let buttonNodes = [];

        result.forEach((item) => {
        let buttonTag = document.createElement('button');
        buttonTag.classList.add('form-search-result', 'fade-in');
        buttonTag.innerText = item;

        buttonNodes.push(buttonTag)
        ulElement.append(buttonTag)
        })
    }
    
    if (formState == 'city-search') {

        let country = savedSelections.country

        const CITIES = createCityList(LOCATIONS, country)

        const result = fuzzysort.go(userInput, CITIES, {limit: 6, treshold: -10000})
                        .map(item => item.target)
        ;

        let buttonNodes = [];

        result.forEach((item) => {
            let buttonTag = document.createElement('button');
            buttonTag.classList.add('form-search-result');
            buttonTag.classList.add('fade-in');
            buttonTag.innerText = item;

            buttonNodes.push(buttonTag)
            ulElement.append(buttonTag)
        })
    }
};

export default searchLocationsList;
import LOCATIONS from "./locations.js"



const COUNTRIES = LOCATIONS
                    .map(item => item.country)
                    .reduce((array, item) => {

                        if (array.indexOf(item) === -1) {
                            array.push(item)
                        }
                        return array
                    }, [])
                    .sort((a, b) => a.localeCompare(b))

console.log(COUNTRIES)


const MAIN_CONTAINER = document.querySelector('.main-container');
const SELECT_COUNTRY = MAIN_CONTAINER.querySelector('#select-country')


COUNTRIES.forEach(item => {

    let newOption = new Option(item,item);
    SELECT_COUNTRY.add(newOption, undefined)
})
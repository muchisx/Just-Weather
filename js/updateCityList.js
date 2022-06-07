
const updateCityList = (selectCityElement, buttonSearchElement, selectedCountry, LOCATIONS) => {

    selectCityElement.innerHTML = "";

    let defaultOption = new Option("Select a City","Select a City")
    selectCityElement.add(defaultOption)
    selectCityElement.options[0].setAttribute("hidden", "hidden")

    const CITIES = LOCATIONS
                    .filter(item => item.country == selectedCountry)
                    .map(item => item.city)
                    .reduce((array, item) => {

                        if (array.indexOf(item) === -1) {
                            array.push(item)
                        }
                        return array
                    }, [])
                    .sort((a, b) => a.localeCompare(b))

    CITIES.forEach(item => {

        let newOption = new Option(item,item)
        selectCityElement.add(newOption, undefined)
    })
}

export default updateCityList;
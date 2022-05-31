

const updateCityList = (selectHTMLtag, selectedCountry, LOCATIONS) => {

    selectHTMLtag.innerHTML = "";
    selectHTMLtag.removeAttribute("disabled")

    let defaultOption = new Option("Select a City","Select a City")
    selectHTMLtag.add(defaultOption)
    selectHTMLtag.options[0].setAttribute("hidden", "hidden")

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
        selectHTMLtag.add(newOption, undefined)
    })
}

export default updateCityList;
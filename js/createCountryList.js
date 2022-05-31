
const createCountryList = (selectHTMLTag, LOCATIONS) => {

    const COUNTRIES = LOCATIONS
                    .map(item => item.country)
                    .reduce((array, item) => {

                        if (array.indexOf(item) === -1) {
                            array.push(item)
                        }
                        return array
                    }, [])
                    .sort((a, b) => a.localeCompare(b))

    COUNTRIES.forEach(item => {

        let newOption = new Option(item,item);
        selectHTMLTag.add(newOption, undefined)
    })
};

export default createCountryList;
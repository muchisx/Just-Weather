
const createCountryList = (LOCATIONS) => {

    const COUNTRIES = LOCATIONS
                    .map(item => item.country)
                    .reduce((array, item) => {

                        if (array.indexOf(item) === -1) {
                            array.push(item)
                        }
                        return array
                    }, [])
    ;   

    return COUNTRIES;
};

export default createCountryList;
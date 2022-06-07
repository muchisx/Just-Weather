
const createCityList = (LOCATIONS, selection) => {

    const CITIES = LOCATIONS
                    .filter(item => item.country == selection)
                    .map(item => item.city)
                    .reduce((array, item) => {

                        if (array.indexOf(item) === -1) {
                            array.push(item)
                        }
                        return array
                    }, [])
                    .sort((a, b) => a.localeCompare(b))
    ;

    return CITIES;
}

export default createCityList;
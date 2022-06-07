
const createCountryList = (LOCATIONS, selectCountryElement) => {



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

    // -----------

    // const COUNTRIES = LOCATIONS
    //                 .map(item => item.country)
    //                 .reduce((array, item) => {

    //                     if (array.indexOf(item) === -1) {
    //                         array.push(item)
    //                     }
    //                     return array
    //                 }, [])
    //                 .sort((a, b) => a.localeCompare(b))

    // COUNTRIES.forEach(item => {

    //     let newOption = new Option(item,item);
    //     selectCountryElement.add(newOption, undefined)
    // })

};

export default createCountryList;
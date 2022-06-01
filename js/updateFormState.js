
const updateFormState = (selectCountryElement, selectCityElement, buttonSearchElement) => {

    let country = selectCountryElement.value;
    let city = selectCityElement.value;

    const countryNotSelected = "Select a Country";
    const cityNotSelected = "Select a City";

    if (country == countryNotSelected) {

        selectCityElement.setAttribute("disabled", "disabled")

    } else if (city == cityNotSelected) {

        selectCityElement.removeAttribute("disabled")
        buttonSearchElement.setAttribute("disabled", "disabled")
    } else {
        buttonSearchElement.removeAttribute("disabled")
    }

}

export default updateFormState;
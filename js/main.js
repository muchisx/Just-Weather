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



const FORM_WEATHER = document.querySelector('#form-weather-location');
const SELECT_COUNTRY = FORM_WEATHER.querySelector('#select-country')

COUNTRIES.forEach(item => {

    let newOption = new Option(item,item);
    SELECT_COUNTRY.add(newOption, undefined)
})



const SELECT_CITY = FORM_WEATHER.querySelector('#select-city')

const updateCityList = () => {

    SELECT_CITY.innerHTML = "";

    let defaultOption = new Option("Select a City","Select a City")
    SELECT_CITY.add(defaultOption)
    SELECT_CITY.options[0].setAttribute("hidden", "hidden")

    const CITIES = LOCATIONS
                    .filter(item => item.country == SELECT_COUNTRY.value)
                    .map(item => item.city)

    CITIES.forEach(item => {

        let newOption = new Option(item,item)
        SELECT_CITY.add(newOption, undefined)
    })
}

SELECT_COUNTRY.addEventListener("change", updateCityList)



const API_KEY = "JJGNGKXG88HZ2tRa7nanQPxGyAoPKtBF";
const API_URL = "https://data.climacell.co/v4/timelines?apikey=";



const WEATHER_CARDS_CONTAINER = document.getElementById('weather-cards-container')

const updateCardTemperature = (weatherData, country, city) => {



    const WEATHER_CARD = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-0')
    const WEATHER_CARD_VISUAL = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-headervisual-0')
    const WEATHER_CARD_HEADER_H2 = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-headerh2-0')
    const WEATHER_CARD_DEGREES = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-degrees-0')
    const WEATHER_CARD_CITY = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-city-0')
    const WEATHER_CARD_COUNTRY = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-country-0')

    WEATHER_CARD_DEGREES.innerHTML = `<sup>°</sup>${Math.round(weatherData.data.timelines[0].intervals[0].values.temperature)}`;

    WEATHER_CARD_COUNTRY.textContent = country;
    WEATHER_CARD_CITY.textContent = city;

}


const getTemperature = async (e) => {
    
    e.preventDefault();

    let country = SELECT_COUNTRY.value;
    let city = SELECT_CITY.value;

    let coordinates = LOCATIONS
                        .filter(item => item.country == country && item.city == city)
                        .map(({lat, lng}) => ([lat, lng]))
                        .flat()
    console.log(coordinates);

    let fields = [
        "temperature",
        "weatherCode",
        "temperatureApparent",
    ];
    console.log(`${fields}`);

    let res = await fetch(`${API_URL}${API_KEY}&location=${coordinates}&fields=${fields}`)
                        .then(res => res.json())
                        .then(data => updateCardTemperature(data, country, city))


}




FORM_WEATHER.addEventListener("submit", getTemperature)


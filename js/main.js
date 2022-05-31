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
                    .sort((a, b) => a.localeCompare(b))

    CITIES.forEach(item => {

        let newOption = new Option(item,item)
        SELECT_CITY.add(newOption, undefined)
    })
}

SELECT_COUNTRY.addEventListener("change", updateCityList)




const WEATER_API_URL = "https://api.open-meteo.com/v1/forecast?";
const TIME_API_URL = "http://api.timezonedb.com/v2.1/get-time-zone?key=840VC3BU9NL1&format=json&by=position"





const WEATHER_CARDS_CONTAINER = document.getElementById('weather-cards-container')

const updateCardTemperature = (weatherData, timeData, country, city) => {



    const WEATHER_CARD = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-0')
    const WEATHER_CARD_VISUAL = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-headervisual-0')
    const WEATHER_CARD_HEADER_H2 = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-headerh2-0')
    const WEATHER_CARD_DEGREES = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-degrees-0')
    const WEATHER_CARD_CITY = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-city-0')
    const WEATHER_CARD_COUNTRY = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-country-0')
    const WEATHER_CARD_FOOTER_INFO = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-footerinfo-0')

    WEATHER_CARD_DEGREES.innerHTML = `<sup>°</sup>${Math.round(weatherData.current_weather.temperature)}`;

    let date = new Date(timeData.timestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let date2 = new Date(timeData.timestamp * 1000).toTimeString()

    // WEATHER_CARD_FOOTER_INFO.textContent = `${hours}:${minutes}`;
    WEATHER_CARD_FOOTER_INFO.textContent = `${date2}`;

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
        "temperature_2m",
        "weathercode",
        "apparent_temperature",
    ];
    console.log(`${fields}`);

    let weatherData = fetch(`${WEATER_API_URL}latitude=${coordinates[0]}&longitude=${coordinates[1]}&hourly=${fields}&current_weather=true`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            return data
                            // updateCardTemperature(data, country, city)
                        })

    let timeData = fetch(`${TIME_API_URL}&lat=${coordinates[0]}&lng=${coordinates[1]}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        return data
                        // updateCardTemperature(data, country, city)
                    })
    
    let allData = await Promise.all([weatherData, timeData])
    
    updateCardTemperature(allData[0], allData[1], country, city);            
    
}


FORM_WEATHER.addEventListener("submit", getTemperature)
































// tomorrow.io API


// const API_KEY = "JJGNGKXG88HZ2tRa7nanQPxGyAoPKtBF";
// const API_URL = "https://data.climawcell.co/v4/timelines?apikey=";

// const WEATHER_CARDS_CONTAINER = document.getElementById('weather-cards-container')


// const updateCardTemperature = (weatherData, country, city) => {

//     const WEATHER_CARD = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-0')
//     const WEATHER_CARD_VISUAL = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-headervisual-0')
//     const WEATHER_CARD_HEADER_H2 = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-headerh2-0')
//     const WEATHER_CARD_DEGREES = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-degrees-0')
//     const WEATHER_CARD_CITY = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-city-0')
//     const WEATHER_CARD_COUNTRY = WEATHER_CARDS_CONTAINER.querySelector('#weather-card-country-0')

//     WEATHER_CARD_DEGREES.innerHTML = `<sup>°</sup>${Math.round(weatherData.data.timelines[0].intervals[0].values.temperature)}`;

//     WEATHER_CARD_COUNTRY.textContent = country;
//     WEATHER_CARD_CITY.textContent = city;

// }


// const getTemperature = async (e) => {
    
//     e.preventDefault();

//     let country = SELECT_COUNTRY.value;
//     let city = SELECT_CITY.value;
//     let coordinates = LOCATIONS
//                         .filter(item => item.country == country && item.city == city)
//                         .map(({lat, lng}) => ([lat, lng]))
//                         .flat()
//     let fields = [
//         "temperature",
//         "weatherCode",
//         "temperatureApparent",
//     ];
//     let res = await fetch(`${API_URL}${API_KEY}&location=${coordinates}&fields=${fields}`)
//                         .then(res => res.json())
//                         .then(data => updateCardTemperature(data, country, city))
// }

// FORM_WEATHER.addEventListener("submit", getTemperature)





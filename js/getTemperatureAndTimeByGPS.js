import updateCard from "./updateCard.js";

const WEATER_API_URL = "https://api.open-meteo.com/v1/forecast?";
const TIME_API_URL = "https://api.timezonedb.com/v2.1/get-time-zone?key=840VC3BU9NL1&format=json&by=position"

const getTemperatureAndTimeByGPS = async (e, APP) => {

    const GEOLOCATION = () => {
        return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
        );
    }

    let fields = [
        "temperature_2m",
        "weathercode",
        "apparent_temperature",
    ];

    try {

        const GEO_DATA = await GEOLOCATION()

        let coordinates = [GEO_DATA.coords.latitude, GEO_DATA.coords.longitude]

        console.log(coordinates);

            
        let timeData = await fetch(`${TIME_API_URL}&lat=${coordinates[0]}&lng=${coordinates[1]}`)
                                .then(res => res.json())
                                .then(data => {
                                    console.log("Time", data);
                                    return data
        });


        let weatherData = await fetch(`${WEATER_API_URL}latitude=${coordinates[0]}&longitude=${coordinates[1]}&hourly=${fields}&current_weather=true`)
            .then(res => res.json())
            .then(data => {
                console.log("Weather", data);
                return data
        })

        let allData = await Promise.all([weatherData, timeData]) 
        updateCard(allData[0], allData[1], allData[1].countryName, allData[1].cityName);

        
        APP.BUTTON_GPS.classList.remove('--search-GPS-area');

        APP.BUTTON_SEARCH_COUNTRY.classList.add('--search-location-state');
        APP.BUTTON_SEARCH_COUNTRY.innerText = 'Location';
        APP.BUTTON_SEARCH_CITY.classList.add('hidden-opa');
        APP.BUTTON_SEARCH_CITY.setAttribute('disabled', 'disabled');

        APP.BUTTON_REFRESH.classList.remove('--search-refresh-area')
        APP.BUTTON_REFRESH.removeAttribute('disabled')
        APP.BUTTON_REFRESH.setAttribute('data-for', 'GPS')


    } catch(error) {
        console.error(error);
    }

}

export default getTemperatureAndTimeByGPS;
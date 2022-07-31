import updateCard from "./updateCard.js";
import { returnAnimationsPromises } from "./utilities.js";

const WEATER_API_URL = "https://api.open-meteo.com/v1/forecast?";
const TIME_API_URL = "https://api.timezonedb.com/v2.1/get-time-zone?key=840VC3BU9NL1&format=json&by=position"

const getTemperatureAndTime = async (e, APP, COUNTRY, CITY, LOCATIONS) => {
    
    e.preventDefault();
    APP.WEATHER_CARD.classList.remove('fade-in');
    APP.WEATHER_CARD.classList.add('fade-out-x3');
    
    APP.BUTTON_GPS.setAttribute('disabled', 'disabled')
    APP.BUTTON_REFRESH.setAttribute('disabled', 'disabled')
    APP.BUTTON_RANDOM.setAttribute('disabled', 'disabled')

    const country = COUNTRY;
    const city = CITY;
    const coordinates = LOCATIONS
                        .filter(item => item.country == country && item.city == city)
                        .map(({lat, lng}) => ([lat, lng]))
                        .flat();

    const fields = [
        "temperature_2m",
        "weathercode",
        "apparent_temperature",
    ];

    try {

        const weatherData = fetch(`${WEATER_API_URL}latitude=${coordinates[0]}&longitude=${coordinates[1]}&hourly=${fields}&current_weather=true`)
                        .then(res => res.json())

        const timeData = fetch(`${TIME_API_URL}&lat=${coordinates[0]}&lng=${coordinates[1]}`)
                        .then(res => res.json())

                           
        await returnAnimationsPromises(APP.WEATHER_CARD);
        
        const allData = await Promise.all([weatherData, timeData]);
        updateCard(allData[0], allData[1], country, city);

        APP.WEATHER_CARD.classList.remove('fade-out-x3');
        APP.WEATHER_CARD.classList.add('fade-in');
        
        APP.BUTTON_GPS.removeAttribute('disabled')
        APP.BUTTON_REFRESH.removeAttribute('disabled')
        APP.BUTTON_RANDOM.removeAttribute('disabled')

    } catch(error) {
        console.error(error);

        APP.WEATHER_CARD.classList.remove('fade-out-x3');
        APP.WEATHER_CARD.classList.add('fade-in');

        APP.BUTTON_GPS.removeAttribute('disabled')
        APP.BUTTON_REFRESH.removeAttribute('disabled')
        APP.BUTTON_RANDOM.removeAttribute('disabled')
    }
}

export default getTemperatureAndTime;
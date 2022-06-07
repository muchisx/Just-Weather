import updateCard from "./updateCard.js";

const WEATER_API_URL = "https://api.open-meteo.com/v1/forecast?";
const TIME_API_URL = "https://api.timezonedb.com/v2.1/get-time-zone?key=840VC3BU9NL1&format=json&by=position"

const getTemperatureAndTime = async (e, COUNTRY, CITY, LOCATIONS) => {
    
    e.preventDefault();

    let country = COUNTRY;
    let city = CITY;

    let coordinates = LOCATIONS
                        .filter(item => item.country == country && item.city == city)
                        .map(({lat, lng}) => ([lat, lng]))
                        .flat()
    console.log("Coordinates", coordinates);

    let fields = [
        "temperature_2m",
        "weathercode",
        "apparent_temperature",
    ];

    
    const countryNotSelected = "Select a Country";
    const cityNotSelected = "Select a City";
    
    if (country == countryNotSelected && city == cityNotSelected) {

        console.error("Must Select both country and city");
    } else {

        let weatherData = fetch(`${WEATER_API_URL}latitude=${coordinates[0]}&longitude=${coordinates[1]}&hourly=${fields}&current_weather=true`)
                            .then(res => res.json())
                            .then(data => {
                                console.log("Weather", data);
                                return data
                            })

        let timeData = fetch(`${TIME_API_URL}&lat=${coordinates[0]}&lng=${coordinates[1]}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log("Time", data);
                            return data
                        })
        
        let allData = await Promise.all([weatherData, timeData]) 
        updateCard(allData[0], allData[1], country, city);         

    }
     
}

export default getTemperatureAndTime;
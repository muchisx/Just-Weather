
const transcodeWeatherCodeToString = (weatherCode) => {

    let stringifiedCode = [];

    switch (weatherCode) {

        case 0:
            stringifiedCode = ["Clear sky", "#sunny-svg", "#night-svg"]
        break;

        case 1: case 2: case 3: 
            stringifiedCode = ["Mainly clear", "#less-clouds-svg", "#night-svg"]
        break;

        case 45: case 48:
            stringifiedCode = ["Foggy", "#fog-svg", "#fog-svg"]
        break;

        case 51: case 53: case 55:
            stringifiedCode = ["Drizzle", "#little-rain-svg", "#little-rain-svg"]
        break;

        case 56: case 57:
            stringifiedCode = ["Freezing Drizzle", "#little-rain-svg", "#little-rain-svg"]
        break;

        case 61: case 63: case 65:
            stringifiedCode = ["Rainy", "#heavy-rain-svg", "#night-svg"]
        break;

        case 66: case 67:
            stringifiedCode = ["Freezing Rain", "#heavy-rain-svg", "#night-svg"]
        break;

        case 71: case 73: case 75:
            stringifiedCode = ["Snowy", "#little-snow-svg", "#night-svg"]
        break;

        case 77:
            stringifiedCode = ["Snowy Grains", "#little-snow-svg", "#night-svg"]
        break;

        case 80: case 81: case 82:
            stringifiedCode = ["Rain Showers", "#heavy-rain-svg", "#night-svg"]
        break;

        case 85: case 86:
            stringifiedCode = ["Snow Showers", "#heavy-snow-svg", "#night-svg"]
        break;

        case 95:
            stringifiedCode = ["Thunderstorm", "#thunderstorm-svg", "#night-svg"]
        break;

        case 96: case 99:
            stringifiedCode = ["Hail Thunderstorm", "#thunderstorm-svg", "#night-svg"]
        break;

        
    
        default:
            stringifiedCode = ["Unavailable", "#warning-svg", "#warning-svg"]
        break;
    }

    return stringifiedCode;
}


export default transcodeWeatherCodeToString;
import getTemperatureAndTimeByGPS from "./getTemperatureAndTimeByGPS.js";
import getTemperatureAndTime from "./getTemperatureAndTime.js";

const refreshTemperatureAndTime = (e, APP, savedSelections, LOCATIONS) => {

    if (APP.BUTTON_REFRESH.dataset.for == 'GPS') getTemperatureAndTimeByGPS(e, APP)
    if (APP.BUTTON_REFRESH.dataset.for == 'form') getTemperatureAndTime(e, savedSelections.country, savedSelections.city, LOCATIONS);
}

export default refreshTemperatureAndTime;
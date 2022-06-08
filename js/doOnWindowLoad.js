import {returnAnimationsPromises} from "./utilities.js";

const doOnWindowLoad = async (e, APP) => {

    const MAIN_CONTAINER = APP.MAIN_CONTAINER;
    const SVG_SPRITE_CHILDS_ARRAY = APP.SVG_SPRITE_CHILDS

    const WEATHER_CARD_INTRO = MAIN_CONTAINER.querySelector('#weather-card-intro');
    const WEATHER_CARD = MAIN_CONTAINER.querySelector('#weather-card-0');
    const WEATHER_CARD_INTRO_VISUAL = WEATHER_CARD_INTRO.querySelector('.weather-card__intro-visual');
    const WEATHER_CARD_INTRO_TITLE = WEATHER_CARD_INTRO.querySelector('.weather-card__intro-title');
    const WEATHER_CARD_VISUAL = MAIN_CONTAINER.querySelector('#weather-card-headervisual-0');

    WEATHER_CARD_INTRO_VISUAL.classList.add('fade-in-out');
    WEATHER_CARD_INTRO_TITLE.classList.add('fade-in-out-0-5s-delay');


    await returnAnimationsPromises(WEATHER_CARD_INTRO_VISUAL, WEATHER_CARD_INTRO_TITLE)
            .then(() => {
                    WEATHER_CARD_INTRO.remove();
                    WEATHER_CARD.classList.remove('hidden-children');
                    WEATHER_CARD.classList.add('fade-in');              
    });

    const selector = Math.floor(Math.random()*SVG_SPRITE_CHILDS_ARRAY.length);
    WEATHER_CARD_VISUAL.setAttribute('xlink:href', `#${SVG_SPRITE_CHILDS_ARRAY[selector].id}`);            
}

export default doOnWindowLoad;

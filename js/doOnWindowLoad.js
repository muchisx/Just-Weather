


const doOnWindowLoad = async (e, mainContainerElement, svgSpriteChildsArray) => {

    // const MAIN_CONTAINER = document.getElementById("main-container")
    const MAIN_CONTAINER = mainContainerElement;

    const WEATHER_CARD_INTRO = MAIN_CONTAINER.querySelector('#weather-card-intro');
    const WEATHER_CARD = MAIN_CONTAINER.querySelector('#weather-card-0');
    const WEATHER_CARD_INTRO_VISUAL = WEATHER_CARD_INTRO.querySelector('.weather-card__intro-visual');
    const WEATHER_CARD_INTRO_TITLE = WEATHER_CARD_INTRO.querySelector('.weather-card__intro-title');
    const WEATHER_CARD_VISUAL = MAIN_CONTAINER.querySelector('#weather-card-headervisual-0');

    WEATHER_CARD_INTRO_VISUAL.classList.add('fade-in-out');
    WEATHER_CARD_INTRO_TITLE.classList.add('fade-in-out-0-5s-delay');


    let visualAnimation = WEATHER_CARD_INTRO_VISUAL
                            .getAnimations()
                            .map((animation) => animation.finished);

    let titleAnimation = WEATHER_CARD_INTRO_TITLE
                            .getAnimations()
                            .map((animation) => animation.finished);

    await Promise.all(visualAnimation, titleAnimation)
            .then(() => {
                WEATHER_CARD_INTRO.remove();
                WEATHER_CARD.classList.remove('hidden-children');
                WEATHER_CARD.classList.add('fade-in');
                
    });

    const selector = Math.floor(Math.random()*svgSpriteChildsArray.length);
    WEATHER_CARD_VISUAL.setAttribute('xlink:href', `#${svgSpriteChildsArray[selector].id}`);            

}

export default doOnWindowLoad;

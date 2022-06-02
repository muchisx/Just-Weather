


const doOnWindowLoad = async (e, mainContainerElement) => {

    const MAIN_CONTAINER = document.getElementById("main-container")
    // const MAIN_CONTAINER = mainContainerElement;

    const WEATHER_CARD_INTRO = MAIN_CONTAINER.querySelector('#weather-card-intro')
    const WEATHER_CARD = MAIN_CONTAINER.querySelector('#weather-card-0')
    const WEATHER_CARD_INTRO_VISUAL = WEATHER_CARD_INTRO.querySelector('.weather-card__intro-visual');
    const WEATHER_CARD_INTRO_TITLE = WEATHER_CARD_INTRO.querySelector('.weather-card__intro-title');

    WEATHER_CARD_INTRO_VISUAL.classList.add('fade-in-out')
    WEATHER_CARD_INTRO_TITLE.classList.add('fade-in-out-0-5s-delay')


    let visualAnimation = WEATHER_CARD_INTRO_VISUAL
                            .getAnimations()
                            .map((animation) => animation.finished)

    let titleAnimation = WEATHER_CARD_INTRO_TITLE
                            .getAnimations()
                            .map((animation) => animation.finished)

    await Promise.all(visualAnimation, titleAnimation)
            .then(() => {
                WEATHER_CARD_INTRO.remove();
                WEATHER_CARD.classList.remove('hidden-children')
                WEATHER_CARD.classList.add('fade-in')
                
            })

}

export default doOnWindowLoad;

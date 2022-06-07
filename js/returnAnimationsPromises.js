
const returnAnimationsPromises = (...animatedElements) => {

    let promises = [];

    for (let i = 0; i < animatedElements.length; i++) {

        promises[i] = animatedElements[i]
                        .getAnimations()
                        .map((animation) => animation.finished);
    }

    // return promises;
    return Promise.all(...promises);
}

export default returnAnimationsPromises;
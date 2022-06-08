
const returnSelection = (e) => {

    return e.submitter.innerText
}    


const returnFormState = (e, APP) => {

    return APP.FORM_SEARCH.dataset.state
}


const returnAnimationsPromises = (...animatedElements) => {

    let promises = [];

    for (let i = 0; i < animatedElements.length; i++) {

        promises[i] = animatedElements[i]
                        .getAnimations()
                        .map((animation) => animation.finished);
    }

    return Promise.all(...promises);
}

export {returnFormState, returnSelection, returnAnimationsPromises}
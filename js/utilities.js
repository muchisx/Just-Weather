
const returnSelection = (e) => {

    console.log(e);
    console.log(e.submitter);
    console.log('selection - ', e.submitter.innerText);

    return e.submitter.innerText
}    

const returnFormState = (e, FORM_SEARCH) => {

    console.log('form state -', FORM_SEARCH.dataset.state);

    return FORM_SEARCH.dataset.state
}


export {returnFormState, returnSelection}
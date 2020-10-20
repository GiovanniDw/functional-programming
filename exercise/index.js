

fetch('../excercise/data/survey_id.json').then((response) => {
    return response.json();
}).then((obj) => {
    console.log(obj);
}).catch((error) => {
    console.error('nope')
})

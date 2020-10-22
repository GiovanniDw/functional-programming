const data = '../data/survey_id.json';

// function getData(data) {
// 	let getData = fetch(data)
// 		.then((response) => response.json())
// 		.then(json => console.log(json))
// 		// .then((result) => {
// 		// 	console.log(result);
// 		// 	return result
// 		// })
// 		.catch((error) => {
// 			console.error('nope' + error);
// 		});
// };

status = (response) => {
    if (response.status >= 200 && response.status < 300) {
        console.log(response)
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}

json = (response) => {
	return response.json();
}

surveyAnswers = (response) => { 
    return 
}



let getData = fetch(data)
    .then(status)
    .then(json)
    .then(data => {
        console.log('Request succeeded with JSON response', data)
        return data
    })
    .then(data => {

    })
    // .then((json) => {
    //     console.log(json)
    //     return json
    // })
	// .then((json) => {
    //     console.log(json);
        
	// 	return json
	// })
	.catch((error) => {
		console.error('nope' + error);
	});

var surveyAnswers = JSON.stringify(getData);

// let surveyAnswers = getData;

console.log(json());

let getAge = (getData) => {

}
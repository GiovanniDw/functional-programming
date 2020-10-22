const data = '../data/survey_id.json';

responseStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        console.log(response)
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}

readResponseJSON = (response) => {
	return response.json();
}

logResult = (result) => {
    console.log(result)
}

fetchJSON = (data) => {
    fetch(data)
        .then(responseStatus)
        .then(readResponseJSON)
        .then(logResult)
        .then(data => {
            console.log('Request succeeded with JSON response', data)
            return getAllSurveyData(data);
        })
        // .then(data => {

        // })
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
}

fetchJSON(data)

// var surveyAnswers = JSON.stringify(getData);

// let surveyAnswers = getData;


getAllSurveyData = (data) => {
	for (let i = 0; i < data.length; i++) {
		const surveyAnswers = data[i];
		console.log(surveyAnswers);
	}
};
 

 

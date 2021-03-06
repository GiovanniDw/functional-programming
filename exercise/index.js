const data = '../../exercise/data/Survey_Information_Design_clean-parsed.json';
// rows to edit
// 



fetch(data)
	.then(responseStatus)
    .then(readResponseJSON)
    .then(result => {
        logResult(result)
		stringToNumber(result)
		calcSiblings(result)
        correctBirthDates(result)
		getIntrovertOfExtrovert(result)
		transformDates(result);
    })
	.catch((error) => {
		console.error('Can not fetch becasuse: ' + error);
	});

function responseStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		console.log(response);
		return Promise.resolve(response);
	} else {
		return Promise.reject(new Error(response.statusText));
	}
};

function readResponseJSON(response) {
	return response.json();
};

function logResult(result) {
	console.log(result);
	return result;
};

function getIntrovertOfExtrovert(data) {
    let rawData = data
        .map((i) => i['IntrovertOfExtrovert']);
    editIntrovertOfExtrovert(rawData);
}

function editIntrovertOfExtrovert(rawData) {
    let newData = rawData
    for (let i = 0; i < newData.length; i++) {
        let I = "Introvert"
        let E = "Extrovert"
        if (newData[i] != I && newData[i] != E) {
            newData[i] = "Ambivert"
        }   
    }
    console.log(newData)
}



//thanks to https://stackoverflow.com/a/34014512/13772119

function stringToNumber(result){
	console.log('str to nm');
	console.log(result);
	for (let i = 0; i < result.length; i++) {
		let obj = result[i];
		for (let prop in obj) {
			if (obj.hasOwnProperty(prop) && !isNaN(obj[prop])) {
				obj[prop] = +obj[prop];
			}
		}
	}
	return result;
};

function calcSiblings(result) {
	let siblings = [];
	for (let i = 0; i < result.length; i++) {
		let getBrothers = result[i].hoeveelheidBroers;
		let getSisters = result[i].hoeveelheidZussen;
		siblings.push(getBrothers + getSisters);
	}
    console.log(`Siblings per object: `);
    console.log(siblings)
	return;
};

function getAnswersByColName(results, colName) {
	if (results.length < 1) {
		console.log('No Items in result');
		return;
	}
	let resultByColName = [];
	for (result of results) {
		resultByColName.push(result[colName]);
	}
	return resultByColName;
};

// calc age https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd

function transformDates(results) {
	console.log('Transform date function');
	let getDates = getAnswersByColName(results, 'tijdreisJaar');
	console.log(getDates);
	let newDates = formatDateString(getDates);
	console.log(newDates);
	return results;
};

function correctBirthDates(results) {
	console.log('correctBirthDates function');
	let getBirthdate = getAnswersByColName(results, 'geboortedatum');
	let birthdate = formatDateString(getBirthdate);
	console.log(birthdate);
	return results;
};

// Date Transform to https://stackoverflow.com/questions/33299687/how-to-convert-dd-mm-yyyy-string-into-javascript-date-object
function formatDateString(date) {
	let convertedDates = [];
	date.forEach((dateString) => {
		if (dateString) {
			let dateParts = dateString
				.replaceAll('-', '/')
				.split('/');
			let dateObj = new Date(
				+dateParts[2],
				dateParts[1] - 1,
				+dateParts[0]
			);
			convertedDates.push(dateObj.toString());
		}
		
	});
	console.log(convertedDates);
	return convertedDates;
};
// convertDateString = (date) => {

// 	let convertedDates = date.map((dateString) => {
// 		let dateParts = dateString.split('-');
// 		let dateObj = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
// 	});
// 	return convertedDates;
// };



// getAge = (result) => {
// 	for (let i = 0; i < result.length; i++) {
// 		let getBirthday = result[i].geboortedatum;
//         console.log(getBirthday);
//         calcAge(getBirthday)
// 	}
// };

// let calcAge = (birthday) => {
//     let today = new Date().getTime()
//     let birthDate = new Date(birthday)

//     // let ageDif = Date.parse(birthday)
//     console.log(birthDate)
//     // let ageDate = new Date(ageDif)
//     // return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

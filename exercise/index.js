const data = '../data/Survey_Information_Design_clean-parsed.json';

fetch(data)
	.then(responseStatus)
	.then(readResponseJSON)
	.then(logResult)
	.then(stringToNumber)
	// .then(calcSiblings)
	.then(correctBirthDates)
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
	console.log(`Siblings per object: ${siblings}`);
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

function correctBirthDates(results) {
	console.log('correctBirthDates function');
	let getBirthdate = getAnswersByColName(results, 'geboortedatum');
	console.log(getBirthdate);
	let birthdate = formatDateString(getBirthdate);
	console.log(birthdate);
	return results;
};

// Date Transform to https://stackoverflow.com/questions/33299687/how-to-convert-dd-mm-yyyy-string-into-javascript-date-object
function formatDateString(date) {
	let convertedDates = [];
	date.forEach((dateString) => {
		let dateParts = dateString.split('-');
		let dateObj = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

		convertedDates.push(dateObj.toString());
	});
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

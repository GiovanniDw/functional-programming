// const data = '../data/survey_id.json';
const data = '../data/Survey_Information_Design_clean-parsed.json';

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
    JSON.stringify(result)
    console.log(result)
    return result
}

calcSiblings = (result) => {
    for (let i = 0; i < result.length; i++) {
        let getBrothers = result[i].hoeveelheidBroers;
		let getSisters = result[i].hoeveelheidZussen;
        let siblings = getBrothers + getSisters
        console.log(siblings)
    }
    return
    // console.log(siblings)
};

//thanks to https://stackoverflow.com/a/34014512/13772119

stringToNumber = (result) => {
 for (let i = 0; i < result.length; i++) {
		let obj = result[i];
		for (let prop in obj) {
			if (obj.hasOwnProperty(prop) && !isNaN(obj[prop])) {
				obj[prop] = +obj[prop];
			}
		}
 }
    return result
}



fetchJSON = (data) => {
    fetch(data)
		.then(responseStatus)
		.then(readResponseJSON)
		.then(logResult)
		.then(stringToNumber)
		.then(calcSiblings)
		// .then(getAge)
		.catch((error) => {
			console.error('nope' + error);
		});
}

fetchJSON(data)


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
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

logResult = (results) => {
    
    JSON.stringify(results)
    console.log(results)
    return results
}

//thanks to https://stackoverflow.com/a/34014512/13772119

stringToNumber = (results) => {
    console.log("str to nm")
    console.log(results)
 for (let i = 0; i < results.length; i++) {
		let obj = results[i];
		for (let prop in obj) {
			if (obj.hasOwnProperty(prop) && !isNaN(obj[prop])) {
				obj[prop] = +obj[prop];
			}
		}
 }
    return results
}


calcSiblings = (results) => {

    for (let i = 0; i < results.length; i++) {
        let getBrothers = results[i].hoeveelheidBroers;
		let getSisters = results[i].hoeveelheidZussen;
        let siblings = getBrothers + getSisters;
        console.log(siblings)
        return results
    }
    
    
};

getAnswersByColName = (results, colName) => {
    if (results.length < 1) {
        console.log("No Items in result")   
        return
    }
    let resultByColName = []
    for (result of results) {
        resultByColName.push(result[colName])
    }
    return resultByColName
    
}

getAge = (results) => {
    console.log("GetAge function")
    let getBirthdate = getAnswersByColName(results, "geboortedatum");
    console.log(getBirthdate);
    let birthdate = convertDateString(getBirthdate);
    console.log(birthdate)


}

convertDateString = (date) => {
    let convertedDates = [];
    date.forEach(dateString => {
        let dateParts = dateString.split('-');
        let dateObj = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        
        convertedDates.push(dateObj.toString())
    });
    return convertedDates
}
// convertDateString = (date) => {
	 
// 	let convertedDates = date.map((dateString) => {
// 		let dateParts = dateString.split('-');
// 		let dateObj = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
// 	});
// 	return convertedDates;
// };



fetchJSON = (data) => {
    fetch(data)
		.then(responseStatus)
		.then(readResponseJSON)
		.then(logResult)
		// .then(stringToNumber)
		.then(getAge)
		// .then(calcSiblings)
		.catch((error) => {
			console.error('Can not fetch becasuse: ' + error);
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
const data = "https://opendata.rdw.nl/resource/ixf8-gtwq.json"
const url = 'https://opendata.rdw.nl/resource/';


const gebruiksdoel = 'qidm-7mkf.json';
const tijdvak = 'ixf8-gtwq.json';
const verkooppunt = "fk68-nf2y.json"
const specificatiesParkeergebied = 'b3us-f26s.json';
const betaalmethodeGebied = 'r3rs-ibz5.json';
const regeling = 'yefi-qfiq.json';
const endPoint = tijdvak;


fetch(url + endPoint)
	.then(responseStatus)
	.then(readResponseJSON)
	.then((result) => {
		logResult(result);
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
}

function readResponseJSON(response) {
	return response.json();
}

function logResult(result) {
	console.table(result);
	return result;
}

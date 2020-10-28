const data = "https://opendata.rdw.nl/resource/ixf8-gtwq.json"
const url = 'https://opendata.rdw.nl/resource/';
const endPoint = 'qidm-7mkf.json';



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

<h1 align="center">Tech Track</h1>

<div align="center">
 Tech Track is an elective track of the following 3 courses</br>
</div>
<div align="center">
  <p>
    <a href="https://cmda-tt.github.io/course-20-21/courses/functional-programming">
      <b>Functional Programming</b>
    </a>
    <span> | </span>
    <a href="https://cmda-tt.github.io/course-20-21/courses/frontend-data">
      Frontend Data
    </a>
    <span> | </span>
    <a href="https://cmda-tt.github.io/course-20-21/courses/frontend-applications">
      Frontend Applications
    </a>
    </br>
    <sup>given during Project Information Design <a href="https://github.com/cmda">@CMDA⤴︎</a></sup>
  </p>
  <sub align="center">More information about the Tech Track?</sub>
  </br>
<sup>
<a href="https://github.com/cmda-tt/course-20-21">@CMDA-TT⤴︎</a>
</sup>
</div>

<br>


<div align="center">
My process during the Tech Track is documented in <a href="https://github.com/GiovanniDw/functional-programming/wiki">this <strong>Wiki!</strong> ⤴︎</a>
</div>

<br>

## Contents

[ ⦿ Features](#features)  
[ ⦿ Example](#example)  
[ ⦿ Installation](#installation)  
[ ⦿ API](#api)  
[ ⦿ Assignment](#assignment)  
  [ ⦿ Functional Programming](#functional-programming-1)  
  [ ⦿ Frontend Data](#frontend-data)  
  [ ⦿ Frontend Applications](#frontend-applications)  
[ ⦿ Rubric](#rubric)  
[ ⦿ Resources](#resources)  
[ ⦿ Credits](#credits)  



## Features

- [x] Get, Filter, Clean & transform dataset from Survey Exercise.
- [x] Get external data from API.
- [ ] Clean external API data that i need.
- [ ] Transform the data thats clean.
- [ ] Use D3 to Create Visualisation from clean data.

## Example

```javascript
const url = 'https://opendata.rdw.nl/resource/';
const tijdvak = 'ixf8-gtwq.json';

fetch(url + endPoint)
	.then(responseStatus)
	.then(sendResponseJSON)
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


```

## Installation

First, clone the repo to your local machine.

```zsh
$ git clone https://github.com/GiovanniDw/functional-programming.git
```

Then ` $ cd/ ` into the project folder.

```zsh
$ npm install
```

Now run the project!

```zsh
$ npm run dev
```

## API

Most of the data that will be used, comes from the [opendata.rdw.nl⤴︎](https://opendata.rdw.nl) API.

**API-endpoint:**  

```html
https://opendata.rdw.nl/resource/ixf8-gtwq.json
```

## Assignment
> Create a data visualisation with d3 based on given data.  

During this course the code in this repo will use functional patterns to get, filter, clean & transform datasets from external sources about parking. And visualise that data. For more details about te concept and the data go to [the Wiki⤴︎](https://github.com/GiovanniDw/functional-programming/wiki/Concept)
<details>
  <summary><strong>Functional Programming</strong></summary>

**During this course I will**  
⦿ Apply functional programming patterns to clean & transform data.  
⦿ Develop a concept for _The Volkskrant_ based on external datasets  
⦿ Create interactive visualizations with data by using D3  

</details>
</br>
<details>
  <summary><strong>Frontend Data</strong></summary>


```js

```


</details>
</br>
<details>

  <summary><strong>Frontend Applications</strong></summary>


```js
```


</details>


## Rubric

[Functional Programming ⤴︎](https://github.com/cmda-tt/course-20-21/blob/master/pages/functional-programming/assessment.md)

## Resources

[CMDA Tech Track recource page](https://cmda-tt.github.io/course-20-21/resources/)


## Credits

- Teachers from the [Tech Track @CMD ⤴︎](https://github.com/cmda-tt/)

---

<p align="center">
<a align="left" href="https://github.com/GiovanniDw/functional-programming/blob/main/LICENSE"> MIT licenced </a>
 <span>|</span> 
 <a align="center" href="https://github.com/GiovanniDw/functional-programming/wiki"><strong> GiovanniDw </strong> </a>
<span>|</span>
<a align="right" href="https://github.com/GiovanniDw/functional-programming/wiki"> Wiki for more </a>
</p>

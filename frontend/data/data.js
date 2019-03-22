let requestURL = './data.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  let dataText = request.response; // get the string from the response
  console.log(dataText)
}
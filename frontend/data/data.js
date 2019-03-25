export default {
    getArray (){
        let requestURL = './data.json'; //get data.json
        let request = new XMLHttpRequest();
        let dataJs = [];
//To send a request to a json file, we use the open() and send() methods of the XMLHttpRequest object
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function () {
            let data = request.response;/* get the string from the response*/
            for (let value of data) {
                dataJs.push(value); // new Array of data from json data
            }
        };
        return dataJs;// return new array
    },
}
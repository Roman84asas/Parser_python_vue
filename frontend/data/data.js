export default {
    getArray (){
        let requestURL = './data.json';
        let request = new XMLHttpRequest();
        let dataJs = [];

        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function () {
            let data = request.response;/* get the string from the response*/
            for (let value of data) {
                dataJs.push(value); // 1, затем 2, затем 3
            }
        };
        return dataJs;
    },
}
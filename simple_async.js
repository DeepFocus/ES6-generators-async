var req = require('request');

function getAsync(url) {
	req(url, function (error, response) {
	  it.next(response);
	});
}

function *main() {
	var result1 = yield getAsync('http://google.com');
	console.log('Request 1: ' + result1.body.length);
	
	var result2 = yield getAsync('http://bing.com');
	console.log('Request 2: ' + result2.body.length);
}

var it = main();
it.next();
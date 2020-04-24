const fs = require('fs');
const request = require('request');
const path = require('path');

const config = require('./config');
const analyze = require('./analyze');


function start() {
	request(config.url, function(err, res, body) {
		console.log('start ...');
		if (!err && res) {
			console.log('start download ...');
			analyze.findImage(body, download);
		}
	})
}

function download(imgURL, i) {
	let ext = imgURL.split('.').pop();

	request(imgURL).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), {
		'encoding': 'utf-8'
	}))
	console.log('GET : ' + i + '...');
}

start();

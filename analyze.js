const cheerio = require('cheerio');


function findImage(dom, callback) {
	let $ = cheerio.load(dom);
	$('img').each(function(i, item) {
		let imgSrc = $(this).attr('src');
		callback(imgSrc, i);
	});
}

module.exports.findImage = findImage;

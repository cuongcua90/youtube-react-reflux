var $ = require('jquery');


var YoutubeAPIUtils = {
	search: function(query, callback) {
		
		var url = 'http://gdata.youtube.com/feeds/api/videos?';
		var data = {
			'alt': 'jsonc',
			'q': query,
			'max-results': 15,
			'type': 'video',
			'v': 2
		};
		return $.ajax({
			type: 'GET',
			url: url,
			data: data,
			success: function(response) {
				callback(response);
			} 
		});
	}
};

module.exports = YoutubeAPIUtils;

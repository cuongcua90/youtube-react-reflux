'use strict';

var Reflux = require('reflux');
var YoutubeAPIUtils = require('../utils/YoutubeAPIUtils');


var YoutubeAppActions = Reflux.createActions([
	'searchVideo', 'searchVideoComplete'
]);

YoutubeAppActions.searchVideo.preEmit = function(query) {
	YoutubeAPIUtils.search(query, YoutubeAppActions.searchVideoComplete);
};


module.exports = YoutubeAppActions;
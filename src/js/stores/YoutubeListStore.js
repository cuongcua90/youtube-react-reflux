var Reflux = require('reflux');
var YoutubeAppActions = require('../actions/YoutubeAppActions');
var YoutubeAPIUtils = require('../utils/YoutubeAPIUtils');

var YoutubeListStore = Reflux.createStore({
	//listenables: [YoutubeAppActions],
	init: function() {
		this.listenTo(YoutubeAppActions.searchVideoComplete, this.onSearchVideoComplete);
	},
	onSearchVideoComplete: function(data) {
		this.trigger(data);
	}
});

module.exports = YoutubeListStore;

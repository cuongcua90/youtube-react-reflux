/** @jsx React.DOM */

var React = require('react');
var ReactRouter = require('react-router');
var YoutubeAppActions = require('../actions/YoutubeAppActions');
var YoutubeListStore = require('../stores/YoutubeListStore');
var Header = require('./Header');
var YoutubeSearchPage = require('./YoutubeSearchPage');
var YoutubeMain = require('./YoutubeMain');


var YoutubeApp = React.createClass({
		//mixins: [Reflux.connect(YoutubeListStore), "list"],
		
	render: function() {
		return (
			<div>
				<Header />
				<ReactRouter.RouteHandler />
			</div>
		)
	}
});


module.exports = YoutubeApp;
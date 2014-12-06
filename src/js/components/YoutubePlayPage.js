/** @jsx React.DOM */

var React = require('react');
var ReactRouter = require('react-router');
var YoutubeAppActions = require('../actions/YoutubeAppActions');
var YoutubeListStore = require('../stores/YoutubeListStore');
var YoutubePlayer = require('./YoutubePlayer');

var YoutubePlayPage = React.createClass({
		//mixins: [Reflux.connect(YoutubeListStore), "list"],
		mixins: [ReactRouter.State],
		render: function() {
			var embedLink = 'http://www.youtube.com/embed/' + this.getParams().youtubeId;
			return (
				<div className='play-page'>
					<YoutubePlayer src={embedLink} />
					<h1>Play Page {this.getParams().youtubeId}</h1>
				</div>
			)
		}
	});

module.exports = YoutubePlayPage;
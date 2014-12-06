/** @jsx React.DOM */

var React = require('react');
var Reflux = require('reflux');
var YoutubeAppActions = require('../actions/YoutubeAppActions');
var YoutubeListStore = require('../stores/YoutubeListStore');
var YoutubeResultItem = require('./YoutubeResultItem');


var YoutubeMain = React.createClass({
		mixins: [Reflux.connect(YoutubeListStore), "data"],
		
		getInitialState: function() {
			return {
				data: {
					items: []
				}
			};
		}, 

		render: function() {
			return (
				<div class="main-page">
					{ this.state.data.items.map(function(item){
						return (<YoutubeResultItem data={item}/>)
					}) }
				</div>
			)
		}
	});

module.exports = YoutubeMain;
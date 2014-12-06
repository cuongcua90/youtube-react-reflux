/** @jsx React.DOM */

var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var YoutubeAppActions = require('../actions/YoutubeAppActions');
var YoutubeListStore = require('../stores/YoutubeListStore');
var YoutubeResultItem = require('./YoutubeResultItem');

var YoutubeSearchPage = React.createClass({
		//mixins: [ReactRouter.State, Reflux.connect(YoutubeListStore), "data"],
		mixins: [ReactRouter.State, Reflux.ListenerMixin],

		getInitialState: function() {
			return {
				data: {
					items: []
				}
			};
		},

		_onChange: function(data) {
			
			this.setState({
				data: data.data
			});
			console.log(this.state.data);

		},

		componentDidMount: function() {
			//console.log('component did mount');
			this.listenTo(YoutubeListStore, this._onChange, this._onChange);
			YoutubeAppActions.searchVideo(this.getParams().query);
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

module.exports = YoutubeSearchPage;
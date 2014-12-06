/** @jsx React.DOM */

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var YoutubeAppActions = require('../actions/YoutubeAppActions');
var MaterialUI = require('material-ui');
var Input = MaterialUI.Input;
var RaisedButton = MaterialUI.RaisedButton;
var FlatButton = MaterialUI.FlatButton;


var Header = React.createClass({
	
		onQueryChange: function(evt) {
			var query = evt.target.value;

			if (evt.which === 13 && query){
				YoutubeAppActions.searchVideo(query);
				window.router.transitionTo('searchPage', {query: query});
			}	
		},

		render: function() {
			return (
				<div className="header">
					<Input placeholder="Search Video Here" 
						   name="search-query" 
						   onKeyUp={this.onQueryChange}/>
				</div>
			)
		}
	});

module.exports = Header;
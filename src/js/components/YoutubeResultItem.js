/** @jsx React.DOM */

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var YoutubeResultItem = React.createClass({
		//mixins: [Reflux.connect(YoutubeListStore), "list"],
		render: function() {
			return (
				<div className='youtube-result-item'>
					<Link to="playPage" params={{youtubeId: this.props.data.id}}>
						<img src={this.props.data.thumbnail.sqDefault}/>
						<h3>{this.props.data.title}</h3>
						<div>{this.props.data.description}</div>
						<div>{this.props.data.id}</div>
					</Link>
				</div>
			)
		}
	});

module.exports = YoutubeResultItem;
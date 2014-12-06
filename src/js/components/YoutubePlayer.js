/**
 * @jsx React.DOM
 * From https://github.com/toddmotto/fluidvids-react
 */
var React = require('react');
var YoutubePlayer = React.createClass({
  getDefaultProps: function () {
    return {
      src : '',
      width: 800,
      height: 600
    }
  },
  getRatio: function (width, height) {
    return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
  },
  render: function() {
    return (
      <div>
        <iframe src={ this.props.src } width={ this.props.width } height={ this.props.height } frameBorder={ 0 }></iframe>
      </div>
    );
  }
});

module.exports = YoutubePlayer;
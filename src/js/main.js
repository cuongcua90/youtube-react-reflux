/** @jsx React.DOM */


var React = require('react');
var YoutubeApp = require('./components/YoutubeApp');
var YoutubeMain = require('./components/YoutubeMain');
var YoutubePlayPage = require('./components/YoutubePlayPage');
var YoutubeSearchPage = require('./components/YoutubeSearchPage');
var ReactRouter = require('react-router');

var routes = (
    <ReactRouter.Route handler={YoutubeApp}>
        <ReactRouter.Route name="mainPage" path="/" handler={YoutubeMain} />
        <ReactRouter.Route name="searchPage" path="/search/:query" handler={YoutubeSearchPage} />
        <ReactRouter.Route name="playPage" path="/watch/:youtubeId" handler={YoutubePlayPage} />
    </ReactRouter.Route>

);

window.router = ReactRouter.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById('main'));
});

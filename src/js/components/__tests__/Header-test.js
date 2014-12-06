jest.dontMock('../YoutubePlayer.js');

describe('Header', function() {
  it('changes the text key down', function() {
    var React = require('react/addons');
    var YoutubePlayer = require('../YoutubePlayer');
    var TestUtils = React.addons.TestUtils;

    // // Render a checkbox with label in the document
    // var headerInput = TestUtils.renderIntoDocument(
    //   <Header />
    // );
      // Verify that it's Off by default
   // var input = TestUtils.findRenderedDOMComponentWithTag(headerInput).getDOMNode();

    //console.log(input);
    //React.addons.TestUtils.Simulate.keyDown(input, {key: "Enter"});

    //expect(input.getDOMNode().textContent).toEqual('Off');

  });
});

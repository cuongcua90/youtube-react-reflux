jest.dontMock('../YoutubeAPIUtils.js');

describe('YoutubeAPIUtils', function() {
  
  it('calls into $.ajax with the correct params', function() {
    var $ = require('jquery');
    var YoutubeAPIUtils = require('../YoutubeAPIUtils');

    // Call into the function we want to test
    function dummyCallback() {}
    YoutubeAPIUtils.search('ha noi', dummyCallback);

    // Now make sure that $.ajax was properly called during the previous
    // 2 lines
    var data = {
      'alt': 'jsonc',
      'q': 'ha noi',
      'max-results': 15,
      'type': 'video',
      'v': 2
    };
    expect($.ajax).toBeCalledWith({
      type: 'GET',
      url: 'http://gdata.youtube.com/feeds/api/videos?',
      data: data,
      success: jasmine.any(Function)
    });
  });

  it('calls the callback when $.ajax requests are finished', function() {
    var $ = require('jquery');
    var YoutubeAPIUtils = require('../YoutubeAPIUtils');

    // Create a mock function for our callback
    var callback = jest.genMockFunction();
    YoutubeAPIUtils.search('ha noi',callback);
  });
});
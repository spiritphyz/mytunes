// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function () {
    var context = this;

    $.ajax({
      url: context.url,
      type: 'GET',
      success: function (data) {
        // console.log(data);
        context.loadSongs(data.results);
      },
      error: function(data) {
        console.error('Error: ', data);
      }
    });
  },

  loadSongs: function(songList) {
    var context = this;
    songList.forEach(function(song) {
      // console.log(song);
      context.add(song);
    }); 
  }

});
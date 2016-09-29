// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    var url = 'https://api.parse.com/1/classes/songs/';
    var context = this;
    $.ajax({
      url: url,
      type: 'GET',
      success: function (data) {
        console.log(data);
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
      context.add(song);
    }); 
  }

});
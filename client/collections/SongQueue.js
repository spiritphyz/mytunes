// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function() {
      // FIXME: how to get current song to remove?
      this.remove();
      console.log(this);
    });
  },

  playFirst: function () {
    this.models[0].play();
  },

});
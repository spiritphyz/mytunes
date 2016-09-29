// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song) {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      // FIXME: handle edge case where 0 songs in queue but then
      // current song stops playing
      this.remove(song);
      console.log(this);
    });
  },

  playFirst: function () {
    this.models[0].play();
  },

});
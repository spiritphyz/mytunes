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
      // debugger;
      this.remove(song);
      console.log(this);
      console.log(this.length);
      // this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    // }, this);
    });

    this.on('dequeue', function(song) {
      this.remove(song);
      console.log(this);
    });
  },

  playFirst: function () {
    this.models[0].play();
  },

});
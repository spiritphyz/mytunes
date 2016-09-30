// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    /* eslint-disable */
    artwork_url: '' 
    /* eslint-enable */ 
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    // console.log(arguments); 
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }

});

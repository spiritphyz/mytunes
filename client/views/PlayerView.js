// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.$el.on('ended', function() {

      var currCount = this.model.get('playCount');
      currCount = currCount === '' ? 1 : currCount + 1;
      this.model.set('playCount', currCount);
      console.log('playCount for song is: ', this.model, this.model.get('playCount'));
      console.log('Reached end');
      this.model.ended();
    }.bind(this));
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

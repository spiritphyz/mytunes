var AlbumView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<div><div/>',

  initialize: function() {

  },

  setPic: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    var $album = $('<img class="albumImage">').attr('src', this.model ? this.model.get('artwork_url') : '');
    //return this.$el.attr('src', this.model ? this.model.get('url') : '');
    return this.$el.html($album);
  }

});
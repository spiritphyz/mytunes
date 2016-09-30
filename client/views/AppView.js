// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.albumView = new AlbumView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
      this.albumView.setPic(model.get('currentSong'));
    }, this);
  },

  render: function() {
    var $row = $('<div class="row"></div>');
    var $col1 = $('<div class="col-md-6"></div>').html([this.libraryView.$el, this.queueView.$el]);
    var $col2 = $('<div class=col-md-6"></div>').html(this.albumView.$el);
    var $bootCol = $row.html([$col1, $col2]);

    // var $LibQueueContainer = $('<div class="LibQueueContainer"></div>').html(
    //     /* eslint-disable */
    //     '<div class="row">' + 
    //     '<div class="col-md-8">' +
    //       this.libraryView.$el +
    //       this.queueView.$el +
    //     '</div>' +
    //     '<div class="col-md-4">' +
    //       this.albumView.$el +
    //     '</div>' +
    //     '</div>'
    //     /* eslint-enable */
    // );
    return this.$el.html([
      this.playerView.$el,
      // this.libraryView.$el,
      // this.queueView.$el
      // $LibQueueContainer,
      $bootCol
    ]);
  }

});

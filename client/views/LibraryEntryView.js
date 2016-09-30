// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  // template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  template: _.template(
    // '<td><%= artist %></td>\
    // '<td class="bodyText"><%= title %></td>'
    '<td class="bodyText">\
    &nbsp;<button class="btn btn-default btn-circle">\
    <%= playCount  %>\
    </button>&nbsp;\
    <%= title %>\
    </td>'
    ),
  initialize: function() {
    this.model.on('change:playCount', function() {
      this.render();
    }.bind(this)); 
  },

  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue(this.model);
    },
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});

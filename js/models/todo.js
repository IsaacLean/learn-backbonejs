var app = app || {};

app.Todo = Backbone.Model.extend({

	defaults: {
		title: '',
		completed: false
	},

	// Toggle the 'completed' state of this to-do item
	toggle: function() {
		this.save({
			completed: !this.get('completed')
		});
	}

});

var Book = Backbone.Model.extend({
	idAttribute: '_id',

	defaults: {
		title: '',
		author: '',
		read: false
	}

});
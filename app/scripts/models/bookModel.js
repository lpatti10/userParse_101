var Book = Parse.Object.extend({
	className: 'Book',

	validate: function (attrs) {
		if (!attrs.title) {
			return 'Please enter a Sundays song title.';
		}
		if(!attrs.//...)
	}

	idAttribute: 'objectId',

	defaults: {
		title: '',
		author: '',
		read: false
	}

});
var LoggedInView = Backbone.View.extend ({

	el: '.hero-unit',

	events: {
		// 'click .read' : 'toggleRead'
	},

	initialize: function (){
		this.render ();
		this.collection.on ('change', this.render, this);
	},

	render:function (){
		// var template = Handlebars.compile($('#shelf_template').html());
		// var rendered = template({ data: this.collection.toJSON()});
		// this.$el.html(rendered);
		//Hide form vs. sep. view based on no dynamic content
		// $("#signupForm").hide();
		// $("#loginForm").hide();
		// $(".testBox").show();
	}

	// toggleRead: function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	var doneClicked = $(event.target).attr('id');
	// 	console.log(doneClicked);
	// 	var singleBook = this.collection.get(doneClicked);
	// 	singleBook.set({read: true});
	// 	singleBook.save();
	// }

});
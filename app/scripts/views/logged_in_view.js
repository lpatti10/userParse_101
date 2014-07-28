var LoggedInView = Backbone.View.extend ({

	el: '.bookShelf',

	events: {
		'click .home' : 'backHome'
	},

	initialize: function (){
		this.render ();
		this.collection.on ('change', this.render, this);
	},

	render:function (){
		$("#signupForm").hide();
		$("#loginForm").hide();
		var template = Handlebars.compile($('#shelf_template').html());
		var rendered = template({ data: this.collection.toJSON()});
		this.$el.html(rendered);
	},

	backHome: function(event) {
		event.preventDefault();
		event.stopPropagation();
		var homeClicked = $(event.target);
		console.log('homeClicked');
		
		//Navigate to user route after form is complete.
		window.bookRouter.navigate('', { trigger: true });
	}


});
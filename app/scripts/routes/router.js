// CONSTRUCTOR-ONLY FILE

// Backbone.Router.extend(properties, [classProperties]) 
// Get started by creating a custom router class. 
// Define actions that are triggered when certain URL 
// fragments are matched, and provide a routes hash that 
// pairs routes to actions. Note that you'll want to avoid 
// using a leading slash in your route definitions:

var LibRouter = Backbone.Router.extend ({

	routes: {
		'' : 'home', //Corresponds with 'ValidationView'
		'user' : 'logged_in' //Corresponds with 'UserView'
	},

	initialize: function() {
		this.appView = new App.View();
	},

	home: function () {
		if(!App.currentUser) return App.router.navigate('user', {trigger: true});

		var validation = new ValidationView();

		// $(".hero-unit").show();
		// $("#signupForm").show();
		// $("#loginForm").show();
		// $(".bookShelf").hide();
		// $('header').hide();
		// $(".testBox").hide();
	},

	logged_in: function () {
		if(App.currentUser) return App.router.navigate('', {trigger: true});
		
		showUser(App.currentUser);
		var myBooks = new UserView();
		this.appView.showView(myBooks);
		// $(".testBox").show();
		// $('header').show();
		// $(".bookShelf").show();
		// new ValidationView({ collection: new_library});
	}

});
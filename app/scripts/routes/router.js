// CONSTRUCTOR-ONLY FILE

// Backbone.Router.extend(properties, [classProperties]) 
// Get started by creating a custom router class. 
// Define actions that are triggered when certain URL 
// fragments are matched, and provide a routes hash that 
// pairs routes to actions. Note that you'll want to avoid 
// using a leading slash in your route definitions:

var LibRouter = Backbone.Router.extend ({

	routes: {
		'' : 'home',
		'user' : 'logged_in'
	},

	home: function () {
		$(".hero-unit").show();
		$("#signupForm").show();
		$("#loginForm").show();
		$(".bookShelf").hide();
		$('header').hide();
		// $(".testBox").hide();
	},

	logged_in: function () {
		// $(".testBox").show();
		$('header').show();
		$(".bookShelf").show();
		//SEEMS LIKE THIS INSTANCE OF THE COLLECTION (new_library) NEEDS TO BE DYNAMIC TO RELATE TO USER ID???
		new LoggedInView({ collection: new_library});
	}

});
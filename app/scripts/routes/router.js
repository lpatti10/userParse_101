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
		'user/:username' : 'logged_in'
	},

	home: function () {
		$(".testBox").hide();
		new LoggedInView({ collection: new_library});
	},

	logged_in: function () {
		$(".testBox").show();
		// new LibraryBookView({ collection: new_library});
	}

});
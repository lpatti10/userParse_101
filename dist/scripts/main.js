var Book = Backbone.Model.extend({
	idAttribute: '_id',

	defaults: {
		title: '',
		author: '',
		read: false
	}

});
var Library = Backbone.Collection.extend ({

	model: Book,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/library"

});



//WOULD WE NEED A NEW END POINT FOR EACH USER'S DATA??
var Library2 = Backbone.Collection.extend ({

	model: Book,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/library"

});
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
Parse.initialize("aUOgGVzu66uKF45tTRiIidlQJ1J9gfZjRWiNmrJC", "bjOQ1QJn0D2zHoNlDNpp1KaQucgsznkISsEB1aGi");

///////////////////////////////////////////////////////////////

// NEW INSTANCE OF COLLECTION
var new_library = new Library();

// NEW INSTANCE OF ROUTE
new_library.fetch().done(function(){

	window.bookRouter = new LibRouter ();
	Backbone.history.start();

});

////////////////////////////////////////////////////////////////

$('#signupForm').on('submit', function(event) {
	
	event.preventDefault();
	
	//In place of model object... it is extendable too.
	var user = new Parse.User();

	user.set("username", $(this).find('.username').val());
	console.log('gotcha username');

	user.set("password", $(this).find('.password').val());
	console.log('gotcha password');
	 
	user.signUp(null, {
	  success: function(user) {
	    // redirect to logged-in view here
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});

	$(this).trigger('reset');

});

/////////////////////////////////////////////////////////////

$('#loginForm').on('submit', function(event) {
	
	event.preventDefault();

	Parse.User.logIn($(this).find('.username').val(), $(this).find('.password').val(), {		
	  success: function(user) {
	    console.log("success");
	    
	    //Navigate to user route after form is complete.
			window.bookRouter.navigate('user', { trigger: true });
	  },

	  error: function(user, error) {
	    alert("Wrong password. Try again.");
	  }
	});

		$(this).trigger('reset');

});

///////////////////////////////////////////////////////////////////



//Example of extending (adding new column to user table)
// var user = new Parse.User({
//   defaults: {
//     favorite: 'jack'
//   }

      //can also add initialize other functions here
// });



// // $(signupForm).on('submit' function (event) {
// // 	event.preventDefaults();

// // 	var user_name = $(this).find(#username).val();
// // 	var user_pass = $(this).find(#password).val();

// // });


// user.set("username", "user_name");
// user.set("password", "user_pass");






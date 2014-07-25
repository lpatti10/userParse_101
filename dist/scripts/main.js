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
Parse.initialize("aUOgGVzu66uKF45tTRiIidlQJ1J9gfZjRWiNmrJC", "bjOQ1QJn0D2zHoNlDNpp1KaQucgsznkISsEB1aGi");

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
	    alert("success");
	    
	    //Navigate back home after form is complete.
			// window.bookRouter.navigate('', { trigger: true });
	  },

	  error: function(user, error) {
	    // The login failed. Check error to see why.
	  }
	});

		$(this).trigger('reset');

});

///////////////////////////////////////////////////////////////////

var new_library = new Library();

new_library.fetch().done(function(){

	window.bookRouter = new LibRouter ();
	Backbone.history.start();

});

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






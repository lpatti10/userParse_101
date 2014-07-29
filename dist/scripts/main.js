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



// //WOULD WE NEED A NEW END POINT FOR EACH USER'S DATA??
// var Library2 = Backbone.Collection.extend ({

// 	model: Book,
// 	url:"http://tiy-atl-fe-server.herokuapp.com/collections/library"

// });
//THIS IS OUR OPENING (HOME) VIEW WITH 2 FORMS

////////////////////////////////////////////////////////////////
var ValidationView = Parse.View.extend ({	

	el: ".hero-unit",

	events: {
		"submit #signupForm" : "signUp",
		"submit #loginForm" : "logIn",	
	},

	initialize: function() {
		this.render();
	},

	signUp: function(event) {
		
		var self = this;
		var username = this.$(".username").val();
		var password = this.$(".password").val();

		var user = new Parse.User();
					
		user.set("username", "username")
		console.log('gotcha username');

		user.set("password", "password")
		console.log('gotcha password');											

		Parse.User.signUp(username, password, {

			success: function(user) {
	    	new UserView();
	    	// FROM TODO EXAMPLE
	    	self.undelegateEvents();
	    	delete self;
	  	},
	  	error: function(user, error) {
		    alert("Error: " + error.code + " " + error.message);
      }
    });

      $(this).trigger('reset');

  },

	logIn: function(event) {
		var self = this;
		var username = this.$(".username").val();
		var password = this.$(".password").val();


		Parse.User.logIn(username, password, {

			success: function(user) {
	    	new UserView();
	    	// FROM TODO EXAMPLE
	    	self.undelegateEvents();
	    	delete self;
	  	},
	  	error: function(user, error) {
		    alert("Error: " + error.code + " " + error.message);
    	}
    });

      $(this).trigger('reset');

  },

	render: function() {
		var template = Handlebars.compile($('#shelf_template').html());
		var rendered = template({ data: this.collection.toJSON()});
		this.$el.html(rendered);
	}

});


/////////////////////////////////////////////////////////////

					// $('#loginForm').on('submit', function(event) {
						
					// 	event.preventDefault();

					// 	Parse.User.logIn($(this).find('.username').val(), $(this).find('.password').val(), {		
					// 	  success: function(user) {
					// 	    console.log("success");
						    
					// 	    //Navigate to user route after form is complete.
					// 			window.bookRouter.navigate('user', { trigger: true });
					// 	  },

					// 	  error: function(user, error) {
					// 	    alert("Wrong password. Try again.");
					// 	  }
					// 	});

					// 		$(this).trigger('reset');

					// });

///////////////////////////////////////////////////////////////////

					// $('#signupForm').on('submit', function(event) {
					// event.preventDefault();
					// var user = new Parse.User();
					
					// user.set("username", $(this).find('.username').val());
					// console.log('gotcha username');

					// user.set("password", $(this).find('.password').val());
					// console.log('gotcha password');
					 
					// user.signUp(null, {
					//   success: function(user) {
					//     // redirect to logged-in view here
					//   },
					//   error: function(user, error) {
					//     // Show the error message somewhere and let the user try again.
					//     alert("Error: " + error.code + " " + error.message);
					//   }
// var LoggedInView = Backbone.View.extend ({

var UserView = Parse.View.extend ({	

	el: ".bookShelf",

	events: {
		"click .home" : "backHome"
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
		new ValidationView({ collection: new_library});
	}

});
Parse.initialize("aUOgGVzu66uKF45tTRiIidlQJ1J9gfZjRWiNmrJC", "bjOQ1QJn0D2zHoNlDNpp1KaQucgsznkISsEB1aGi");





//PARSE ASSOCIATIONS NATIVE CODE
// var user = Parse.User.current();
 
// // Make a new post
// var Post = Parse.Object.extend("Post");
// var post = new Post();
// post.set("title", "My New Post");
// post.set("body", "This is some great content.");
// post.set("user", user);
// post.save(null, {
//   success: function(post) {
//     // Find all posts by the current user
//     var query = new Parse.Query(Post);
//     query.equalTo("user", user);
//     query.find({
//       success: function(usersPosts) {
//         // userPosts contains all of the posts by the current user.
//       }
//     });
//   }
// });

///////////////////////////////////////////////////////////////////

// NEW INSTANCE OF COLLECTION LIBRARY
var new_library = new Library();



//PARSE QUERY NATIVE CODE
var query = new Parse.Query(Parse.User);
query.equalTo("user", Parse.User.current());
// query.find({
//   success: function(women) {
//     // Do stuff
//   }
// });

// // Setup the query for the collection to look for todos from the current user
//       this.todos.query = new Parse.Query(Todo);
//       this.todos.query.equalTo("user", Parse.User.current());
        
//       this.todos.bind('add',     this.addOne);
//       this.todos.bind('reset',   this.addAll);
//       this.todos.bind('all',     this.render);


// NEW INSTANCE OF ROUTE
new_library.fetch().done(function(){

	window.bookRouter = new LibRouter ();
	Backbone.history.start();

});

// // Fetch all the todo items for this user
//       this.todos.fetch();

//       state.on("change", this.filter, this);
//     },

//     // Logs out the user and shows the login view
//     logOut: function(e) {
//       Parse.User.logOut();
//       new LogInView();
//       this.undelegateEvents();
//       delete this;
//     },
//////////////////////////////////////////////////////////////////

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






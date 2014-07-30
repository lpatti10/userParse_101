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
var Library = Parse.Collection.extend ({

	model: Book,
	// url:"http://tiy-atl-fe-server.herokuapp.com/collections/library"

});




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
		var username = this.$("#signup_username").val();
		var password = this.$("#signup_password").val();

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

////////////////////////////////////////////////////////////////

	logIn: function(event) {
		var self = this;
		var username = this.$("#login_username").val();
		var password = this.$("#login_password").val();


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

////////////////////////////////////////////////////////////////

	render: function() {
		var template = Handlebars.compile($('#shelf_template').html());
		var rendered = template({ data: this.collection.toJSON()});
		this.$el.html(rendered);
	}

});


/////////////////////////////////////////////////////////////
//ORIGINAL LOG-IN
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
//ORIGINAL SIGN-UP
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
//INITIALIZE PARSE
Parse.initialize("aUOgGVzu66uKF45tTRiIidlQJ1J9gfZjRWiNmrJC", "bjOQ1QJn0D2zHoNlDNpp1KaQucgsznkISsEB1aGi");

//INITIALIZE APP
var App = {};

//CHECK FOR USER
App.currentUser = Parse.User.current();

//MANAGING APP VIEWS
App.View = function (){
	this.showView = function(view) {
		if (this.currentView) {
			this.currentView.remove();
		}
		this.currentView = view;
		this.currentView.render();
		$('.bookShelf').html(this.currentView.el);
	}
}

//SCRIPT TO UPDATE USER FIELD
var showUser = function(user) {
	var name = user.get('username');
	$('.profile').text(name);							//ADD TO INDEX!
};

//"FIRE UP" + START LISTENING
App.router = new LibRouter();
Backbone.history.start();

//CREATE A NEW BOOK 
$('#newBook').on('submit', function (event) {

	event.preventDefault();

	//NEW INSTANCE OF BOOK MODEL
	var temp_book = new Book();
})

//SET PROPERTIES
var validate = temp_book.set({
	name: $('.book_title').val(),				//ADD TO INDEX!
	author: $('book_author').val(),			//ADD TO INDEX!
	user: App.currentUser
}, {validate: true});

//SAVE BOOK
if(validate !==false) {
	temp_book.setACL(new Parse.ACL(Parse.User.current()));
	temp_book.save(null, {
		success: function(temp_book) {
			//ADDS TO LIBRARY COLLECTION
			App.new_library.add(temp_book);
			//CLEAR FORM
			$(this).trigger('reset');
		}
	});
// } else { alert('All fields required.');		//FIX BRACKETS!!!!!!!!!!!!!!!!!
// }
// });

//LOGOUT
$('.logout button').on('click', function () {				//ADD TO INDEX!
	Parse.User.logout();
	App.currentUser = Parse.User.current();
	App.router.navigate('user', {trigger: true});
});
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
// var new_library = new Library();



//PARSE QUERY NATIVE CODE
// var query = new Parse.Query(Parse.User);
// query.equalTo("user", Parse.User.current());
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
// new_library.fetch().done(function(){

	// window.bookRouter = new LibRouter ();
	// Backbone.history.start();

// });

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







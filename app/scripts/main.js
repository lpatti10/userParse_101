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







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






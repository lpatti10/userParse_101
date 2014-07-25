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






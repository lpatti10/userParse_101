Parse.initialize("aUOgGVzu66uKF45tTRiIidlQJ1J9gfZjRWiNmrJC", "bjOQ1QJn0D2zHoNlDNpp1KaQucgsznkISsEB1aGi");

console.log('parse sees your app');

$('#signupBtn').on('submit', function(event) {
	
	// event.preventDefault();
	
	console.log('here');

});
	
// 	//in place of model object. it is extendable too.
// 	var user = new Parse.User();

// 	// user.set("username", "my name");
// 	user.set("username", $(this).find('.username').val());
// 	console.log('gotcha username');

// 	// user.set("password", "my pass");
// 	user.set("password", $(this).find('.password').val());
// 	console.log('gotcha password');

	 
// 	user.signUp(null, {
// 	  success: function(user) {
// 	    // redirect to logged-in view here
// 	  },
// 	  error: function(user, error) {
// 	    // Show the error message somewhere and let the user try again.
// 	    alert("Error: " + error.code + " " + error.message);
// 	  }
// 	});
// });
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

// user.signUp(null, {
//   success: function(user) {
//     // Hooray! Let them use the app now.
//   },
//   error: function(user, error) {
//     // Show the error message somewhere and let the user try again.
//     alert("Error: " + error.code + " " + error.message);
//   },

//   $( this ).trigger( 'reset' );
//   $( '#signupForm' ).trigger( 'reset' );
//   $( '#loginForm' ).trigger( 'reset' );

// });




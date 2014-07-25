// // NATIVE PARSE CODE BLOCK
// Parse.User.logIn("myname", "mypass", {
//   success: function(user) {
//     // Do stuff after successful login.
//   },
//   error: function(user, error) {
//     // The login failed. Check error to see why.
//   }
// });



// ////////////////////////////////////////////////////////////

// el: ".hero-unit",

//   events: {
    
//      // "submit #formID": "submitForm",
//      // "click .post_title": "seeFullpost",
//     
//   },

//   initialize: function (attrs) {
//     // this.options = attrs;
//     // this.render(); // This will run the `render` function below
//     // this.collection.on('change', this.render, this); // This watches my collection for when I add/update a post
//     // this.collection.on('destroy', this.render, this); // This watches my collection for when I delete a post
//     // this.collection.on('add', this.render, this); // 'Change' doesn't watch for 'adds'
//   }, 


//  render: function(){
//     // //Pass data to template
//     // var template = Handlebars.compile($('#post_feed').html()); // Grabs my handlebars temlate from my index.html file.
//     // var rendered = template({ posts: this.collection.toJSON() }); // Renders out a block of HTML to be used in my code
//     // this.$el.find(".post_list ul").html(rendered);

//     // //EXPERIMENTAL WEDNESDAY TO ATTEMPT REPAIR OF BACK BUTTON
//     // $(".hero-unit").show();

//     // //EXPERIMENTAL
//     // $(".full_post").hide();
    
//     // return this;
//   },

// logout: function (event){ 
//     console.log("Prompting logout");
//     event.preventDefault();
//     event.stopPropagation();

//     // These 2 lines, get my ID and then route to my URL with the ID in it
//     // My router then sees that and runs the proper function based on the routes I set up.
//     // var post_id = $(event.target).attr('id');

//     // window.router_instance.navigate('#post/'+post_id, { trigger: true });
//   },     









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




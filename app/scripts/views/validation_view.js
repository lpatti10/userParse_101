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
var Library = Backbone.Collection.extend ({

	model: Book,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/library"

});



// //WOULD WE NEED A NEW END POINT FOR EACH USER'S DATA??
// var Library2 = Backbone.Collection.extend ({

// 	model: Book,
// 	url:"http://tiy-atl-fe-server.herokuapp.com/collections/library"

// });
var Library = Backbone.Collection.extend ({

	model: Book,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/library"

});
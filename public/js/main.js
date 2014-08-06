$(document).ready(function(){
	console.log('main.js loaded');

	window.ponyExpress=new PonyExpress({
		io:window.location.origin
	});

	window.ponyExpress.bind('connect', function(){
		window.plugs.article=new PonyExpress.BackbonePlug({
			collection:window.collections.articles
		});
	});

	window.views.app=new Puls3.Views.App($('body'));
	
	//c= new Puls3.Collections.Articles()
	window.collections.articles = new Puls3.Collections.Articles();

	window.collections.articles.on('add', function(model){
		// Agregar Nuevas vistas de articulos
		var view = new Puls3.Views.Article({model: model});

		view.render();
		view.$el.prependTo('.posts');
	});

	window.collections.articles.fetch();
});

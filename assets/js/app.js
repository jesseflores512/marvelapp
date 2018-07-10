$(function(){

//create variables

	$("#button").on("click", function(event){

		var hero = $("#heroInput").val().toLowerCase();

		var queryURL = "https://gateway.marvel.com/v1/public/characters?name=" + hero + "&ts=1&apikey=" + apiKey + "&hash=" + hash;

		function showInfo(data){
			$('.pic').empty();
			$('.info').empty();
			$('#comics').empty();


			var results = data.data.results[0]
			$('.pic').prepend(" <img class='clearfix' src='"+results.thumbnail.path+"/portrait_uncanny.jpg'/> ")
			$('.info').append("<p> '"+results.description+"' </p>")

			var series = results.series.items
			var list = "<ul>"
			$.each(series, function(i, comic){
				list += "<li> '"+comic.name+"' </li>";

			});
			list += "</ul>"

			$('#comics').prepend(list)

		};
		$.get(queryURL, showInfo)
	});
});

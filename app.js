$(function(){

//create variables

	$("#button").on("click", function(event){

		var hero = $("#heroInput").val().toLowerCase();

		var queryURL = "https://gateway.marvel.com/v1/public/characters?name=" + hero + "&ts=1&apikey=" + apiKey + "&hash=" + hash;

		function showInfo(data){
			var results = data.data.results[0]
			$('#heroImage').prepend(" <img src='"+results.thumbnail.path+"/portrait_uncanny.jpg'/> ")

		};
		$.get(queryURL, showInfo)

	// 	$.ajax({
	//   	url: queryURL,
	//   	type: 'GET',
	// 		success: function(data) {
	// 			var element = data.data.results
	// 			console.log(element[0].name)
	// }
	// 	})
	});

});

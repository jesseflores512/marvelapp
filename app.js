$(function(){

//create variables

	$("#button").on("click", function(event){

		var hero = $("#heroInput").val().toLowerCase();

		var apiKey = "0d15eb0602df5de0c44219c2eb35237b"

		var apiPrKey = "9806f5868f2685972e72cc8aa2732e7ade19fd48"

		var hash = "51f99abd2a852eb72f4b02dfe526e620"

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

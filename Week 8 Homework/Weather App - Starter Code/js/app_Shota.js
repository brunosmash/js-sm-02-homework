$(document).ready(function(){

	// Start with this URL

	var url = 'http://api.openweathermap.org/data/2.5/weather?zip=%ZIPCODE%&APPID=6f181e7b8887bcb10a67c2bb33487822&units=imperial';

	// When a user clicks the input that reads "submit" get a JSON feed from the open weather API using the URL above
	// you'll notice that i included a placeholder "%ZIPCODE%"


	$('#getWeather').click(function(){
		// event.preventDefault();
		var zipCode = $('#zipCode').val();
		// var zipCode = 'a';

		// If the users enters a zipcode containing letters you should stop the function and prompt the user

		if( isNaN( zipCode ) || zipCode.length != 5 ){

			alert('Hey, that\'s not a valid zipcode!');


		} else {


		// get the user entered zip code and do a find and replace on the URL with the correct ZIP value
			var parsedUrl = url.replace('%ZIPCODE%', zipCode);
			console.log( parsedUrl );

		}


		// Print West Hollywood is 59˚ degrees in the h2 once you've retrieved the JSON

		// $.ajax({
		// 	type: 'GET',
		// 	url: parsedUrl,
		// 	sucess: function(response) {
		// 		console.log(response);


		// 	}, 

		// 	error: function(response) {
		// 		console.log('Error!');
		// 	}

		$.get( parsedUrl, function (response) {
			console.log(response);


		})


		});

});

	

	// If the temperature is greater than 50 degrees add the "warm" class to the body
	// If the temperature is less than 50 add the cool class to the body

	// Reference this: $.getJSON for more information
	// Reference .replace to find & replace

});

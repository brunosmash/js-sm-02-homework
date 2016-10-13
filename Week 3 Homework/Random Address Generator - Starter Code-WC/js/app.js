//Nice Job! Check comment on line 50

$(document).ready(function(){

	var streets = ['Main', 'Smith', 'Wall', '42nd', 'Astor', 'St. Marks', 'Broadway', 'Water', 'Park', '5th', 'Hollywood' ];
	var types = ['St', 'Ave', 'Way', 'Hwy', 'Place'];
	var states = ['NY', 'CA', 'TN', 'TX', 'MO'];
	var cities = ['New York', 'Boulder', 'Santa Monica', 'Los Angeles', 'St. Louis'];

	// function makeRandomNumber( min, max){

		// return  Math.floor( Math.random() * (max - min) + min );


	// }


	$('button#makeAddress').click(function(){

// console.log( makeRandomNumber ( 5,10 ) );

// return;

	// var doSomething = function(){}
	// $('button#makeAddress').click( doSomething );


		var houseNumber = Math.floor (Math.random() * 1000 );
		var zipcode = Math.floor( (Math.random() * 100) + 1000);

	//var zipcode = ( Math.floor( Math.random() * 89999) + 1000 );

		var streetsRandom = Math.floor( Math.random() * streets.length);
		var typesRandom = Math.floor( Math.random() * types.length);
		var statesRandom = Math.floor( Math.random() * states.length);
		var citiesRandom = Math.floor( Math.random() * cities.length);


		var streetName = streets[streetsRandom];
		var streetType = types[typesRandom];
		var state = states[statesRandom];
		var city = cities[citiesRandom];

		console.log( citiesRandom );
		console.log( cities[citiesRandom] );


		// Math.floor( (Math.random() * 10) + 1); will generate a random number between 1 - 10.

		console.log( Math.floor( (Math.random() *10) + 1) );/* <-- Just missing a closing parens! Always check the console if it's not working! */

		$('address.destination').html( houseNumber + ' ' + streetName + ' ' + streetType + '<br/>' );
		$('address.destination').append( city + ', ' + state + ' ' + zipcode );

	});

});
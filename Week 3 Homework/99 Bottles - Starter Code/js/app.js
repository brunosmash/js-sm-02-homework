$(document).ready(function(){

	for ( var i = 99; i > 0; i--) {




// 	//99 bottles of beer on the wall, 99 bottles of beer.
// 	//Take one down and pass it around, 98 bottles of beer on the wall.
// console.log('Hi');
	$('div.bottles').append( i + ' bottles of beer on the wall, ' + i + ' bottles of beer. Take one down and pass it around, ' + (i - 1) + ' bottles of beer on the wall. ')
	
	}

});
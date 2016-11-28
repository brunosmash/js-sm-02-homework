	

	

	

	

   


		$('input[type=checkbox]').click(function(){

	// 	// check if parent HAS CLASS
	// 	// use item PROP
	// 	// .is


	if( $(this).parent().hasClass('done') ){
		$(this).parent().removeClass('done');
	}else{
		$(this).parent().addClass('done');
	}

	// 	// if( $(this).prop('checked') == true ){
	// 	// 	$(this).parent().removeClass('done');
	// 	// }else{
	// 	// 	$(this).parent().addClass('done');
	// 	// }

	// 	// if( $(this).is(':checked') ){
	// 	// 	$(this).parent().removeClass('done');
	// 	// }else{
	// 	// 	$(this).parent().addClass('done');
	// 	// }

});


	// $('.fa-pencil').click(addItem);
	

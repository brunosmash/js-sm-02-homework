$(document).ready(function(){

// The function 'addItem' is what is passed in method below this function

	function addItem(inputValue, itemID, completed){

		var listItemHTML = $('script#listHtml').html();
		var listItemTemplate = Handlebars.compile(listItemHTML);

		var completedState;

		if (completed == "1") {

			completedState = true;

		} else {

			completedState = false;
		};

		console.log(completedState);

		var itemData = { listItem: inputValue, deleteText: 'Remove', listItemID: itemID, checked: completedState };
		var newHTML = listItemTemplate( itemData );



			

		$('ul#list').append( newHTML );

		// console.log(addItem);

	}

// This method allows you to add a new 'to do list' item

	$('form#composer').submit(function(e){

			e.preventDefault();

			var input = $('input#new-thing');
			var inputValue = input.val();

			$.ajax({

				url: 'http://www.kameronzach.com/todo/api/',
				method: 'post',
				data: { action: 'newItem', list_id: 60, 'token': '58097eb3b95a7', text: inputValue },
				dataType: 'json',
				success: function(data) {

					console.log( data );  //response: "New Item Added"
					console.log( data.text );
					addItem( inputValue, data.item_id, data.completed );
				
				}

			});

		});

// This method is displaying the 'to do list' title

	$.ajax({

		url: 'http://www.kameronzach.com/todo/api/',
		method: 'get',
		data: { action: 'displayList', list_id: 60, token: '58097eb3b95a7'},
		dataType: 'json',
		success: function(data) {

			if (data.title == '' ){
				
				$('h1#toDoTitle').html('Empty List Title');

			} else

			$('h1#toDoTitle').html(data.title);

			console.log(data); //response: "Successful request"

			$( data.items ).each(function(index, value){

				// console.log(value) //returns all of the lists children items?
				addItem( value.text, value.id, value.completed)

			});

		}

	});

// This method allows you to rename the 'to do list' title

	$('h1#toDoTitle').click(function(){

		var newName = prompt('Please enter list name here')
		if ( newName == '' ){

			alert('Please enter a list name');
			return;

		}

		$.ajax({
			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post',
			data:{ action: 'renameList', title: newName, list_id: 60, token: '58097eb3b95a7'},
			dataType: 'json', 
			success: function(data) {
				console.log(data); //response: List Renamed
				// console.log(data.title);
				$('h1#toDoTitle').html(data.title);
			}

		});	

	});	

// Adds a strikethrough when checkbox is clicked

	$('ul#list').on('change', 'input[type=checkbox]', function(){

		// if( $(this).parent().hasClass('done') ){
		// 		$(this).parent().removeClass('done');
		// }else{
		// 		$(this).parent().addClass('done');
		// }

		console.log($(this).is(':checked'));
		if( $(this).is(':checked') ) {

				$(this).parent().addClass('done');
	
		}else{
				$(this).parent().removeClass('done');
		}

		console.log(this);

		// // This method allows you to mark a to do list item as completed

		var itemID = $(this).parents('li').data('item-id');
		var isCompleted = $(this).is(":checked");

		$.ajax({

			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post',
			data: { action: 'updateItemStatus', list_id: 60, item_id: itemID, completed: isCompleted,'token': '58097eb3b95a7'},
			dataType: 'json',

			success: function(data) {

				console.log( data )

				}



		});

	});

// This method allows you to delete a to do list item

	$('ul#list').on('click', 'a.deleteItem', function(event){

		event.preventDefault();

		var listItem = $(this);
		var deleteItem = $(this).parents('li').data('item-id');

		alert('You are delteing list ID ' + deleteItem );

		// $(this).parents('li').remove();
		
	$.ajax({

		url: 'http://www.kameronzach.com/todo/api/',
		method: 'post',
		data: { action: 'deleteItem', list_id: 60, 'token': '58097eb3b95a7', item_id: deleteItem },
		dataType: 'json',
		success: function(data) {
			console.log(deleteItem);

			listItem.parents('li').slideUp(900, function(){
				listItem.remove();

			});

			console.log( data );

			}

		});

	});

// // DOES NOT WORK
// // This method allows you to update an individual 'to do list' item
// 	$('ul#list').click('input[type=checkbox]', function(){

// 		var editItem = prompt('Please edit list item here')
// 		var itemID = $(this).parents('li').data('item-id');
// 		var isCompleted = $(this).is(":checked");

// 		$.ajax({
			
// 			url: 'http://www.kameronzach.com/todo/api/',
// 			method: 'post',
// 			data:{ action: 'updateItem', text: editItem, list_id: 60, item_id: itemID, completed: isCompleted, token: '58097eb3b95a7'},
// 			dataType: 'json', 
			
// 			success: function(data) {

// 				console.log(data);
// 				$('ul#list').html(data.title);
// 					console.log(data.title);

// 			}

// 		});	

// 	});	


// This method allows you to create a new 'to do list'

$.ajax({
		url: 'http://www.kameronzach.com/todo/api/',
		method: 'get',
		data: { action: 'newList', list_id: 60, token: '58097eb3b95a7', title: "List Engine" },
		dataType: 'json',
		success: function(data) {
			$( data.items ).each(function(index, value){
				console.log(value)
				addItem( value.text, value.id )
			});
		}
	});

});






$.ajax({
		url: 'http://www.kameronzach.com/todo/api/',
		method: 'post',
		data:{ action: 'renameList', title: 'things to do today', list_id: 60, token: '58097eb3b95a7'},
		dataType: 'json', 
		success: function(data) {
			console.log('success');
			console.log(data.title);
			$('#toDoTitle').append(data.title);
		}
	});			
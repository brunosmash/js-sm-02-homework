$(document).ready(function(){

	$('input#makeLetter').click(function(){

		// var Adjective = $('input#adjective').val();

		var COMPANY = $('input#company').val();
		var FRIENDSNAME = $('input#friendsName').val();
		var LENGTHOFTIME = $('input#lengthOfTime').val();
		var NOUNS1 = $('input#nouns1').val();
		var OCCUPATION = $('input#occupation').val();
		var NOUN = $('input#noun').val();
		var ADJECTIVE1= $('input#adjective1').val();
		var VERBENDINGINED = $('input#verbEd').val();
		var NOUNS2= $('input#nouns2').val();
		var ADJECTIVE2 = $('input#adjective2').val();
		var ADJECTIVE3 = $('input#adjective3').val();
		var ADJECTIVE4 = $('input#adjective4').val();
		var NAMEOFMOVIE = $('input#nameOfMovie').val();
		var NOUNS3 = $('input#noun3').val();
		var VERBENDINGINING = $('input#verbIng').val();
		var ANIMALS = $('input#animals').val();
		var LENGTHOFTIME2 = $('input#lengthOfTime2').val();
		var ADJECTIVE5 = $('input#adjective5').val();
		var OCCUPATION2 = $('input#occupation2').val();
		var NOUNS3 = $('input#nouns3"').val();
		var ADJECTIVE6 = $('input#adjective6').val();
		var ADVERB1 = $('input#adverb1').val();
		var ADVERB2 = $('input#adverb2').val();
		var ADJECTIVE1 = $('input#adjective7').val();
		var NOUNS5 = $('input#nouns5').val();
		var OCCUPATION3 = $('input#occupation3').val();
		var OCCUPATION4 = $('input#occupation4').val();
		var VERBENDINGINED2 = $('input#verbEd2').val();
		var ADJECTIVE8 = $('input#adjective8').val();
		var NOUN1 = $('input#noun1').val();
		var NOUN2 = $('input#noun2').val();
		var NOUN3 = $('input#noun3').val();
		var ADJECTIVE9 = $('input#adjective9').val();
		var YOURNAME = $('input#yourName').val();
	

		var texts = new Array();

		texts[0] = 	'Dear ' + COMPANY ':';

		texts[1] = FRIENDSNAME + ' worked for me as my assistant for ' + LENGTHOFTIME + '. I recommend her without ' + NOUNS1 + ' for the ' + OCCUPATION + ' program.';

		texts[2] = 'While working in ' + NOUN + ' production, I often relied on ' + FRIENDSNAME + ' to put together ' + ADJECTIVE1 + ' presentations, for which she described and ' + VERBENDINGINED + ' the artistic approach to the project, researching ' + NOUNS2 + ' and photographic ' + ADJECTIVE2 + ' materials. Her creativity, resourcefulness and ability to see a project through really made these presentations ' + ADJECTIVE3 + ' and ' + ADJECTIVE4 + '.';

		texts[3] = 'When we went into production on the feature film ' + NAMEOFMOVIE + ', ' + FRIENDSNAME + ' was able to observe every ' + NOUN3 + ' of the process, ' + VERBENDINGINING + ' in on meetings and working with ' + ANIMALS + ' in all areas of the production from the moment the production was set in motion through the release of the film ' + LENGTHOFTIME2 + ' later.';

		texts[4] = 'During this time, she was an ' + ADJECTIVE5 + ' ' + OCCUPATION2 +', often serving as my liason to scattered ' + NOUNS3 + ' of the crew. She also coordinated projects involving ' + ADJECTIVE6 + ' people, and her ability to work ' + ADVERB1 + ' while guiding the project quickly and ' +  ADVERB2 + ' was ' + ADJECTIVE7 +'. For example, when we suddenly needed to reconceive several action ' + NOUN5 + ' that had already been storyboarded, ' + FRIENDSNAME + ' quickly found a new storyboard ' + OCCUPATION3 + ' on location and worked with him, the stunt coordinator and the ' + OCCUPATION4 + ' thorugh several drafts to make sure the new ' + NOUNS5 + ' worked, and then ' + VERBENDINGINED + ' with crew ' + NOUNS3 + ' from all departments, making sure everyone was up-to-date on the changes that were relevant to them. She even ' + VERBENDINGINED2 + ' in to draw a few last-minute ' + ADJECTIVE8 + ' changes herself.';

		texts[5] = FRIENDSNAME + 's sensitivity, ' + NOUN1 + ', energy and sense of ' + NOUN2 + ' made working with her a/an ' + NOUN3 +'. I highly recommend her as a/an ' + ADJECTIVE9 + ' addition to the program.';

		texts[6] = 'Sincerely,';

		texts[7] = YOURNAME;

		
		$(texts).each(function(index, text){

			$('div.output').append('<p>' + text + '</p>');

		});

	});


});
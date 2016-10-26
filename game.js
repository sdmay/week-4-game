// Crystal Array,
crystals = ["images/sapphire.jpg", "images/amethyst.jpg", "images/ruby.png", "images/opal.jpg"];

var score = 0;
var wins = 0;
var loss = 0;
var randomNumber = [];


$('.win').html(wins)
$('.loss').html(loss)

// Generate score to match


function numberToMatch(){
	var match = Math.floor((Math.random() * 100) + 1);
	$(".match").html(match);
	for (var i = 0; i < match.length; i++) {
		match[i]
	}
}

$(document).on("click", ".scorebox", numberToMatch);

// Generate random numbers for gem clicks

function gemNumbers(){
	var gem = Math.floor((Math.random() * 40) + 1);
	$(".score").html("<h2>Your number: " + gem + "</h2>");



	console.log(gem);

	if(gem === numberToMatch){
		wins++
		$(".match").empty()
		$(".score").empty()
}

else if(gem > numberToMatch){
	loss++
	$(".match").empty()
	$(".score").empty()
}


}



$(document).on("click", ".gem", gemNumbers);

























// function newCrystals () {
// 		var numbers = []
// 			while(numbers.length < 4){
// 			  var randomnumber = Math.ceil(Math.random()*12)
// 			  var found = false;
// 			  for (var i=0; i< numbers.length; i++){
// 				if (numbers[i] == randomnumber){
// 					found = true; break
// 				}
// 			  }
// 			  if(!found)numbers[numbers.length]=randomnumber;
// 			}
// 		console.log(numbers);		

// 		for (i = 0; i < numbers.length; i++) {
// 			var imageCrystal = $('<img>');
// 			imageCrystal.attr('data-num', numbers[i]);
// 			imageCrystal.attr('src', crystals[i]);
// 			imageCrystal.attr('alt', 'crystals');
// 			imageCrystal.addClass('crystalImage')
// 			$('#crystals').append(imageCrystal);
// 		}
// 	}

// 	function newGame() {

// 		counter = 0;
// 		$('.score').html(counter);

// 		function madUpNumber(){
// 		   	return Math.floor(Math.random()*(max-min+1)+min);
// 			}

// 		var numberToGuess = randomIntFromInterval(19,120);

// 		$('.match').html(numberToGuess);


// 		$('.gem').on('click', function(){
// 		    counter = counter + parseInt($(this).data('num'));
		   
// 		    $('#yourScore').html(counter);

// 		    if (counter === numberToGuess){
// 		      $('#status').html('You won!!!!');
// 		      wins ++;
// 		      $('#win').html(wins);
// 		      console.log(wins)
// 		      $('.gem').empty();
// 		      newCrystals();
// 		      newGame();
		        
// 		    } else if ( counter > numberToGuess){
// 		        $('#status').html('You lost!')
// 		        losses ++;
// 		        $('.loss').html(losses);
// 		        console.log(losses)
// 		        $('.gem').empty();
// 		        newCrystals();
// 		        newGame();
// 		    }





// 		});

// 	}




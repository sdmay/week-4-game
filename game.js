// Crystal Array,
crystals = ["images/sapphire.jpg", "images/amethyst.jpg", "images/ruby.png", "images/opal.jpg"];

var match = 0;
var score = 0;
var win = 0;
var loss = 0;
var randomNumber = [];


$('.win').html(win)
$('.loss').html(loss)

	function newGame() {

		counter = 0;
		$('.score').text(counter);

		function madUpNumber(){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randomIntFromInterval(19,120);

		$('.match').text(numberToGuess);


		$('.gem').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);

		    if (counter == numberToGuess){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('.gem').empty();
		      newCrystals();
		      newGame();
		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('.loss').text(losses);
		        console.log(losses)
		        $('.gem').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

};



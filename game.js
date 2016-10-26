// Crystal Array,
var crystals = ["images/sapphire.jpg", "images/amethyst.jpg", "images/ruby.png", "images/opal.jpg"];

var score = 0;
var wins = [0];
var loss = 0;
var counter = 0;
var randomNumber = [];




// Generate score to match


function numberToMatch(){
	
		var match = Math.floor((Math.random() * 120) + 1);
		$(".match").html(match);
	
}

$(document).on("click", ".scorebox", numberToMatch);

// Generate random numbers for gem clicks

function gemNumbers(){
	
	var gem = Math.floor((Math.random() * 12) + 1);
	$(".score").html("<h2>Your number: " + gem + "</h2>");

	console.log(gem);

}

// If statement attempting to propogate wins/loss

$('.gem').on('click', function(){
     var counter = counter + parseInt($(this).data('num'));
 })

	if(counter === numberToMatch){
		wins++
		$('.win').html(wins)
		$(".match").empty()
		$(".score").empty()
}

	else if(counter > numberToMatch){
		loss++

		$('.loss').html(loss)
		$(".match").empty()
		$(".score").empty()
}

$(document).on("click", ".gem", gemNumbers)





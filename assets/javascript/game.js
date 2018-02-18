// Starting this off by listing needed variables



//below will be functions, if/else statements, and additional variables/attributes
$(document).ready(function() {  //game will start when the document is ready
//random number displayed, score keeper, wins/losses, crystals, win/lose message all need variables
var random;
var wins = 0;
var losses = 0;
var pine;
var avo;
var straw;
var ber;
var currentScore = 0;

//random number generator. i'll have to reference it later as well so the number changes once a win/lose occurs
	random = Math.floor(Math.random() * (101) + 19);
	$("#randomNumber").text(random);


//okay, I'll need a random number generator for each fruit
	pine = Math.floor(Math.random() * (12));

	avo = Math.floor(Math.random() * (12));
	
	straw = Math.floor(Math.random() * (12));

	ber = Math.floor(Math.random() * (12));
	

//establishing on click events
$("#pineapple").on("click", callbackPine);

$("#avocado").on("click", callbackAvo);

$("#strawberry").on("click", callbackStraw);

$("#berry").on("click", callbackBer);



//

















})
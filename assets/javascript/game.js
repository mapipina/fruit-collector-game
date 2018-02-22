// Starting this off by listing needed variables(in doc function). 

//have to create function for tallying up score
/*var tally = function (){
	if (currentScore === random) {
		wins++;
		$("#hidden").text("You win!")
		$("winsCounter").text(wins);
	} 
	else if (currentScore > random) {
		losses++;
		$("#hidden").text("You lose!")
	} 
	else if {
		$("#hidden").text(" ")
	} 
}; */



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
	var youWin = "You win!";
	var youLose = "You lose!"

//random number generator. i'll have to reference it later as well so the number changes once a win/lose occurs
	random = Math.floor(Math.random() * (102) + 19);
	$("#randomNumber").text(random);


//okay, I'll need a random number generator for each fruit
	pine = Math.floor(Math.random() * (12) +1);
	avo = Math.floor(Math.random() * (12) +1);	
	straw = Math.floor(Math.random() * (12) +1);
	ber = Math.floor(Math.random() * (12) +1);


//now I need to define current score... which will be tricky bc all of my callbacks go to the score counter already.
// definitely need a mathematical function. won't worry about if/else just yet
//	currentScore = function () {};

// the game needs to know to reset

var reset = function () {
	currentScore = 0;
	$("#scoreCounter").text(currentScore);
// I'm redefining these variables in an attempt to change the number
	random = Math.floor(Math.random() * (102) + 19);
	$("#randomNumber").text(random);
	pine = Math.floor(Math.random() * (12) +1);
	avo = Math.floor(Math.random() * (12) +1);	
	straw = Math.floor(Math.random() * (12) +1);
	ber = Math.floor(Math.random() * (12) +1);
};

//have to create function for tallying up score
var tally = function (){
	if (currentScore === random) {
		wins++;
		$("#hidden").text(youWin);
		$("#winsCounter").text(wins);
		reset ();
		console.log(currentScore);
	} 
	else if (currentScore > random) {
		losses++;
		$("#hidden").text(youLose);
		$("#lossCounter").text(losses);
		reset ();
		console.log(currentScore);
	} 
	else if (currentScore < random) {
		$("#hidden").text(" ")
		console.log(currentScore);
	} 
};

// defining the callbacks that are needed for the click events
var callbackPine = function () {
	currentScore = currentScore + pine;
	$("#scoreCounter").text(currentScore);
	tally ();

};

var callbackAvo = function () {
	currentScore = currentScore + avo;
	$("#scoreCounter").text(currentScore);
	tally ();

};

var callbackStraw = function () {
	currentScore = currentScore + straw;
	$("#scoreCounter").text(currentScore);
	tally ();

};

var callbackBer = function () {
	currentScore = currentScore + ber;
	$("#scoreCounter").text(currentScore);
	tally ();
};



//establishing on click events
$("#pineapple").on("click", callbackPine);

$("#avocado").on("click", callbackAvo);

$("#strawberry").on("click", callbackStraw);

$("#berry").on("click", callbackBer);


});
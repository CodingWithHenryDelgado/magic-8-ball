$("document").ready(function(){
	
$("#answer").hide();
	
var magic8Ball = {};

magic8Ball.listOfAnswers = ["It is certain.","It is decidedly so.", "Without a doubt.","Yes – definitely.","You may rely on it","As I see it, Yes.","Most likely.", "Outlook good.", "Yes.,Signs point to yes.","Reply hazy try again.", "Ask again later.", "Better not tell you now.","Cannot predict now.,Concentrate and ask again.","Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."];

magic8Ball.askQuestion = function() {	
	$("#8ball").attr("src",	"https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	
 	$("#answer").fadeIn(4000);
	
	var randomNumber = Math.random();
 
	var randomNumberArray = randomNumber * this.listOfAnswers.length;
 
	var randomIndex = Math.floor(randomNumberArray);
 
	var answer = this.listOfAnswers[randomIndex];

	$("#answer").text(answer);
};

var onClick = function() {
	$("#8ball").effect("shake");
 	$("#answer").hide();
	setTimeout(function(){
		var question = prompt("ASK A YES/NO QUESTION!");
		 magic8Ball.askQuestion(question);
	}, 500);
};
	
$("#questionButton").click(onClick);


/*magic8Ball.askQuestion("Will this work?");*/
});
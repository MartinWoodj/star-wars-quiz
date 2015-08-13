$(document).ready(function() {
	function Questions (question, choice1, choice2, choice3, choice4, correctAnswer) {
		this.question = question;
		this.choice1 = choice1;
		this.choice2 = choice2;
		this.choice3 = choice3;
		this.choice4 = choice4;
		this.correctAnswer = correctAnswer;
	}
	
	var questionNumber = 0

/*--- These are all of the questions ---*/

	var questions = [];
	questions[0] = new Questions("What are the 2 opposing sides?", "Jedi + Sith", "Sith + Galactic Empire", "Jedi + Rebel Alliance", "Sith + Mandalorians", "a1");
	questions[1] = new Questions("What Star Wars movie was released first?", "Star Wars: The Clone Wars", "Star Wars: Return of the Jedi", "Star Wars: A New Hope", "Star Wars: Phantom Menace", "a3");
	questions[2] = new Questions("What was the weapon seen most in Star Wars II?", "Jetpacks", "Lightsabers", "Rocket launchers", "Blaster", "a2");
	questions[3] = new Questions("Who fought Obi-Wan Kenobi in Star Wars III?", "Mace Windu", "Anakin Skywalker", "Leia Ogana", "Ben Kenobi", "a2");
	questions[4] = new Questions("Who was Darth Vader?", "Luke Skywalker", "Anakin Skywalker", "Count Dooku", "Jacen Solo", "a2");
	questions[5] = new Questions("Who killed Darth Sidious?", "Darth Vader", "Mace Windu", "Luke Skywalker", "Yoda", "a1");	
	questions[6] = new Questions("What color wasn't used with a lightsaber?", "Blue", "Red", "Purple", "Orange", "a4");
	questions[7] = new Questions("Who was the New Hope", "Ben Kenobi", "Yoda", "Han Solo", "Luke Skywalker", "a4");
	questions[8] = new Questions("Who was Luke Skywalker's sibling?", "Yoda", "Leia Organa", "Han Solo", "Anakin Skywalker", "a2");
	questions[9] = new Questions("Who was fluent in over 6 million languages?", "Chewbacca", "R2-D2", "C3-PO", "Yoda", "a3");

		
/*--- Clicking the Start button generates the first question ---*/
	$(".startQuiz").click(function(){
		console.log("START BUTTON CLICKED");
		
		
/*--- Get each question from above and display it on the page with a radio button ---*/
		document.getElementById('questions').innerHTML = questions[questionNumber].question + '<br/>' + '<input type="radio" name="quiz" value="a1" id="a1">' + questions[questionNumber].choice1 + '<br/>' + '<input type="radio" name="quiz" value="a2" id="a2">' + questions[questionNumber].choice2 + '<br/>' + '<input type="radio" name="quiz" value="a3" id="a3">' + questions[questionNumber].choice3 + '<br/>' + '<input type="radio" name="quiz" value="a4" id="a4">' + questions[questionNumber].choice4 + '<br/>';
	
	
	});

/*--- Console.log when a submit button is clicked ---*/
	$(".submitButton").click(function(){
		console.log("SUBMIT BUTTON CLICKED!")
		console.log($('input[name=quiz]:checked', '#questions').val());
		var userGuess = $('input[name=quiz]:checked', '#questions').val();
				console.log(questions[questionNumber].correctAnswer)
			if(userGuess == questions[questionNumber].correctAnswer){
				console.log("You are correct!");
			}
			else {
				console.log("This is not correct!");
			}
			
	});


	$(".nextQuestion").click(function(){
		console.log("NEXT BUTTON CLICKED!");
		questionNumber = questionNumber + 1;
		document.getElementById('questions').innerHTML = questions[questionNumber].question + '<br/>' + '<input type="radio" name="quiz" value="a1" id="a1">' + questions[questionNumber].choice1 + '<br/>' + '<input type="radio" name="quiz" value="a2" id="a2">' + questions[questionNumber].choice2 + '<br/>' + '<input type="radio" name="quiz" value="a3" id="a3">' + questions[questionNumber].choice3 + '<br/>' + '<input type="radio" name="quiz" value="a4" id="a4">' + questions[questionNumber].choice4 + '<br/>';
		console.log(questions[questionNumber]);
	});


		

	
/*--- Identify the correct answer radio button ---*/
/*--- Compare the correct answer with answer chosen  ---*/
});


	
		













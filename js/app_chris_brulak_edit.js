$(document).ready(function(){
	$(".resetButton").click(function(){
		location.reload(true);
	});
	$(".startQuiz").click(function() {
  createQuestion(questions);
});

	function getQuestions()	 {
		var score = [];
		var questions = [{
			q: "What are the 2 opposing sides?",
			s: ["Jedi + Sith", "Sith + Galactic Empire", "Jedi + Rebel Alliance", "Sith + Mandalorians"],
			a: "Jedi + Sith",
			correct: 0
		}, {
			q: "What Star Wars movie was released first?"
			s: ["Star Wars: The Clone Wars", "Star Wars: Return of the Jedi", "Star Wars: A New Hope", "Star Wars: Phantom Menace"],
			a: "Star Wars: A New Hope",
			correct: 0
		}, {
			q: "What was the weapon seen most in Star Wars II?",
			s: ["Jetpacks", "Lightsabers", "Rocket launchers", "Blaster"],
			a: "Lightsabers",
			correct: 0
		}, {
			q: "Who fought Obi-Wan Kenobi in Star Wars III?",
			s: ["Mace Windu", "Anakin Skywalker", "Leia Ogana", "Ben Kenobi"],
			a: "Anakin Skywalker",
			correct: 0
		}, {
			q: "Who was Darth Vader?",
			s: ["Luke Skywalker", "Anakin Skywalker", "Count Dooku", "Jacen Solo"],
			a: "Anakin Skywalker",
			correct: 0
		}, {
			q: "Who killed Darth Sidious?",
			s: ["Darth Vader", "Mace Windu", "Luke Skywalker", "Yoda"],
			a: "Darth Vader",
			correct: 0
		}, {
			q: "What color wasn't used with a lightsaber?",
			s: ["Blue", "Red", "Purple", "Green", "Pink"],
			a: "Pink",
			correct: 0
		}, {
			q: "Who was the New Hope",
			s: ["Ben Kenobi", "Yoda", "Han Solo", "Luke Skywalker"],
			a: "Luke Skywalker",
			correct: 0
		}, {
			q: "Who was Luke Skywalker's sibling?",
			s: ["Yoda", "Leia Organa", "Han Solo", "Anakin Skywalker"],
			a: "Leia Organa",
			correct: 0
		}, {
			q: "Who was fluent in over 6 million languages?",
			s: ["Chewbacca", "R2-D2", "C3-PO", "Yoda"],
			a: "C3-PO",
			correct: 0
		}];
		return getQuestions;
	};
		var counter = questions.length;
		    
		// Gets the questions and answers from the questions array and appends it to the #questions div.
		function createQuestion(questions){
			for(var i=0; i < questions.length; i++) {
				$(".startQuiz").hide();
				$("#questions").append('<form id="' + i + '"<h3 class="questions">' + questions[i].q + '</h3>' + radioButtons(questions[i].s, i) + '<button type="submit" class="next">NEXT &#8594;</button></p></form>');
			}
			//Hides the questions except the first one
			
		}
		createQuestion(questions);
});







































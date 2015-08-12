$(document).ready(function(){
	$(".resetButton").click(function(){
		location.reload(true);
});
	$(".startQuiz").click(function() {

	function questions() {
		var score = [];
		var questions = [{
			q: "What are the 2 opposing sides?",
			s: ["Jedi + Sith", "Sith + Galactic Empire", "Jedi + Rebel Alliance", "Sith + Mandalorians"],
			a: "Jedi + Sith",
			correct: 0
		}, {
			q: "What Star Wars movie was released first?",
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

		var counter = questions.length;
		    
		// Gets the questions and answers from the questions array and appends it to the #questions div.
		function createQuestion(questions){
			for(var i=0; i < questions.length; i++) {
				$(".startQuiz").hide();
				$("#questions").append('<form id="' + i + '"<h3 class="questions">' + questions[i].q + '</h3>' + radioButtons(questions[i].s, i) + '<button type="submit" class="next">NEXT &#8594;</button></p></form>');
			}
			//Hides the questions except the first one
			for (var questionHide = questions.length -1; questionHide > 0; questionHide--) {
				$('#' + questionHide).hide();
			}
		}
		// Gets answer choices from questions array and returns them to createQuestion().
		function radioButtons(ary, qNum) {
			var answers = [];
			for (i = 0; i < ary.length; i++) {
				answers.push('<label><imput type="radio" name="' + qNum + '" value="' + ary[i] + '">' + ary[i] + '</label>');
			}
			return answers.join(" ");
		}
		
		//Sums the correct values in the questions array.
		function sumScore(questions) {
			return score.reduce(function (previousValue, currentValue, index, array) {
				return previosValue + currentValue;
			});
		}
		
		//Checks the user's answer and updates the score
		function checkAnswer(answer, qNum, questions) {
			if (answer == questions [qNum].a) {
				questions [qNum].correct = 1;
				score.push(questions [qNum].correct);
			} else {
				score.push(questions [qNum].correct);
			}
		}
		
		createQuestion(questions);

		$(".next").click(function (event) {
            event.preventDefault(); //This stops the form from submitting
            var qNum = $(this).closest("form").attr("id"); //This gives us the question number
            var userInput = $('input[name=' + qNum + ']:radio:checked').val(); //This grabs the user's selected answer
            if (counter > 1) {
                checkAnswer(userInput, qNum, questions);
                $("#" + qNum).hide();
                $("#" + qNum).next().show();
                counter--;
            } else if (counter == 1) {
                checkAnswer(userInput, qNum, questions);
                $("#questions").find("form").remove();
                $("#questions").append('<h3 class="result"></h3>');
                $(".result").text('You answered ' + sumScore(questions) + ' questions correctly out of 10.');
                   for (j = 0; j < score.length; j++) {
                        if (score[j] === 0) {
                            console.log(questions[j].q, questions[j].a);
                            $("#questions").append('<p class="missed-' + j + '">You missed: ' + questions[j].q + ' ' + questions[j].a + '</p>');      
                        }
                    }
            } else {
                return false;
            }
        });
    }
	});
});
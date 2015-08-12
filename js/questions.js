function quizConstructor(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
	this.correctAnswer = correctAnswer;
}

var q1 = new quizConstructor("What are the 2 opposing sides?", ["Jedi + Sith", "Sith + Galactic Empire", "Jedi + Rebel Alliance", "Sith + Mandalorians"], "Jedi + Sith");

var q2 = new quizConstructor("What Star Wars movie was released first?", ["Star Wars: The Clone Wars", "Star Wars: Return of the Jedi", "Star Wars: A New Hope", "Star Wars: Phantom Menace"], "Star Wars: A New Hope");

var q3 = new quizConstructor("What was the weapon seen most in Star Wars II?", ["Jetpacks", "Lightsabers", "Rocket launchers", "Blaster"], "Lightsabers");

var q4 = new quizConstructor("Who fought Obi-Wan Kenobi in Star Wars III?", ["Mace Windu", "Anakin Skywalker", "Leia Ogana", "Ben Kenobi"], "Anakin Skywalker");

var q5 = new quizConstructor("Who was Darth Vader?", ["Luke Skywalker", "Anakin Skywalker", "Count Dooku", "Jacen Solo"], "Anakin Skywalker");

var q6 = new quizConstructor("Who killed Darth Sidious?", ["Darth Vader", "Mace Windu", "Luke Skywalker", "Yoda"], "Darth Vader");	

var q7 = new quizConstructor("What color wasn't used with a lightsaber?", ["Blue", "Red", "Purple", "Green", "Pink"], "Pink");

var q8 = new quizConstructor("Who was the New Hope", ["Ben Kenobi", "Yoda", "Han Solo", "Luke Skywalker"], "Luke Skywalker");

var q9 = new quizConstructor("Who was Luke Skywalker's sibling?", ["Yoda", "Leia Organa", "Han Solo", "Anakin Skywalker"], "Leia Organa");

var q10 = new quizConstructor("Who was fluent in over 6 million languages?", ["Chewbacca", "R2-D2", "C3-PO", "Yoda"], "C3-PO");

var allQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
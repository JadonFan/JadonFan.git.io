class MiniGame {
	constructor(isPlaying) {
		this.isPlaying = isPlaying;
	}
}


class Quiz extends MiniGame {
	constructor(questionCount, topic, questions) {
		super(true);
		this.questionCount = questionCount;
		this.topic = topic;
		this.questions = questions;
	}


	get getTopic() {
		return this.topic;
	}


	set setTopic(topic) {
		this.topic = topic;
	}


	static nextQuestionIndex() {
		return Math.floor((Math.random() * 3) + 1);
	}


	chooseRelevantQuestions() {
		try {
			console.log("Hello");
		} catch (e) {
			throw "Did you remember to set the questions for the class first?";
		}
	}


	// currQuestionIndex is the index of the current question in the this.questions array
	// userAnswer is the user's input 
	playQuestion(currQuestionIndex, userAnswer, score) {
		try {
			return (this.questions[currQuestionIndex].answer == userAnswer) ? score + 1 : score;
		} catch (e) {
			throw "Did you remember to set the questions for the class first?";
		}
	}
}
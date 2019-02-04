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
			var random = 1;
		} catch (e) {
			throw "Did you remember to set the questions for the class first?";
		}
	}


	// currQuestionIndex is the index of the current question in the this.questions array
	// userAnswer is the user's input 
	playQuestion(currQuestionIndex, score, userAnswer) {
		try {
			if (typeof userAnswer === "number" || typeof userAnswer === "string" || userAnswer instanceof String) {
				return (this.questions[currQuestionIndex].answer == userAnswer) ? score + 1 : score;
			} else {
				console.log("The user's answer is neither a number or string!");
			}
		} catch (e) {
			throw "Did you remember to set the questions for the class first?";
		} finally {
			return null;
		} 
	}
}
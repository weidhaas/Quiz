// variable for your questions (array of question objects)
const questions = [
	{
		title: "What is the name of a popular online repository storage of code:",
		choices: [
                'hhub',
                'github',
                'ghub',
                "blub"
            ],
		answer: 'github',
	},
	{
		title: "What is the best practice in coding regarding comments:", 
		choices: ['Pleave comments before every function', 'leave comments only when the coder feels like it', 'leave comments sparsely', 'leave comments wherever helpful to direct anyone looking at the code'],
		answer: 'Pleave comments wherever helpful to direct anyone looking at the code',
	},
	{
		title: "What is the name of the command center for Macs:",
		choices: ['terminal', 'terminal c', 'terminal a', 'terminal b'],
		answer: 'terminal',
	},
	{
		title: "What is the command in terminal to create a new folder:",
		choices: ['mk dir', 'mkdir', 'nw fld', 'nwfld'],
		answer: 'mkdir',
	},
];

// variables to keep track of quiz state
// current question index should probably be global
let currentQuestionIndex = 0;

// total time (score)
let time = questions.length * 15;
let timerId;

// variables to reference DOM elements
const questionsEl = document.getElementById('questions');
const timerEl = document.getElementById('time');
const choicesEl = document.getElementById('choices');
const submitBtn = document.getElementById('submit');
const startBtn = document.getElementById('start');
const initialsEl = document.getElementById('initials');
const feedbackEl = document.getElementById('feedback');

function startQuiz() {
	// hide start screen
	const startScreenEl = document.getElementById('start-screen');
	startScreenEl.setAttribute('class', 'hide');

	// un-hide questions section
	questionsEl.removeAttribute('class');

	// start timer
	timerId = setInterval(clockTick, 1000);

	// show starting time
	timerEl.textContent = time;

	// get first question
	getQuestion();
}

function getQuestion() {
	// get current question object from array
	let currentQuestion = questions[currentQuestionIndex];

	// update title with current question
	const titleEl = document.getElementById('question-title');
	titleEl.textContent = currentQuestion.title;

	// clear out any old question choices
	choicesEl.innerHTML = '';

	// loop over choices
	for (let i = 0; i < currentQuestion.choices.length; i++) {
		// create new button for each choice
		let choice = currentQuestion.choices[i];
		let choiceNode = document.createElement('button');
		choiceNode.setAttribute('class', 'choice');
		choiceNode.setAttribute('value', choice);

		choiceNode.textContent = choice;

		// display on the page
		choicesEl.appendChild(choiceNode);
	}
}

function questionClick(event) {
	let buttonEl = event.target;

	// if the clicked element is not a choice button, do nothing.
	if (!buttonEl.matches('.choice')) {
		return;
	}

	// check if user guessed wrong
	if (buttonEl.value !== questions[currentQuestionIndex].answer) {
		// penalize time
		time -= 15;

		// show feedback
		if (time < 0) {
			// no such thing as negative time....
			time = 0;
		}

		// display new time on page
		timerEl.textContent = time;

		feedbackEl.textContent = 'Wrong!';
	} else {
		feedbackEl.textContent = 'Correct!';
	}

	// flash right/wrong feedback on page for half a second
	feedbackEl.setAttribute('class', 'feedback');
	setTimeout(function () {
		feedbackEl.setAttribute('class', 'feedback hide');
	}, 500);

	// move to next question
	currentQuestionIndex++;

	// check if we've run out of questions
	if (time <= 0 || currentQuestionIndex === questions.length) {
		quizEnd();
	} else {
		getQuestion();
	}
}

function quizEnd() {
	// stop timer
	clearInterval(timerId);

	// show end screen
	const endScreenEl = document.getElementById('end-screen');
	endScreenEl.removeAttribute('class');

	// show final score
	const finalScoreEl = document.getElementById('final-score');
	finalScoreEl.textContent = time;

	// hide questions section
	questionsEl.setAttribute('class', 'hide');
}

function clockTick() {
	// update time
	time--;
	timerEl.textContent = time;

	// check if user ran out of time
	if (time <= 0) {
		quizEnd();
	}
}

// user clicks button to start quiz
startBtn.onclick = startQuiz;

// user clicks on element containing choices
choicesEl.onclick = questionClick;



var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startGame);
var nextBtn = document.getElementById("next-btn");
var timerEl = document.getElementById("timerEl");
var scoreEl = document.getElementById("scoreEl");
var questionContainer = document.getElementById("question-container");
var questionText = document.getElementById("question-text");
var answerButtonsContainer = document.getElementById("answer-buttons");
var submitForm = document.getElementById("submit-form");
submitForm.addEventListener("submit", saveScore);
var endPage = document.getElementById("end-game");

var questions = [
  {
    text: "What is Jude's favorite color?",
    answers: {
      a: "blue",
      b: "green",
      c: "purple",
      d: "red",
    },
    correctAnswer: "c",
  },
  {
    text: "Which one of the following is not one of my children's names?",
    answers: {
      a: "Sam",
      b: "Atias",
      c: "Soleia",
      d: "Kanin",
    },
    correctAnswer: "a",
  },
  {
    text: "Is it sunny today?",
    answers: {
      a: "yes",
      b: "no",
      c: "maybe",
      d: "probably",
    },
    correctAnswer: "d",
  },
];

//Game Variables
var score = 0;
var secondsRemaining = 30;
var timer;
var currentQuestionIndex = 0;

function startGame() {
  console.log("start the game");
  // hide the startBtn
  startBtn.classList.add("hide");
  //show the next btn
  //populate timer el with text content seconds remaining
  timerEl.textContent = `time left: ${secondsRemaining}`;
  //unhide the timer
  timerEl.classList.remove("hide");
  //populate scoreEl with score
  scoreEl.textContent = `Score: ${score}`;
  //show the score
  scoreEl.classList.remove("hide");
  //show question contaner
  questionContainer.classList.remove("hide");
  // start timer
  timer = setInterval(function () {
    secondsRemaining--;
    timerEl.textContent = `time left: ${secondsRemaining}`;

    //check if out of time, end the GAme
    if (secondsRemaining <= 0) {
      endGame();
    }
  }, 1000);

  //display first question
  displayQuestion();
}

function displayQuestion() {
  questionText.innerText = questions[currentQuestionIndex].text;

  //loop over the current Questions' answers and generate a button for each one

  var theseAnswers = questions[currentQuestionIndex].answers;

  answerButtonsContainer.innerHTML = "";

  for (var answer in theseAnswers) {
    var answerBtn = document.createElement("button");
    answerBtn.innerText = theseAnswers[answer];
    answerBtn.dataset.bloop = answer;
    answerBtn.addEventListener("click", evaluateAnswer);
    answerButtonsContainer.appendChild(answerBtn);
  }
}

function evaluateAnswer(e) {
  //evaluate if right or wrong
  if (
    e.target.dataset.bloop === questions[currentQuestionIndex].correctAnswer
  ) {
    //add 10 points
    score += 10;
    scoreEl.textContent = `Score: ${score}`;
  } else {
    score -= 10;
    scoreEl.textContent = `Score: ${score}`;
    secondsRemaining -= 5;
    timerEl.textContent = `time left: ${secondsRemaining}`;

    if (secondsRemaining <= 0) {
      endGame();
    }
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else endGame();
}

function endGame() {
  clearInterval(timer);
  endPage.classList.remove("hide");
  questionContainer.classList.add("hide");
}

function saveScore(e) {
  e.preventDefault();
  var arrayToSave = [];
  if (localStorage.getItem("quiz-scores")) {
    arrayToSave = JSON.parse(localStorage.getItem("quiz-scores"));
  }
  var newScore = { username: e.target.children[0].value, score };
  arrayToSave.push(newScore);
  localStorage.setItem("quiz-scores", JSON.stringify(arrayToSave));
}

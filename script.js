var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var timerEl = document.getElementById("timerEl");
var scoreEl = document.getElementById("scoreEl");
startBtn.addEventListener("click", startGame);

//Game Variables
var score = 0;
var secondsRemaining = 5;

function startGame() {
  console.log("start the game");
  // hide the startBtn
  startBtn.classList.add("hide");
  //show the next btn
  nextBtn.classList.remove("hide");
  //populate timer el with text content seconds remaining
  timerEl.textContent = `time left: ${secondsRemaining}`;
  //unhide the timer
  timerEl.classList.remove("hide");
  //populate scoreEl with score
  scoreEl.textContent = `Score: ${score}`;
  //show the score
  scoreEl.classList.remove("hide");
  // start timer
  //display first question
}

// const nextBtn = document.getElementById("nextBtn");

// const questionContainerElement = document.getElementById("question-container");
// const qustionElement = document.getElementById("question");
// const answerBtnElement = document.getElementById("answer-buttons");

// let shuffledQuestions, currentQuestionIndex;
// let quizScore = 0;

//
// nextButton.addEventListener("click", () => {
//   currentQuestionIndex++;
//   setNextQuestion();
// });

// function setNextQuestion() {
//   resetState();
//   showQuestion(shuffledQuestions[currentQuestionIndex]);
// }

// function startGame() {
//   startButton.classList.add("hide");
//   shuffledQuestions = questions.sort(() => Math.random() - 0.5);
//   currentQuestionIndex = 0;
//   questionContainerElement.classList.remove("hide");
//   setNextQuestion();
//   quizScore = 0;
// }

// function showQuestion(question) {
//   questionElement.innerText = question.question;
//   question.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerText = answer.text;
//     button.classList.add("btn");
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//     answersButtonElement.appendChild(button);
//   });
// }

// function resetState() {
//   clearStatusClass(document.body);
//   nextButton.classList.add("hide");
//   while (answerBtnElement.firstChild) {
//     answerBtnElement.removeChild(answerBtnElement.firstChild);
//   }
// }

// function selectAnswer(e) {
//   const selectedButton = e.target;
//   const correct = selectedButton.dataset.correct;

//   setStatusClass = (document.body, correct);
//   Array.from(answersButtonElement.children).forEach((button) => {
//     setStatusClass(button, button.dataset.correct);
//   });
//   if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove("hide");
//   } else {
//     startButton.innerText = "restart";
//     startButton.classList.remove("hide");
//   }
//   if ((selectedButton.dataset = correct)) {
//     quizScore++;
//   }
//   document.getElementById("right-answers").innerText = quizScore;
// }

// function setStatusClass(element, correct) {
//   clearStatusClass(element);
//   if (correct) {
//     element.classList.add("correct");
//   } else {
//     element.classList.add("wrong");
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove("correct");
//   element.classList.remove("wrong");
// }

// const questions = [
//   {
//     question: "which one of these is a Javascript framework?",
//     answers: [
//       { text: "Python", correct: false },
//       { text: "Django", correct: false },
//       { text: "React", correct: true },
//       { text: "Eclispe", correct: false },
//     ],
//   },
//   {
//     question: "who is the prime minster of India?",
//     answers: [
//       { text: "Python", correct: false },
//       { text: "Django", correct: false },
//       { text: "React", correct: true },
//       { text: "Eclispe", correct: false },
//     ],
//   },
//   {
//     question: "which one of these is a Javascript framework?",
//     answers: [
//       { text: "Python", correct: false },
//       { text: "Django", correct: false },
//       { text: "React", correct: true },
//       { text: "Eclispe", correct: false },
//     ],
//   },

//   {
//     question: "which one of these is a Javascript framework?",
//     answers: [
//       { text: "Python", correct: false },
//       { text: "Django", correct: false },
//       { text: "React", correct: true },
//       { text: "Eclispe", correct: false },
//     ],
//   },
// ];

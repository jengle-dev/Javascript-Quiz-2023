var mainPage = document.getElementById("mainLoad");
// const quizCard = document.getElementById("quizCard");
var quizQuestion = document.getElementById("questionText");
var answerBtns = document.getElementById("answerBtn");
var timer = document.getElementsByClassName("timer");

// invoke shuffled questions function
let shuffledQuestions, currentQuestionIndex;

// at click of start button - timer begins
// countdown function from Algorithms Folder in Module 4
// quiz is over when timer reaches 0 or all questions are answered
var countdown = function (num) {
    for (var i = num; i > 0; i--) {
        console.log(i);
    }
};

// load question & // when answer chosen, the next question appears
const setNextQuestion = () => {
    // randomize questions from questions.js array
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    displayQuestion();
};

resetState = () => {
    // needs to reset the page
    // make it so click event can happen again on the next question
    const questionElement = document.getElementById("question");
    questionElement.innerText = "";

    const answerElements = document.querySelectorAll(".answer");
    answerElements.forEach((answerElement) => {
        answerElement.innerText = "";
        answerElement.removeEventListener("click", handleAnswerClick);
    });
};

//Future Dev: display question number of total questions and/or progress bar - This is not working currently
// function ProgressBar({ current, total }) {
//     const percentage = (current / total) * 100;

//     return (
//       <div className="progress-bar">
//         <div
//           className="progress-bar__fill"
//           style={{ width: `${percentage}%` }}
//         />
//       </div>
//     );
//   }

// function Quiz() {
//     const { questions, currentQuestionIndex, score } = state;
//     const currentQuestion = questions[currentQuestionIndex];

//     return (
//         <div className="quiz">
//             {/* <ProgressBar current={currentQuestionIndex + 1} total={questions.length} /> */}
//             <div className="question">{currentQuestion.question}</div>
//             <Answers
//                 answers={currentQuestion.answers}
//                 selectedAnswer={state.selectedAnswer}
//                 handleAnswerClick={handleAnswerClick}
//                 isCorrect={state.isCorrect}
//             />
//             <div className="score">Score: {score}</div>
//         </div>
//     );
// }


// answer options from buttons
const answer1 = document.getElementById("btnOne");
const answer2 = document.getElementById("btnTwo");
const answer3 = document.getElementById("btnThree");
const answer4 = document.getElementById("btnFour");

// adding text of questions from questions array
// questionText.innerText = questions[id].question;
function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    quizQuestion.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = answerBtns.querySelector(`#btn${index + 1}`);
        button.textContent = answer.text;
        button.dataset.correct = answer.correct;
      });
    
      // Reset the timer
      timer.textContent = 0;
    
      // Show the question card
      questionCard.style.display = "block";
}

// Handle the user's answer to the current question
const handleAnswerClick = (event) => {
    // get answer from DOM
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    // check that an answer was selected at all
    if (selectedAnswer) {
        const selectedValue = selectedAnswer.value;
        // is the selectedAnswer/selectedValue the correct answer?
        if (selectedValue === correctAnswer) {
            score++;
            showMessage("Correct!");
        } else {
            showMessage("Sorry, that's incorrect.");
        }
        // no answer selected, nothing really happens: Future Dev to prompt after 30 sec.
        //     selectedAnswer.checked = false;
        //   } else {
        //     showMessage("Please select an answer.");

    }
}

function renderQuestion(event) {
    // Get the question card details
    const questionCard = document.getElementById("questionCard");
    const questionTitle = questionCard.querySelector(".card-title");
    const questionText = questionCard.querySelector("#questionText");
    const answerBtns = questionCard.querySelector("#answerBtns");

    // Get the current question and update the html card and buttons with its data
    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = `Question ${currentQuestionIndex + 1}`;
    questionText.textContent = currentQuestion.question;
    currentQuestion.answers.forEach((answer, index) => {
        const button = answerBtns.querySelector(`#btn${index + 1}`);
        button.textContent = answer.text;
        button.dataset.correct = answer.correct;
    });

    // Hide the start button and show the question card
    startBtn.classList.add("hide");
    questionCard.classList.remove("hide");
}

// start button - add event listener
// directions hide and question card displays

function quizStart() {
    const quizCard = document.getElementById("quizCard");
    // hide the main page and show the quiz card
    mainPage.style.display = "none";
    quizCard.style.display = "block";

    // reset the quiz state
    resetState();
    // since resetting quiz state, index begins at zero for questions
    currentQuestionIndex = 0;

    //start dispaying the questions
    displayQuestion();

    // start the countdown timer
    var remainingTime = 60; // 60 seconds
    var countdownInterval = setInterval(function () {
        remainingTime--;
        timer[0].textContent = remainingTime;
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            quizEnd();
        }
    }, 1000);

    // set the next question
    setNextQuestion();
}


quizStart();
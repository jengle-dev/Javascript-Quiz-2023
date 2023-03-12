
var mainPage = document.getElementById("mainLoad");
var quizStart = document.getElementById("startBtn");
var quizCard = document.getElementById("questionCard");
var quizQuestion = document.getElementById("questionText");
var answerBtns = document.getElementById("answerBtn");
var timer = document.getElementsByClassName("timer");

// invoke shuffled questions function
let shuffledQuestions, currentQuestionIndex;

// start button - add event listener
quizStart = addEventListener("click", // directions hide and question card displays
    function startQuiz() {

        console.log("Quiz started.")

        mainPage.classList.add('hide');
        quizCard.classList.remove('hide');

        setNextQuestion();
        countdown();
    });

// at click of start button - timer begins
// countdown function from Algorithms Folder in Module 4
// quiz is over when timer reaches 0 or all questions are answered
var countdown = function (num) {
    for (var i = num; i > 0; i--) {
        console.log(i);
    }
};

// load question & // when answer chosen, the next question appears
setNextQuestion = () => {
    resetState();
    displayQuestion(shuffledQuestions[currentQuestionIndex]);

    // randomize questions from questions.js array
    displayQuestion = (question) => {
        shuffledQuestions = questions.sort(() => Math.random() - .5);
        currentQuestionIndex = 0;
    }

    document.set
    
    .innerText = questions[id].question;
}

resetState = () => {
    // needs to reset the page 
}


// display question number of total questions and/or progress bar

// answer options from buttons
const answer1 = document.getElementById('btnOne');
const answer2 = document.getElementById('btnTwo');
const answer3 = document.getElementById('btnThree');
const answer4 = document.getElementById('btnFour');

// adding text of questions from questions array
questionText.innerText = questions[id].question;

// adding text answers from questions array
btnOne.innerText = questions[id].answers[0].text;
btnTwo.innerText = questions[id].answers[1].text;
btnThree.innerText = questions[id].answers[2].text;
btnFour.innerText = questions[id].answers[3].text;
// if answer chosen is incorrect, time is deducted from the timer as a penalty


// score is saved, initials and score
// view high scores
// retake the quiz

// creating an array and passing the number, questions, options, and answers
const questions = [
    {
        // numb: 1, index: 0
        id: 1,
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Preprocessor", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text Multiple Language", correct: false },
            { text: "Hyper Tool Multi Language", correct: false },
        ]
    },
    {
        // numb: 2, index: 1
        id: 2,
        question: "What does CSS stand for?",
        answers: [
            { text: "Common Style Sheet", correct: false },
            { text: "Colorful Style Sheet", correct: false },
            { text: "Computer Style Sheet", correct: false },
            { text: "Cascading Style Sheet", correct: true }
        ]
    },
    {
        // numb: 3, index: 2
        id: 3,
        question: "What is the operator for 'strict equal to' in JavaScript?",
        answers: [
            { text: "!==", correct: false },
            { text: "===", correct: true },
            { text: "==", correct: false },
            { text: "!=", correct: false },
        ]
    },
    {
        // numb: 4, index: 3
        id: 4,
        question: "What does a 'for' loop instruct the code to do?",
        answers: [
            { text: "Run a condition a specified number of times within an array.", correct: true },
            { text: "The 'for' loop contains the condition outside of the parentheses.", correct: false },
            { text: "Describe to the console what the condition is 'for'.", correct: false },
            { text: "Structured Query Language", correct: false },
        ]
    },
    {
        // numb: 5, index: 4
        id: 5,
        question: "Which of the following objects is the main entry point to all client-side JavaScript features and APIs?",
        answers: [
            { text: "Window", correct: true },
            { text: "Position", correct: false },
            { text: "Document", correct: false },
            { text: "Location", correct: false },
        ]
    },
    {
        // numb: 6, index: 5
        id: 6,
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answers: [
            { text: "It is an ordered list of string.", correct: false },
            { text: "It is an ordered list of functions.", correct: false },
            { text: "It is an ordered list of objects.", correct: false },
            { text: "It is an ordered list of values.", correct: true },
        ]
    },
    {
        // numb: 7, index: 6
        id: 7,
        question: "What is JavaScript?",
        answers: [
            { text: "JavaScript is a scripting language used to make the website interactive.", correct: true },
            { text: "JavaScript is a compiled language used to make the website interactive.", correct: false },
            { text: "JavaScript is an assembly language used to make the website interactive.", correct: false },
            { text: "None of the mentioned.", correct: false },
        ]
    },
    {
        // numb: 8, index: 7
        id: 8,
        question: "Which of the following is correct about JavaScript?",
        answers: [
            { text: "JavaScript is Assembly-language.", correct: false },
            { text: "JavaScript is an Object-Based language.", correct: true },
            { text: "JavaScript is an Object-Oriented language.", correct: false },
            { text: "JavaScript is a High-level language.", correct: false },
        ]
    },
    {
        // numb: 9, index: 8
        id: 9,
        question: "Which of the following is not javascript data types?",
        answers: [
            { text: "All of the mentioned.", correct: true },
            { text: "Null type.", correct: false },
            { text: "Undefined type.", correct: false },
            { text: "Number type.", correct: false },
        ]
    },
    {
        // numb: 10, index: 9
        id: 10,
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        answers: [
            { text: "Preprocessor", correct: false },
            { text: "Function/Method", correct: true },
            { text: "Triggering Event", correct: false },
            { text: "RMI", correct: false },
        ]
    },
];
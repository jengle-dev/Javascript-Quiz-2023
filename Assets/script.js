// Global Variables
var quizRules = document.getElementById('quizRules');

// Buttons Global Variables
var startButton = document.getElementById('startButton');
var exitQuizBtn = document.getElementById('exitBtn');
var restartQuizBtn = document.getElementById('restartBtn');
var nextQuestionBtn = document.getElementById('nextBtn');

// Card Global Variables & Elements
var questionCard = document.getElementById('questionContainer');
var quizQuestionText = document.getElementById('questionText');
var currentQuestionNumber = document.getElementById('questionNumber');

// Answer Buttons
var answerButtonA = document.getElementById('answer-A');
var answerButtonB = document.getElementById('answer-B');
var answerButtonC = document.getElementById('answer-C');
var answerButtonD = document.getElementById('answer-D');

// Timer
// If the timer count down is finished, write some text // used https://codepen.io/TLJens/pen/azedap to help with the logic of the timer countdown
var interval;
// Timer function
function countdownTime() {
    clearInterval(interval);
    interval = setInterval(function () {
        var timer = $('#timerCountdown').html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        $('#timerCountdown').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) clearInterval(interval);
    }, 1000);
}

$('.startTimer').click(function () {
    $('#timerCountdown').text("15:00");
    countdownTime();
    startQuiz();
});

// $('#js-resetTimer').click(function () {
//     $('#timerCountdown').text("15:00");
//     clearInterval(interval);
// });

// If user answers incorrectly, subtract 5 seconds from timer

// Hide instructions upon startBtn click and display timer and question 1 etc.
function startQuiz() {
    quizRules.classList.add('hide');
    startButton.classList.add('hide');
    var quizTimer = document.getElementById('timerDisplay');
    quizTimer.classList.remove('hide');
}

// Answer Buttons - Listen for clicks    
// event.stopPropagation(); //prevents any click running all functions


function refreshPage() {
    window.location.reload();
}
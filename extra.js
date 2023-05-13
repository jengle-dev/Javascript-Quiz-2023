// Define the questions array
const questions = [
    { question: "What is your name?", answers: ["John", "Mary", "Tom"], correctAnswerIndex: 0 },
    { question: "What is your age?", answers: ["20", "30", "40"], correctAnswerIndex: 1 },
    { question: "What is your favorite color?", answers: ["Red", "Green", "Blue"], correctAnswerIndex: 2 }
  ];
  
  let shuffledQuestions, currentQuestionIndex;
  
  // Load the questions and display the first one
  const loadQuestions = () => {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    displayQuestion();
  };
  
  // Display the current question and its answers
  const displayQuestion = () => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    questionElement.innerText = currentQuestion.question;
  
    const answerElements = document.querySelectorAll(".answer");
    answerElements.forEach((answerElement, index) => {
      answerElement.innerText = currentQuestion.answers[index];
      answerElement.removeEventListener("click", handleAnswerClick);
      answerElement.addEventListener("click", handleAnswerClick);
    });
  };
  
  // Handle the user's answer to the current question
  const handleAnswerClick = (event) => {
    const selectedAnswerIndex = event.target.dataset.answerIndex;
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswerIndex == currentQuestion.correctAnswerIndex;
  
    // Do something with the user's answer (e.g. update score)
    // ...
  
    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  };
  
  // Reset the state of the page
  const resetState = () => {
    const questionElement = document.getElementById("question");
    questionElement.innerText = "";
  
    const answerElements = document.querySelectorAll(".answer");
    answerElements.forEach((answerElement) => {
      answerElement.innerText = "";
      answerElement.removeEventListener("click", handleAnswerClick);
    });
  };
  
  // End the quiz (e.g. show score, restart button, etc.)
  const endQuiz = () => {
    // ...
  };
  
  // Call the loadQuestions function to start the quiz
  loadQuestions();
  
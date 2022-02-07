var quizData = [
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What are shared on the Internet and are called as Web pages?",
    a: "Programs",
    b: "Cables",
    c: "Hypertext documents",
    d: "None",
    correct: "c",
  },
  {
    question: "To make your website mobile friendly, you can make your website",
    a: "Reactive",
    b: "Responsive",
    c: "Fast Loading",
    d: "Light",
    correct: "b",
  },
];

var quizans = document.getElementById("quiz");
var answerElements = document.querySelectorAll(".answer");
var questionElement = document.getElementById("question");
var atext = document.getElementById("atext");
var btext = document.getElementById("btext");
var ctext = document.getElementById("ctext");
var dtext = document.getElementById("dtext");
var submitButton = document.getElementById("submit");
var currentQuiz = 0;
var score = 0;
var deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};
var getSelected = () => {
  var answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};
var loadQuiz = () => {
  deselectAnswers();
  var currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  atext.innerText = currentQuizData.a;
  btext.innerText = currentQuizData.b;
  ctext.innerText = currentQuizData.c;
  dtext.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
  var answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quizans.innerHTML = `  
       <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
       <button onclick="history.go(0)">Play Again</button>  
     `; // location.reload() won't work in CodePen for security reasons;
    }
  }
});

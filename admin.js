// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
import { getDatabase,push,ref,set,onValue } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOcljhCA-kyp2lwaFIFmvzpQw6WH4-_5Q",
  authDomain: "quiz-app-by-database.firebaseapp.com",
  databaseURL: "https://quiz-app-by-database-default-rtdb.firebaseio.com",
  projectId: "quiz-app-by-database",
  storageBucket: "quiz-app-by-database.appspot.com",
  messagingSenderId: "620493639089",
  appId: "1:620493639089:web:61d49e06b95f6a4bdbc190",
  measurementId: "G-NG36C1J7XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const gdatabase = getDatabase();
var questionobj = {
  inputquestion: document.getElementById('question').value,
  aanswer: document.getElementById('a').value,
  banswer: document.getElementById('b').value,
  canswer: document.getElementById('c').value,
  danswer: document.getElementById('d').value,
}

window.getload = function(){  
onValue(ref(gdatabase, 'Quiz App'),function(Data){
  var quizapp = Object.values(Data.val())
  for(var i =0; i<quizapp.length; i++){
    
        }
    })
  }

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
     ` // location.reload() won't work in CodePen for security reasons;  
    }
  }
});  
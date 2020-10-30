function buildQuiz(questions, container) {
    
    // this function builds  a quiz it has 2 parameters: questions and container
    var output = [];

    // var variable , it stores the output information (questions)

    var answers;

    // var variable stores the answers for the quiz questions

    
    for (var i = 0; i < questions.length; i++) {

  // this is a loop  that will loop the questions

        answers = [];


        for (letter in questions[i].choices) {

            answers.push(
                '<label>' +
                '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                letter + ': ' +
                questions[i].choices[letter] +
                '</label>'
            );
        }
        output.push(
            '<div class="question">' + questions[i].question + '</div>' +
            '<div class="answers">' + answers.join('') + '</div>'
        );
    }
    container.innerHTML = output.join('');
}
// this connects the container from the html document

function showResults(questions, quiz) {
  var answers = quiz.querySelectorAll(".answers")
  var totalCorrect = 0;
   
   for (var i = 0; i < questions.length; i++) {
    var currentQuestionNum = i;
    var currentQuestion = questions[i];
    var currentAnswer = currentQuestion.answer;
    var currentChoices = currentQuestion.choices;
    var answerContainer = answers[currentQuestionNum];

    var answerElement = answerContainer.querySelector("input[name=question" + currentQuestionNum + "]:checked");

    if(answerElement && answerElement.value === currentAnswer) {
        answers[currentQuestionNum].style.color = 'green';
        totalCorrect = totalCorrect + 1;
    } else {
        answers[currentQuestionNum].style.color = 'red';
    }
   }  
   results.innerHTML = 'Total: ' + totalCorrect;
}
// this is where the quiz is contained
var quiz = document.getElementById("quiz")
// this is where you will press a button the submit answers
var submit = document.getElementById("submit")
// this is where  the results will be held
var results = document.getElementById("results")

// this variable myQuestions has an array which has the questions, choices and anwsers.
var myQuestions = [{
        question: "The tourist attraction Big Ben in London is:",
        answer: 'c',
        choices: {
            a: 'A bus',
            b: 'A bridge ',
            c: 'A clock '
        },
    },

    {
        question: "What Countries make up the UK?",
        answer: 'c',
        choices: {
            a: 'Germany, Russia, England, Northern Ireland',
            b: 'England, Ireland, Scotland, Wales',
            c: 'Northern Ireland, Wales, Scotland, England'
        },
    },

    {
        question: "What is the the capital city of England?",
        answer: 'c',
        choices: {
            a: "Oxford",
            b: "Cambridge",
            c: "London"
        },
    },

    {
        question: "What year did the Olypics take place in London Stratford ?",
        answer: 'a',
        choices: {
            a: "2012",
            b: "2014",
            c: "2008"
        },
    },

    {
        question: "What City is the Bullring shopping centre in?",
        answer: 'c',
        choices: {
            a: "London",
            b: "Coventry",
            c: "Birmingham"
        },
    }
];


// this build quiz function is calling 2 arguments myQuestions and quiz
buildQuiz(myQuestions, quiz) 

submit.addEventListener("click", function () {
    showResults(myQuestions, quiz)
});
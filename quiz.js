function buildQuiz() {

}

function showResults() {
    alert("success")
}

var quiz = document.getElementById("quiz")

var submit = document.getElementById("submit")

var results = document.getElementById("results")

buildQuiz()

submit.addEventListener("click", function () {
    showResults()
});

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
        answer: ' c',
        choices: {
            a: "Oxford",
            b: "Cambridge",
            c: "London"
        },
    },

    {
        question: "What year did the Olypics take place in London Stratford ?",
        answer: ' a',
        choices: {
            a: "2012",
            b: "2014",
            c: "2008"
        },
    },

    {
        question: "What City is the Bullring shopping centre in?",
        answer: 'c ',
        choices: {
            a: "London",
            b: "Coventry",
            c: "Birmingham"
        },
    }
];




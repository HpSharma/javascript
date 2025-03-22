let _question_data = [];
let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.querySelector('.question-container');
const resultElement = document.querySelector('.result');
const scoreElement = document.getElementById('score');

const QUIZ_DATA = [
    {
        question: 'What is the capital of India?',
        options: ['Dehli', 'Bengaluru', 'Mumbai', 'Jaipur'],
        answers: 'Dehli',
    },
    {
        question: 'Who is the father of PHP?',
        options: ['Drek Kolkevi','Rasmus Lerdorf','Willam Makepiece','List Barely]'],
        answers: 'Rasmus Lerdorf',
    },
    {
        question: 'Which is the right way of declaring a variable in PHP?',
        options: ['$3hello', '$_hello', '$this', '$5_Hello'],
        answers: '$_hello',
    }
]

async function fetchQuestions() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.ok) {
            return await QUIZ_DATA;
        }
        throw new Error('Failed to fetch questions');
    } catch(error) {
        console.error(error);
    }
}

async function requestData() {
    _question_data = await fetchQuestions();
    renderQuestions();
}

function renderQuestions() {
    const currentQuestion = _question_data[currentQuestionIndex];

    questionContainer.innerHTML = '';
    const questionElement = document.createElement('h4');
    questionElement.textContent = currentQuestion.question;
    questionContainer.appendChild(questionElement); // Display Question

    // Display Options
    currentQuestion.options.forEach(option => {
       const buttonElement = document.createElement('button');
       buttonElement.textContent = option;
       buttonElement.addEventListener('click', () => handleOptionClick(option));
       questionContainer.appendChild(buttonElement);
    });
}

function handleOptionClick(option) {
    const currentQuestion = _question_data[currentQuestionIndex];

    if (currentQuestion.answers === option) {
        score++;
    }

    //Math.floor(Math.random() * 5)

    currentQuestionIndex++;
    if (currentQuestionIndex < _question_data.length) {
        renderQuestions();
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.style.display = 'none';
    resultElement.style.display = 'block';
    scoreElement.textContent = `${score} / ${_question_data.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.style.display = 'flex';
    resultElement.style.display = 'none';
    renderQuestions();
}

requestData();

console.log("Execution finished!");
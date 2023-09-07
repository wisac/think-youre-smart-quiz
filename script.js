"use strict";
const questions = [
    {
        question: "What are two things you can never eat for breakfast?",
        answers: [
            { option: "Orange and Lemon juice", correct: false },
            { option: "Lunch and Dinner", correct: true },
            { option: "Pancakes and eggs", correct: false },
            { option: "Milk and Orange juice", correct: false },
        ],
    },
    {
        question: "What is always coming but never arrives?",
        answers: [
            { option: "Winter", correct: false },
            { option: "Your graduation day", correct: false },
            { option: "Harmattan", correct: false },
            { option: "Tomorrow", correct: true },
        ],
    },
    {
        question: "What can be broken but never held?",
        answers: [
            { option: "A record", correct: false },
            { option: "A vase", correct: false },
            { option: "A secret", correct: false },
            { option: "A promise", correct: true },
        ],
    },
    {
        question: "What never asks a question but gets answered all the time?",
        answers: [
            { option: "Your cellphone", correct: true },
            { option: "Your mirror", correct: false },
            { option: "Your clock", correct: false },
            { option: "The internet", correct: false },
        ],
    },
    {
        question: "What two keys can't open any door?",
        answers: [
            { option: "A monkey and a donkey", correct: true },
            { option: "A spoon and a fork", correct: false },
            { option: "A Passport and a PIN", correct: false },
            { option: "A master key and a slave key", correct: false },
        ],
    },
    {
        question:
            "You spot a boat full of people but there isn't a single person on board. How is that possible?",
        answers: [
            { option: "It's a cargo ship with no passengers", correct: false },
            { option: "They are all invisible", correct: false },
            { option: "The boat is not moving", correct: false },
            { option: "Everyone on board is married", correct: true },
        ],
    },
    {
        question:
            "What's greater than God and more evil than the devil. Rich people want it, poor people have it. And if you eat it, you'll die?",
        answers: [
            { option: "Nothing", correct: true },
            { option: "A black hole", correct: false },
            { option: " Infinity", correct: false },
            { option: "A secret", correct: false },
        ],
    },
];
const allOptionsBtn = document.querySelectorAll(".option-btn");
const optionBox = document.querySelector(".option-box");
const nextBtn = document.querySelector(".next-btn");
const question = document.querySelector("#question");
let currentQuestionIndex = 0;
let score = 0;

optionBox.addEventListener("click", function (e) {
    if (e.target.classList.contains("option-btn")) {
        let selectedOption = e.target;
        checkAnswer(selectedOption);
        showNextBtn();

    }
});

nextBtn.addEventListener("click", () => {
    updateQuiz();
})

function showNextBtn() {
    nextBtn.style.display = "inline-block";
}

function updateQuiz() {
    currentQuestionIndex += 1;
    allOptionsBtn.forEach((btn) => {
        btn.classList.remove("correct");
        btn.classList.remove("wrong");
    })
    displayQuestion();
};

/////////Quiz Starter
function quizStart() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.textContent = "Next";
    displayQuestion();
}

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    question.textContent = questionNum + ". " + currentQuestion.question; //Question number

    //Display options for question
    allOptionsBtn.forEach((btn, i) => {
        btn.textContent = currentQuestion.answers.at(i).option;
    });
}

quizStart();
// displayQuestion();

function checkAnswer(chosenOption) {
    let optionNum = Number(chosenOption.getAttribute("data-value"));

    if (questions[currentQuestionIndex].answers[optionNum - 1].correct) {
        //update score and set option color to correct
        score++;
        chosenOption.classList.add("correct");
    }
    else {
        chosenOption.classList.add("wrong");
        const correctOptionIndex = () => {
            let answerIndex = -1;

            questions[currentQuestionIndex].answers.forEach((answer, i) => {
                if (answer.correct) {
                    answerIndex = i;
                }
            });
            return answerIndex;
        };

        const correctIndex = correctOptionIndex();
        allOptionsBtn[correctIndex].classList.add("correct");
    }
}

//add even listener to all buttons
//delegate the even listener by adding the listener to the buttons container

//When button is clicked.
//highlight the answer
//show next button
//check to see if its the correct button
// if correct
// update the score
//else
//highlight the clicked button

//When next is clicked
//show next question

//when last question is reached
//change next button to submit button

//when submit button is clicked.
//show final score and leaderboard of all 5 highscores
//show try again button

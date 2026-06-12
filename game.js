const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const hint = document.getElementById("hint");
const scoreElement = document.getElementById("score");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");

let score = 0;
let currentWord = 0;

const words = [
    {
        word: "APPLE",
        hint: "A popular fruit"
    },
    {
        word: "HOUSE",
        hint: "A place where people live"
    },
    {
        word: "WATER",
        hint: "You drink it every day"
    }
];

function loadWord() {
    hint.textContent = words[currentWord].hint;
    answerInput.value = "";
}

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";
    gameArea.style.display = "block";

    loadWord();

});

checkBtn.addEventListener("click", () => {

    const answer = answerInput.value.toUpperCase();

    if (answer === words[currentWord].word) {

        score += 10;
        scoreElement.textContent = score;

        currentWord++;

        if (currentWord < words.length) {

            loadWord();

        } else {

            hint.textContent = "Level Complete!";
            answerInput.style.display = "none";
            checkBtn.style.display = "none";

        }

    } else {

        alert("Wrong answer!");

    }

});
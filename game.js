const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const hint = document.getElementById("hint");
const scoreElement = document.getElementById("score");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");

let score = 0;

const words = [
    {
        word: "APPLE",
        hint: "A popular fruit"
    }
];

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";
    gameArea.style.display = "block";

    hint.textContent = words[0].hint;

});

checkBtn.addEventListener("click", () => {

    const answer = answerInput.value.toUpperCase();

    if (answer === words[0].word) {

        score += 10;

        scoreElement.textContent = score;

        alert("Correct!");

    } else {

        alert("Wrong answer!");

    }

});
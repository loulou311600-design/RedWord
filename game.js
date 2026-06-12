const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const hint = document.getElementById("hint");
const scoreElement = document.getElementById("score");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");

const englishBtn = document.getElementById("englishBtn");
const arabicBtn = document.getElementById("arabicBtn");

const grid = document.getElementById("grid");

let selectedLanguage = "english";

let score = 0;
let currentWord = 0;

const englishWords = [
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

const arabicWords = [
    {
        word: "تفاحة",
        hint: "فاكهة مشهورة"
    },
    {
        word: "بيت",
        hint: "مكان يعيش فيه الناس"
    },
    {
        word: "ماء",
        hint: "نشربه كل يوم"
    }
];

let words = englishWords;

englishBtn.addEventListener("click", () => {

    selectedLanguage = "english";
    words = englishWords;

    alert("English selected");

});

arabicBtn.addEventListener("click", () => {

    selectedLanguage = "arabic";
    words = arabicWords;

    alert("العربية تم اختيارها");

});

function drawGrid(word) {

    grid.innerHTML = "";

    for (let i = 0; i < word.length; i++) {

        const cell = document.createElement("div");

        cell.classList.add("cell");

        cell.textContent = "?";

        grid.appendChild(cell);

    }

}

function revealWord(word) {

    grid.innerHTML = "";

    for (let i = 0; i < word.length; i++) {

        const cell = document.createElement("div");

        cell.classList.add("cell");

        cell.textContent = word[i];

        grid.appendChild(cell);

    }

}

function loadWord() {

    hint.textContent = words[currentWord].hint;

    answerInput.value = "";

    drawGrid(words[currentWord].word);

}

startBtn.addEventListener("click", () => {

    score = 0;
    currentWord = 0;

    scoreElement.textContent = score;

    startBtn.style.display = "none";

    gameArea.style.display = "block";

    answerInput.style.display = "block";

    checkBtn.style.display = "block";

    loadWord();

});

checkBtn.addEventListener("click", () => {

    const answer = answerInput.value.trim().toUpperCase();

    const correctWord = words[currentWord].word.toUpperCase();

    if (answer === correctWord) {

        score += 10;

        scoreElement.textContent = score;

        revealWord(words[currentWord].word);

        setTimeout(() => {

            currentWord++;

            if (currentWord < words.length) {

                loadWord();

            } else {

                hint.textContent = "Level Complete!";

                answerInput.style.display = "none";

                checkBtn.style.display = "none";

            }

        }, 1000);

    } else {

        alert("Wrong answer!");

    }

});
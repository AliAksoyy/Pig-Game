'use strict';
// Selecting Elements
const playerEl0 = document.querySelector(".player--0")
const playerEl1 = document.querySelector(".player--1")
const score0El = document.querySelector("#score--0")
const score1El = document.querySelector("#score--1")
const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

const currentScore0 = document.querySelector("#current--0")
const currentScore1 = document.querySelector("#current--1")

// Starting Conditioans
score0El.textContent = 0
score1El.textContent = 0
diceEl.className = "hidden"
const scores = [0,0]
let currentScore = 0
let activePlayer = 0
// Rolling dice functionality
btnRoll.addEventListener("click", () => {
    // 1 Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6 ) + 1
    // 2 Display dice
    diceEl.classList.remove("hidden")
    diceEl.src = `./img/dice-${dice}.png`

    // 3 Check for rolled 1 : if true, swtich to next player
    if(dice !==1) {
        // Add dice to current score
        currentScore +=dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore

    } else {
        // Swtich player
          document.getElementById(`current--${activePlayer}`).textContent = 0
                  activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        playerEl0.classList.toggle("player---active")
        playerEl1.classList.toggle("player---active")


    }
})

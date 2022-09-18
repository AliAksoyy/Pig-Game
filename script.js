'use strict';
// Selecting Elements
const score0El = document.querySelector("#score--0")
const score1El = document.querySelector("#score--1")
const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

// Starting Conditioans
score0El.textContent = 0
score1El.textContent = 0
diceEl.className = "hidden"


// Rolling dice functionality
btnRoll.addEventListener("click", () => {
    // 1 Generating a random dice roll
    // 2 Display dice
    // 3 Check for rolled 1 : if true, swtich to next player
})

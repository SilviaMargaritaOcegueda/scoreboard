let hScore = 0
let gScore = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function hAdd1() {
    homeScore.textContent = hScore += 1 
}

function hAdd2() {
    homeScore.textContent = hScore += 2 
}

function hAdd3() {
    homeScore.textContent = hScore += 3 
}

function gAdd1() {
    guestScore.textContent = gScore += 1 
}

function gAdd2() {
    guestScore.textContent = gScore += 2 
}

function gAdd3() {
    guestScore.textContent = gScore += 3 
}
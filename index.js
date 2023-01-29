let homeHolder = 0
let guestHolder = 0

homeScore = document.getElementById("home-score")
guestScore = document.getElementById("guest-score")

function homeIncrementbyOne(){
    homeHolder += 1
    homeScore.innerText = homeHolder
}

function homeIncrementbyTwo(){
    homeHolder += 2
    homeScore.innerText = homeHolder
}

function homeIncrementbyThree(){
    homeHolder += 3
    homeScore.innerText = homeHolder
}

function guestIncrementbyOne(){
    guestHolder += 1
    guestScore.innerText = guestHolder
}
function guestIncrementbyTwo(){
    guestHolder += 2
    guestScore.innerText = guestHolder
}

function guestIncrementbyThree(){
    guestHolder += 3
    guestScore.innerText = guestHolder
}

function newGame(){
     guestHolder = 0
     homeHolder = 0
     homeScore.innerText = 0
     guestScore.innerText = 0
}
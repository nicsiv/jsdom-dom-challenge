const counter = document.getElementById('counter');
let counterNumber = parseInt(counter.innerText)
let likesCounter = 0


function likesZero() {
    likesCounter = 0
}

function incrementCounter() {
    counterNumber += 1;
    counter.innerText = counterNumber;
}

function decrementCounter() {
    counterNumber -= 1;
    counter.innerText = counterNumber;
}

function displayLikes() {
    if (likesCounter == 0) {
        likesCounter += 1;
        let newLi = document.createElement('li')
        newLi.innerText = `${counterNumber} has ${likesCounter} likes`
        likesContainer.appendChild(newLi)
    } else {
        likesCounter += 1;
        likesContainer.lastChild.innerText = `${counterNumber} has ${likesCounter} likes`
    }
}

setInterval(function(){
    incrementCounter(),
    likesZero()
}, 1000)


const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const heartButton = document.getElementById('heart')
const likesContainer = document.querySelector('.likes')
plusButton.addEventListener('click', incrementCounter)
minusButton.addEventListener('click', decrementCounter)
heartButton.addEventListener('click', displayLikes)
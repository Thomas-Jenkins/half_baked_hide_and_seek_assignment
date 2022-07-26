// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const resetButton = document.getElementById('reset');
const tryAgainButton = document.getElementById('try-again');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');


// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;
let incorrectGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
    
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
    
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
    
});



function handleGuess(correctSpot, userGuess) {
    // reset the styles
    // then increment the guesses
    // then grab the appropriate container element for the correct guess from the DOM
    // then add the face class to that element so that the face shows up
    // then if the user guess is correct, increment the correct guesses
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    
    totalGuesses++;
    totalEl.textContent = totalGuesses;

    if (userGuess === correctSpot) {
        correctGuesses++;
        winsEl.textContent = correctGuesses;
    } else {
        incorrectGuesses++;
        lossesEl.textContent = incorrectGuesses;
    }
    //I inspected the element in the example and found that the face was added to the correct spot using the code below. I added it to my code to see how it worked and it functioned. But it wasn't the way that I solved it. I think, in the spirit of learning I should stick with my code for my assignment. 

    // const correctLocation = document.getElementById(`${correctSpot}-container`);
    // correctLocation.classList.add('face');

    if (correctSpot === hidingPlaces[0]) {
        treeContainer.classList.add('face');
    } else if (correctSpot === hidingPlaces[1]) {
        shedContainer.classList.add('face');
    } else if (correctSpot === hidingPlaces[2]) {
        boulderContainer.classList.add('face');
    }
    treeButton.disabled = true;
    shedButton.disabled = true;
    boulderButton.disabled = true;
}

resetButton.addEventListener('click', () => {
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    correctGuesses = 0;
    totalGuesses = 0;
    incorrectGuesses = 0;
    totalEl.textContent = 0;
    lossesEl.textContent = 0;
    winsEl.textContent = 0;
});

tryAgainButton.addEventListener('click', () => {
    treeButton.disabled = false;
    shedButton.disabled = false;
    boulderButton.disabled = false;
});

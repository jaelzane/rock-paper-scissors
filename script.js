// table
const moveArray = ["rock", "paper", "scissors"];

// choice
const userChoice = document.getElementById("moveselect");



// lonely button
const button = document.getElementById("play");



// very long if statements im dumb yes
function winLose() {
    const computerChoiceIndex = Math.floor(Math.random() * moveArray.length);
    const computerChoice = moveArray[computerChoiceIndex];
    const userCurrentChoice = userChoice.options[userChoice.selectedIndex].text.toLowerCase(); // anxiety

    if (userCurrentChoice == "rock" && computerChoice == "rock") {
        alert("Tie...");
    }

    if (userCurrentChoice == "rock" && computerChoice == "paper") {
        alert("You lost...");
    }

    if (userCurrentChoice == "rock" && computerChoice == "scissors") {
        alert("You won!");
    }

    if (userCurrentChoice == "paper" && computerChoice == "rock") {
        alert("You won!");
    }

    if (userCurrentChoice == "paper" && computerChoice == "paper") {
        alert("Tie...");
    }

    if (userCurrentChoice == "paper" && computerChoice == "scissors") {
        alert("You lost...");
    }

    if (userCurrentChoice == "scissors" && computerChoice == "rock") {
        alert("You lost...");
    }

    if (userCurrentChoice == "scissors" && computerChoice == "paper") {
        alert("You won!");
    }

    if (userCurrentChoice == "scissors" && computerChoice == "scissors") {
        alert("Tie...");
    }
}

button.onclick = function () {
    winLose();
}
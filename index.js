//recreating rockPaperScissors

/*
Game rules
1. rock destroys scissors
2. scissors cuts paper
3. paper covers rock
4. cheat to win for user 'cheat' always
*/

/*working on the game parts
1.Get user's input
2.Get computer's input
3.Compare the two choices and determine a winner
4.Play the game and display the results
*/

//get user's choice
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'cheat') {
        return userInput;
    } else {
        console.log('Error with input')
    }
}
console.log(getUserChoice('paper')); //testing the function

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            console.log('not found');
            break;
    }
}
console.log(getComputerChoice()); // testing the function

// determine who the winner is based on the rules
function determineWinner(userChoice, compterChoice) {
    if (userChoice === compterChoice) {
        return 'it\'s a tie';
    }
    if (userChoice === 'cheat') {
        return 'You won';
    }
    if (userChoice === 'paper') {
        if (compterChoice === 'scissors') {
            return 'Computer won';
        } else {
            return 'You won';
        }
    }
    if (userChoice === 'rock') {
        if (compterChoice === 'paper') {
            return 'Computer won';
        } else {
            return 'You won';
        }
    }
    if (userChoice === 'scissors') {
        if (compterChoice === 'rock') {
            return 'Computer won';
        } else {
            return 'You won';
        }
    }
}
console.log(determineWinner('paper', 'rock')); //testing the function

function playGame() {
    let userChoice = getUserChoice('paper');
    let compterChoice = getComputerChoice();

    console.log('You chose: ' + userChoice);
    console.log('Computer chose: ' + compterChoice);

    console.log(determineWinner(userChoice, compterChoice));
}
playGame();
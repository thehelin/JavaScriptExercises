const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

const startGame = async () => {
    let targetNumber = await prompt("Player 1: Enter a whole number between 1 and 100: ");
    targetNumber = parseInt(targetNumber);

    while (isNaN(targetNumber) || targetNumber < 1 || targetNumber > 100) {
        targetNumber = await prompt("Invalid input. Please enter a whole number between 1 and 100: ");
        targetNumber = parseInt(targetNumber);
    }

    console.clear();

    let guess;
    let numberOfGuesses = 0;

    do {
        guess = await prompt("Player 2: Guess the number: ");
        guess = parseInt(guess);
        numberOfGuesses++;

        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log("Invalid input. Please enter a whole number between 1 and 100.");
        } else if (guess < targetNumber) {
            console.log("The number is greater than " + guess + ".");
        } else if (guess > targetNumber) {
            console.log("The number is less than " + guess + ".");
        }
    } while (guess !== targetNumber);

    console.log(`Correct! The number was ${targetNumber}. It took ${numberOfGuesses} guesses.`);

};

startGame().catch((err) => {console.error(err);}).finally(() => rl.close());

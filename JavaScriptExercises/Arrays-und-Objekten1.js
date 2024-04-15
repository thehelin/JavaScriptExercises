const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

(async () => {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const userInput = await prompt("Enter a number between 1-7: ");
    const index = parseInt(userInput, 10) - 1;

    if (index >= 0 && index < weekdays.length) {
        console.log(`The corresponding weekday is: ${weekdays[index]}`);
    } else {
        console.log("Please enter a valid number between 1-7.");
    }

    rl.close();
})();

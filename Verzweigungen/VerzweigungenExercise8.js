const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

async function determineNumberType() {
    let number = parseFloat(await prompt("Please enter a number: "));

    if (number % 1 === 0) {  // Checks if the number is an integer
        if (number % 2 === 0) {
            console.log(`The number ${number} is even.`);
        } else {
            console.log(`The number ${number} is odd.`);
        }
    } else {
        console.log(`The number ${number} is a decimal.`);
    }

    rl.close();
}

determineNumberType().catch((err) => {console.error(err);}).finally(() => rl.close());

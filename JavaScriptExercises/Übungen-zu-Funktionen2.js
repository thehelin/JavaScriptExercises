const readline = require('readline');
const rl2 = readline.createInterface({ input: process.stdin, output: process.stdout });

const prompt2 = (query) => new Promise((resolve) => rl2.question(query, resolve));

const isEvenArrow = number => number % 2 === 0;

async function checkIfEvenArrow() {
    const number = await prompt2('Enter a number for the isEvenArrow function: ');
    console.log(`The number is ${isEvenArrow(number) ? '' : 'not '}even.`);
    rl2.close();
}

checkIfEvenArrow();
rl2.on('close', () => process.exit(0));

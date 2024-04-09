const readline = require('readline');
const rl1 = readline.createInterface({ input: process.stdin, output: process.stdout });

const prompt1 = (query) => new Promise((resolve) => rl1.question(query, resolve));

function isEven(number) {
    return number % 2 === 0;
}

async function checkIfEven() {
    const number = await prompt1('Enter a number for the isEven function: ');
    console.log(`The number is ${isEven(number) ? '' : 'not '}even.`);
    rl1.close();
}

checkIfEven();
rl1.on('close', () => process.exit(0));

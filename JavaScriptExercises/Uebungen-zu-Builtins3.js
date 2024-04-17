const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const numbers = await prompt("Enter a list of numbers separated by commas: ")
        const sorted = numbers.split(',')
        .map(Number)
        .sort((a, b) => a - b);
    console.log('Sorted numbers:', sorted.join(', '));
    rl.close();
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
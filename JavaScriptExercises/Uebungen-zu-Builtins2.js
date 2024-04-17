const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const min = await prompt("Enter the minimum number: ");
    const max = await prompt("Enter the maximum number: ");
    const isInteger = await prompt("Should it return only integers? yes/no: ");
    const randomNum = isInteger.toLowerCase() === 'yes' ? Math.round(Math.random() * (max - min) + Number(min)) :
        Math.random() * (max - min) + Number(min);
    console.log(`Random number: ${randomNum}`);
    rl.close
}

execute().catch((err) => {console.error(err);}).finally(() => rl.close());
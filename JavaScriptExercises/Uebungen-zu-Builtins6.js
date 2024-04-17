const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const binaryString = await prompt("please enter a binary number: ");
    const decimalValue = parseInt(binaryString, 2);
    console.log(`the decimal value of ${binaryString} is ${decimalValue}`);
    rl.close();
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
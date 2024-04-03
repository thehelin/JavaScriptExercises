const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.on('close', () => process.exit(0));
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

async function simpleCalculator() {
    const num1 = parseFloat(await prompt("Please enter the first number: "));
    const num2 = parseFloat(await prompt("Please enter the second number: "));
    const operator = await prompt("Please enter an operator(+, -, *, /): ");

    console.log('Number 1 and Number 2  and operator', num1, num2, operator);


    switch (operator) {
        case '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case '-':
            console.log(`${num1} - ${num2} = ${num1 + num2}`);
            break;
        case '*':
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case '/':
            if (num2 !== 0) {
                console.log(`${num1} / ${num2} = ${num1 / num2}`);
            } else {
                console.log('Connot divide by zero');
            }
            break;
        default:
            console.log('Invalid operator')
            break;
    }

}

simpleCalculator().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

async function findLargestNumber() {
    let number1 = parseFloat(await prompt("Please enter the first number: "));
    let number2 = parseFloat(await prompt("Please enter the second number: "));
    let number3 = parseFloat(await prompt("Please enter the third number: "));
    let number4 = parseFloat(await prompt("Please enter the fourth number: "));

    let largestNumber = number1 > number2 && number1 > number3 && number1 > number4 ? number1 :
        number2 > number3 && number2 > number4 ? number2 :
            number3 > number4 ? number3 : number4;

    console.log(`The largest number is: ${largestNumber}`);
    rl.close();
}

findLargestNumber().catch((err) => {console.error(err);}).finally(() => rl.close());

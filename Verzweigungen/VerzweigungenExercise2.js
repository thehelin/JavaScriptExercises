const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

async function checkTemperature() {

    const temperature = parseFloat(await prompt("Please enter the temperature: "));

    console.log('Temperature is', temperature);

    if (temperature < 10) {
        console.log('it is cold');
    } else if (temperature >= 10 && temperature < 25) {
        console.log('It is pleasant');
    } else {
        console.log('It is hot')
    }
    rl.close();
}

checkTemperature().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
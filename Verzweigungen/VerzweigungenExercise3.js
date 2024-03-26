const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

async function dayOfWeekIfElse() {
    //parse the inpur to an integer
    const dayNumber = parseInt(await prompt("Enter a number (1-7): "), 10);

    console.log('Number of Day', dayNumber);

execute().catch((err) => { console.error(err); }).finally(() => rl.close());
    if (dayNumber === 1) {
        console.log('Monday');
    } else if (dayNumber === 2) {
        console.log('Tuesday')
    } else if (dayNumber === 3) {
        console.log('Wednesday')
    } else if (dayNumber === 4) {
        console.log('Thursday')
    } else if (dayNumber === 5) {
        console.log('Friday')
    } else if (dayNumber === 6) {
        console.log('Saturday')
    } else if (dayNumber === 7) {
        console.log('Sunday')
    } else {
        console.log("Invalid input please enter a number between 1 and 7");
    }

}

dayOfWeekIfElse();

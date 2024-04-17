const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function dayOfWeekSwitchCase() {
    const dayNumber = parseInt(await prompt("Please enter a number (1-7): "), 10);
    console.log('Day number is', dayNumber);

    switch (dayNumber) {
        case 1:
            console.log('Monday')
            break;

        case 2:
            console.log('Tuesday')
            break;

        case 3:
            console.log('Wednesday')
            break;

        case 4:
            console.log('Thursday')
            break;


        case 5:
            console.log('Friday')
            break;


        case 6:
            console.log('Saturday')
            break;


        case 7:
            console.log('Sunday')
            break;

        default:
            console.log('Invalid input please enter a number between 1 and 7');
            break;
    }

}

dayOfWeekSwitchCase().catch((err) => {
    console.error(err);
}).finally(() => rl.close());

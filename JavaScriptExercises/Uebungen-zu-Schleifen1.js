const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

const getWeekday = async () => {
    let dayNumber = await prompt("enter a day number between 1-7: ");
    dayNumber = parseInt(dayNumber);
    while (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
        dayNumber = await prompt("invalid input please enter a day number between 1-7: ");
        dayNumber = parseInt(dayNumber);
    }
    const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    console.log("The day is: " + dayOfWeek[dayNumber - 1] );
   rl.close();
};
getWeekday().catch((err) => {console.error(err);}).finally(() => rl.close());

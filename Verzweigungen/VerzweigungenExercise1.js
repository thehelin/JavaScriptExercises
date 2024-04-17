const readline = require(`readline`);
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));


async function verifyPassword() {
    const correctPassword = `Heyyo123`; //correct password
    const userInput = await prompt("Please enter the password: ");
    console.log('UserInput', userInput);


    if (userInput === correctPassword) {
        console.log('Correct password!');
    } else {
        console.log('Incorrect password');
    }


}

verifyPassword().catch((err) => {console.error(err);}).finally(() => rl.close());
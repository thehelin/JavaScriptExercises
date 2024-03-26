const readline = require(`readline`);
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

//execute().catch((err) => {console.error(err);}).finally(() => rl.close());

async function verifyPassword() {
    const correctPassword = `Heyyo123`; //correct password
    const userInput = await prompt("Please enter the password: ");
    console.log('UserInput', userInput);
    execute().catch((err) => {console.error(err);}).finally(() => rl.close());

    if (userInput === correctPassword) {
        console.log('Correct password!');
    } else {
        console.log('Incorrect password');
    }


}

verifyPassword();
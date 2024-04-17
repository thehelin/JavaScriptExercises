const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

async function vowelOrConsonant() {
    const letter = await prompt("Please enter a single letter: ");
    const normalizeLetter = letter.toLowerCase();
    if (normalizeLetter.length !== 1 || !/[a-z]/i.test(normalizeLetter)) {
        console.log('Please enter a valid single letter');
    } else {


        switch (letter) {
            case'a':
            case'e':
            case'u':
            case'o':
            case'i':
                console.log('It is a vowel')
                break;
            default:
                console.log('It is a consonant');
        }

    }
}



vowelOrConsonant().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
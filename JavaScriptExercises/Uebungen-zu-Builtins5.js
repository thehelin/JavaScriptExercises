const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const jsonObject = JSON.stringify({name: 'Maria', age: 24}, null, 2);
    console.log('JSON formatted object: ', jsonObject);
    rl.close();
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
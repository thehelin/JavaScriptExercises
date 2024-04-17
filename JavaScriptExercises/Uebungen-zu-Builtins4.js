const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const objectkeys = Object.values({name: 'Maria', age: '25', country: 'Wonderland'});
    console.log('Object values:', objectkeys.join(', '));
    rl.close();
} execute().catch((err) => { console.error(err); }).finally(() => rl.close());

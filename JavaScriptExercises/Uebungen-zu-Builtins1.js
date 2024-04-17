const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));


async function execute() {
    const now = new Date();
    const options = {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false,
        timeZoneName: 'Short'
    };

const formattedDate = now.toLocaleString();
    console.log('Current date and time:', formattedDate);
    rl.close();

} execute().catch((err) => { console.error(err); }).finally(() => rl.close());

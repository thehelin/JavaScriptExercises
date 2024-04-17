const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute (){
  let text = "Hallo Welt"
    const name = await prompt("please enter a name to replace: ");
    text = text.replace("Welt", name);
    console.log(`Modified text: ${text}`);
    console.log("length of the text: ", text.length);
    console.log("First letter: ", text.charAt(0));
    let words = text.split(" ");
    console.log("Array of words: ", words);
}execute().catch((err) => { console.error(err); }).finally(() => rl.close());
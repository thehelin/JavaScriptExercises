const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));
const people = [
    {name: "Angelika", age: 55},
    {name: "John", age: 70},
    {name: "Marika", age: 48},
    {name: "David", age: 44},
    {name: "Melanie", age: 42},

];
people.forEach(person =>{
    console.log(`name: ${person.name}, age: ${person.age}`);
});
rl.close();

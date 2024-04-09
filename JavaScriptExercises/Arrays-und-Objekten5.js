const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

(async () => {
    const table = [
        { "Vorname": "Henry", "Nachname": "Cavill", "Alter": 25 },
        { "Vorname": "Anya", "Nachname": "Huber", "Alter": 26 },
        { "Vorname": "Gerti", "Nachname": "Kiefer", "Alter": 19 }
    ];

    const row = await prompt("Enter row number (1-3): ");
    const columnName = await prompt("Enter column name (Vorname, Nachname, Alter): ");
    const rowIndex = parseInt(row, 10) - 1;

    if (rowIndex >= 0 && rowIndex < table.length && table[rowIndex][columnName] !== undefined) {
        console.log(`The selected value is: ${table[rowIndex][columnName]}`);
    } else {
        console.log("Please enter a valid row number and column name.");
    }

    rl.close();
})();

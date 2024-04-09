const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

(async () => {
    const table = [
        ["Vorname", "Nachname", "Alter"],
        ["Henry", "Cavill", 25],
        ["Anya", "Huber", 26],
        ["Gerti", "Kiefer", 19]
    ];

    const row = await prompt("Enter row number (1-3): ");
    const column = await prompt("Enter column number (1-3): ");
    const rowIndex = parseInt(row, 10);
    const columnIndex = parseInt(column, 10);

    if (rowIndex >= 1 && rowIndex <= 3 && columnIndex >= 1 && columnIndex <= 3) {
        console.log(`The selected value is: ${table[rowIndex][columnIndex - 1]}`);
    } else {
        console.log("Please enter valid row and column numbers.");
    }

    rl.close();
})();

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
    const columnNames = { "Vorname": 0, "Nachname": 1, "Alter": 2 };

    const row = await prompt("Enter row number (1-3): ");
    const columnName = await prompt("Enter column name (Vorname, Nachname, Alter): ");
    const rowIndex = parseInt(row, 10);
    const columnIndex = columnNames[columnName];

    if (rowIndex >= 1 && rowIndex <= 3 && columnIndex !== undefined) {
        console.log(`The selected value is: ${table[rowIndex][columnIndex]}`);
    } else {
        console.log("Please enter a valid row number and column name.");
    }

    rl.close();
})();

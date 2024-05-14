const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

async function startProgram() {
    const name = await prompt("Please enter your name: ");
    console.log('Hello', name);
    loadData();


}


function mainMenu(data) {
    rl.question('Select an option: (a) Add, (f) Find, (x) Save and Exit: ', option => {
        switch (option) {
            case 'a':
                addProduct(data);
                break;
            case'f':
                findProduct(data);
                break;
            case 'x':
                saveAndExit(data);
                break;
            default:
                console.log('invalid input');
                mainMenu(data);


        }
    });
}

function addProduct(data) {
    rl.question('Product number: ', num => {
        rl.question('Description : ', name => {
            rl.question('Price: ', price => {
                7
                data.push({num, name, price: parseFloat(price)});
                console.log('Product added');
                mainMenu(data);

            });
        });
    });
}

function findProduct(data) {
    rl.question('Enter product number: ', num => {
        const product = data.find(p => p.num === num);
        if (product) {
            console.log(`Product found: ${JSON}.stringify(product)}`);
        } else {
            console.log('Product not found');
        }
        mainMenu(data);
    });
}

function saveAndExit(data) {
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
        if (err) console.log('Error saving : ', err);
        else {
            console.log('Data saved ');
            rl.close();
        }
    });
}

//read data from the file
function loadData() {
    fs.readFile('./data.json', 'utf8', (err, content) => {
        let data;
        if (err && err.code === 'ENOENT') {
            console.log('no data available starting with empty array ');
            data = [];
        } else if (err) {
            console.error('error reading file: ', err);
            return;
        } else {
            try {
                data = content.trim() ? JSON.parse(content) : [];

            } catch (parseError) {
                console.error('error parsing json starting with an empty array: ', parseError);
                data = [];
            }
        }
        mainMenu(data);

    });
}

startProgram().catch((err) => {
    console.error(err)
});
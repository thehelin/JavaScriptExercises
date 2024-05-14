const fs = require('fs');

function mainMenu(data) {
}

fs.readFile('./data.json', 'utf8', (err, content) => {
    let data;
    if (err) {
        if (err.code === 'ENOENT') {
            console.log('no data available starting with an empty array ');
            data = [];
        } else {
            console.error('error reading file: ', err);
            process.exit(1);
        }
    } else {
        try {
            data = content.trim() ? JSON.parse(content) : [];
        } catch (parseError){
            console.error('error parsing json starting with an empty array: ', parseError);
            data = [];
        }
    }
    mainMenu(data);
});
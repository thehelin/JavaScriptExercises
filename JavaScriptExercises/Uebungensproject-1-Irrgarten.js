const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

const labyrinth = [
    ['[ # ]', '[ # ]', '[ # ]', '[ # ]', '[ # ]', '[ # ]', '[ # ]'],
    ['[ # ]', '[   ]', '[   ]', '[   ]', '[ # ]', '[   ]', '[ # ]'],
    ['[ # ]', '[   ]', '[ # ]', '[   ]', '[ # ]', '[   ]', '[ # ]'],
    ['[ # ]', '[   ]', '[ # ]', '[   ]', '[   ]', '[   ]', '[ # ]'],
    ['[ # ]', '[   ]', '[ # ]', '[ # ]', '[ # ]', '[   ]', '[ # ]'],
    ['[ # ]', '[   ]', '[   ]', '[   ]', '[   ]', '[ S ]', '[ # ]'],
    ['[ # ]', '[ # ]', '[ # ]', '[ # ]', '[ # ]', '[ # ]', '[ # ]'],
];

const player = {x: 1, y: 1};
const goal = {x: 5, y: 5};

const drawlabyrinnth = () => {
    for (let y = 0; y < labyrinth.length; y++) {
        let row = '';
        for (let x = 0; x < labyrinth[y].length; x++) {
            if (x === player.x && y === player.y) {
                row += '[ X ]';
            } else {
                row += labyrinth[y][x];
            }
        }
        console.log(row);
    }
};

const movePlayer = async () => {
    drawlabyrinnth();
    const direction = await prompt('Move (u: up, d: down, l: left, r: right, x: exit): ');
    switch (direction) {
        case 'u':
            if (player.y > 0 && labyrinth [player.y - 1][player.x] !== '[ # ]') {
                player.y--;
            }
            break;
        case 'd':
            if (player.y < labyrinth.length - 1 && labyrinth [player.y + 1][player.x] !== '[ # ]') {
                player.y++;
            }
            break;
        case 'l':
            if (player.x > 0 && labyrinth[player.y][player.x - 1] !== '[ # ]') {
                player.x--;
            }
            break;
        case 'r':
            if (player.x < labyrinth[player.y].length - 1 && labyrinth[player.y][player.x + 1] !== '[ # ]') {
                player.x++;
            }
            break;
        case 'x':
            console.log('Game Exited');
            rl.close();
            process.exit(0);
            return;

    }
    if (player.x === goal.x && player.y === goal.y) {
        console.log('Congratulations you reached the goal');
        rl.close();
        process.exit(0);
    } else {
        await movePlayer(); //oyun bitene kadar tekrarla
    }
};

async function execute() {
    const name = await prompt("Please enter your name: ");
    console.log(`Hello, ${name} Welcome to the Labyrinth`)
    await movePlayer();
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
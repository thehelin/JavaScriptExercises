import chalk from 'chalk';

export function logRed(message) {
    console.log(chalk.red(message));
}

export function logGreen(message) {
    console.log(chalk.green(message));
}

export function logBlue(message) {
    console.log(chalk.blue(message));
}
logRed("This is a Red message")
logGreen("This is a Green message")
logBlue("This is a Blue message")
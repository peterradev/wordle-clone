#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

// console.log(chalk.bgGreen("Hello World!"));

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome(){
    const rainbowTitle = chalkAnimation.rainbow(
        'Worlde Clone \n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
        ${chalk.bgBlue('HOW TO PLAY')}
        I am a CLI program.
        You have 6 guesses to figure out the 5 letter word.
        If the letter has a ${chalk.bgYellow('yellow')} background means that you guess the letter right, but it is in the wrong spot.
        If the color of the letter is ${chalk.bgGreen('green')}, that means you got the letter
        right and is in the right spot. However if the background of the letter is ${chalk.bgGray('gray')}, that means that 
        the letter is not in the word, so it is out of the game.
    `);
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?\n',
        default(){
            return 'Player';
        },
    });

    playerName = answers.player_name;
}

async function guess() {
    const answers = await inquirer.prompt({
        name: 'guess',
        type: 'input',
        message: 'What is your first guess?\n',
    });
    
}


// await welcome();

// await askName();

await guess();
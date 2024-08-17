import inquirer from "inquirer";
let i = true;
do {
    let yourNumber = await inquirer.prompt({ name: 'guess_number', type: 'number', message: 'enter your desire number between 1 - 6: ' });
    let numberRandom = Math.floor(Math.random() * 6 + 1);
    if (yourNumber.guess_number === numberRandom) {
        console.log(`congratulations You Guess the right number`);
        i = false;
    }
    else {
        console.log(`Please try again`);
    }
} while (i);

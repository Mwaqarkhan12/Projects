import inquirer from 'inquirer';
import chalk from 'chalk';
let todo = [];
let i = true;
do {
    let oppr = await inquirer.prompt({ name: 'operation', type: 'list', message: 'which operation performed: ', choices: ['add', 'update', 'remove', 'view', 'Log out'] });
    if (oppr.operation == 'add') {
        let i = true;
        while (i) {
            let add = await inquirer.prompt([{ name: 'Add todo', type: 'input', message: 'Please enter your item: ' }, { name: 'add next', message: 'Enter a next todo : ', type: 'confirm', defaulf: true }]);
            todo.push(add['Add todo']);
            i = add['add next'];
        }
    }
    else if (oppr.operation == 'update') {
        if (todo.length > 0) {
            let update = await inquirer.prompt([{ name: 'update todo', type: 'list', message: 'Please select an item : ', choices: todo }]);
            let index = todo.indexOf(update['update todo']);
            let updateitem = await inquirer.prompt({ name: 'updated item', type: 'input', message: 'Please enter a new item : ' });
            todo[index] += updateitem['updated item'];
        }
        else {
            console.log(chalk.red('Please add element first then you can able to update list'));
        }
    }
    else if (oppr.operation == 'remove') {
        if (todo.length > 0) {
            let remove = await inquirer.prompt({ name: 'remove todo', type: 'list', message: 'Please select an item for remove: ', choices: todo });
            todo = todo.filter(elem => elem != remove['remove todo']);
        }
        else {
            console.log(chalk.bgRed('Not any todo found '));
        }
    }
    else if (oppr.operation == 'view') {
        if (todo.length > 0) {
            console.log('Your TODO item list is: ', todo);
        }
        else {
            console.log(chalk.red('Not any todo foun ina list'));
        }
    }
    else if (oppr.operation === 'Log out') {
        let logout = await inquirer.prompt({ name: "log_out", type: 'confirm', default: true, message: 'Are You sure to want to log out.' });
        i = !logout.log_out;
    }
} while (i);

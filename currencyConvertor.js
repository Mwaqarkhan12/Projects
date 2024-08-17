import inquirer from "inquirer";
let curriencies = {
    USA: 0.0036101083032491,
    UK: 5,
    AED: 70,
    RIAL: 50,
    PKR: 1
};
let select_curriencies = await inquirer.prompt([{ name: 'from', type: 'list', message: 'select curency from which you want to convert :  ', choices: ['USA', 'PKR', 'UK', 'AED', 'RIAL'] }, { name: 'to', type: 'list', message: 'Select currency in which you want to convert : ', choices: ['USA', 'PKR', 'UK', 'AED', 'RIAL'] }, { name: 'amount', type: 'number', message: `Please enter your amount : ` }]);
console.log(`Your curriencies and amount you have selected is :  ${select_curriencies.from}, ${select_curriencies.to} , ${select_curriencies.amount}`);
let basedcurrency_PKR = curriencies.PKR / curriencies[select_curriencies.from];
let convertredamount = basedcurrency_PKR * select_curriencies.amount;
console.log(`Your amount will be after conversion in ${select_curriencies['to']} is : ${convertredamount}`);

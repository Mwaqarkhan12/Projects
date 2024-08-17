import inquirer from "inquirer";
let accountBalance = 100;
let userName = 'waqarkhan';
let password = 123456;
let accountNumber;
let i = true;
let userid_password = await inquirer.prompt([{ name: 'username', type: 'input', message: 'enter your username : ' }, { name: 'Password', type: 'number', message: ' enter your password : ' }]);
if (userid_password.username === 'waqarkhan' && userid_password.Password === 123456) {
    console.log('\n Login Sucessfull. \n welcome to easypaisa mobile app \n');
    do {
        let Appinterface = await inquirer.prompt({ name: 'interface', type: 'list', message: 'select any option', choices: ['FUND TRANSFER', 'BILL PAYMENT', 'EASYPAISA TO EASYPAISA', 'MOBILE TOPUPS', 'Log out'] });
        console.log(Appinterface.interface);
        if (Appinterface.interface === 'FUND TRANSFER') {
            let Account_number = await inquirer.prompt([{ name: 'benefbank', type: 'list', choices: ['UBL', 'HBL', 'SCB', 'JAZZ CASH', 'MBL', 'SILK BANK', 'NBP'], message: 'Please select Beneficery bank' }, { name: 'Senderaccount', message: 'select From account number if have an multiple account : ', type: 'list', choices: [923422107967] }, { name: 'Beneficeryaccount', type: 'number', message: 'Please enter the beneficary account number : ' }, { name: 'amount', type: 'number', message: 'Please enter an amount' }]);
            console.log(Account_number);
            if (Account_number.amount <= accountBalance) {
                let remainingbalance = accountBalance - Account_number.amount;
                console.log(`Your transaction has been sucessfull. Your balance is ${remainingbalance} from your previous account balance ${accountBalance}`);
            }
            else {
                console.log(`Your account balance is insufficient for this transaction. Please enter below this amount ${accountBalance}`);
            }
        }
        else if (Appinterface.interface == 'BILL PAYMENT') {
            let bilingData = await inquirer.prompt([{ name: 'billingCompany', type: 'list', message: 'Please select the billing company', choices: ['KE', 'SSGC', 'PTCL', 'Others'] }, { name: 'consumerNumber', type: 'number', message: 'Please enter your consumer number' }, { name: 'billingamount', type: 'number', message: 'Please enter your bill amount' }]);
            console.log(bilingData);
            if (bilingData.billingamount <= accountBalance) {
                accountBalance -= bilingData.billingamount;
                console.log(`your bill has bee paid. Your balance is ${accountBalance}`);
            }
            else {
                console.log(`Your account balance is insufficient for this transaction. Please enter below this amount ${accountBalance}`);
            }
        }
        else if (Appinterface.interface == 'EASYPAISA TO EASYPAISA') {
            let easy_accoun = await inquirer.prompt([{ name: 'acct_no', type: 'number', message: 'Enter beneficary easypaisa account no: ' }, { name: 'amount', type: 'number',
                    message: 'Enter an amount: ' }]);
            console.log(easy_accoun);
            if (easy_accoun.amount <= accountBalance) {
                accountBalance -= easy_accoun.amount;
                console.log(`Your payment has been done. Now your balance is ${accountBalance}`);
            }
            else {
                console.log(`Your account balance is insufficient for this transaction. Please enter below this amount ${accountBalance}`);
            }
        }
        else if (Appinterface.interface == 'MOBILE TOPUPS') {
            let Topup = await inquirer.prompt([{ name: 'network', type: 'list', message: 'Select your MObile network', choices: ['ZONG', 'TELENOR', 'JAZZ', 'UFONE', 'ONIC'] }, { name: 'cell_no', type: 'number', message: 'Enter your mobile number : ' }, { name: 'topup_amount', type: 'number', message: 'Please enter an amount not below 80 Rs: ' }]);
            if (Topup.topup_amount <= accountBalance && Topup.topup_amount >= 80) {
                console.log(Topup);
                accountBalance -= Topup.topup_amount;
                console.log(`Your mobile Topup has been done. Your accout balance is ${accountBalance}`);
            }
            else {
                console.log(`Invalid amount you have entered. Please enter below this amount ${accountBalance} and above 80 Rs`);
            }
        }
        else if (Appinterface.interface === 'Log out') {
            let Logout = await inquirer.prompt({ name: 'Log_out', type: 'confirm', message: 'Are you sure You want to  session logout out', default: true });
            i = !Logout.Log_out;
        }
    } while (i);
}
else {
    console.log('invalid user_id or password');
}

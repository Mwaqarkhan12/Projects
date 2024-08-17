import inquirer from "inquirer";
let currentpin = 1234;
let currentbalance = 20000;
console.log(`WELCOME TOMEEZAN BANK ATM`);
let Atm_card = await inquirer.prompt({ name: 'card_insert', type: 'confirm', message: 'Pleae insert your ATM card. Press "y" for card enter: ', default: false });
if (Atm_card.card_insert === true) {
    let pin = await inquirer.prompt({ name: 'code', type: 'number', message: 'enter your pin : ' });
    if (pin.code == currentpin) {
        let accountType = await inquirer.prompt({ name: 'typeofaccount', type: 'list', choices: ['current account', 'saving account', 'default'], message: 'select account type' });
        if (accountType.typeofaccount == 'current account' || accountType.typeofaccount == 'default') {
            let modeOfTransaction = await inquirer.prompt({ name: 'txn_mode', type: 'list', message: 'select mode', choices: ['cash withdrawal', 'fast cash', 'balanc check', 'IBFT', 'Bill Payment'] });
            if (modeOfTransaction.txn_mode == 'cash withdrawal') {
                let amount = await inquirer.prompt({ name: 'cash', type: 'number', message: 'enter amount: ' });
                if (amount.cash <= currentbalance) {
                    console.log(`take yuor cash ${amount.cash}`);
                    currentbalance -= amount.cash;
                    console.log(`remaining account balance is ${currentbalance}`);
                }
                else {
                    console.log(`insufficient account balance`);
                }
            }
            else if (modeOfTransaction.txn_mode == 'fast cash') {
                let fastcash = await inquirer.prompt({ name: 'fastCash', type: 'list', message: 'select the cash', choices: ['5,000', '10,000', '15,000', '20,000', '30,000', '50,000', '100,000'] });
                if (fastcash.fastCash == '5,000') {
                    console.log(`take your cash. your remining balance is ${currentbalance -= 5000}`);
                }
                else if (fastcash.fastCash == '10,000') {
                    console.log(`take your cash. your remaining account balance is ${currentbalance -= 10000}`);
                }
                else if (fastcash.fastCash == '15,000') {
                    console.log(`take your cash. your account balance is ${currentbalance -= 15000}`);
                }
                else if (fastcash.fastCash == '20,000') {
                    console.log(`take your cash. yuor account balance is ${currentbalance -= 20000}`);
                }
                else if (fastcash.fastCash == '30,000' || fastcash.fastCash == '50,000' || fastcash.fastCash == '100,000') {
                    console.log(`yout insufficient account balnce`);
                }
            }
            else if (modeOfTransaction.txn_mode == "balanc check") {
                console.log(`your account balance is ${currentbalance}`);
            }
            else {
                console.log(`invalid txn mode selected`);
            }
        }
        else {
            console.log(`invalid account selected`);
        }
    }
    else {
        console.log(`yuo entered an incorrect pin code`);
    }
}
else {
    console.log(`card not detected. Take your card`);
}

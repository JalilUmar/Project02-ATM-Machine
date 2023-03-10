import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Please enter your ID: "
    },
    {
        type: "input",
        name: "userPin",
        message: "Please enter your PIN: "
    },
    {
        type: "list",
        name: "accountType",
        message: "Please select your account Type: ",
        choices: ['Current', 'Saving']
    },
    {
        type: "list",
        name: "transactionType",
        message: "Please select your transaction: ",
        choices: ['Fast Cash', 'Withdraw'],
        when(answer) {
            return answer.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        message: "Please select your amount: ",
        choices: [1000, 2000, 5000, 10000, 20000, 25000],
        when(answer) {
            return answer.transactionType == 'Fast Cash';
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter your amount: ",
        when(answer) {
            return answer.transactionType == 'Withdraw';
        }
    },
]);
if (answer.userId && answer.userPin) {
    let balance = 1000000;
    console.log('Prev Balance =', balance);
    let enteredAmount = answer.amount;
    if (balance >= enteredAmount) {
        const remainingAmount = balance - enteredAmount;
        console.log('Remaining Balance =', remainingAmount);
    }
    else {
        console.log('Insufficent Balance.Please Try Agian.');
    }
}

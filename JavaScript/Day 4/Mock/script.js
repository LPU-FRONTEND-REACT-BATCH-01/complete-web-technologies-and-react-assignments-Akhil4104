let account = {
    balance: 0,
    transactions: []
};

let deposit = amount => {
    if (amount <= 0) {
        console.log("Invalid deposit amount");
        return;
    }
    account.balance += amount;
    account.transactions.push({
        type: "Deposit",
        amount: amount
    });
};

let withdraw = amount => {
    if (amount <= 0) {
        console.log("Invalid withdraw amount");
        return;
    }
    if (amount > 10000) {
        console.log("Withdraw limit exceed");
        return;
    }
    if (account.balance - amount < 500) {
        console.log("Minimum balance should be 500");
        return;
    }

    account.balance -= amount;
    account.transactions.push({
        type: "Withdraw",
        amount: amount
    });
}
let getBalance = () => {
    console.log("Balance:" + account.balance);
};
let getTransaction = () => {
    console.log("Transaction:");
    account.transactions.forEach(t => {
        console.log(`${t.type}:${t.amount}`);
    });
};

deposit(2000);
withdraw(500);
deposit(1000);

getBalance();
getTransaction();
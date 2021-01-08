function atmMaschine(request) {
    var maxMoney = 10000;
    if (request <= maxMoney) {
        var moneyLeft = maxMoney - request;
        console.log(`The amount you requested of ${request}$ is available`);
        console.log(`Money left in account ${moneyLeft}$`);
    }
    else if (request === "Available funds") {
        var checkFunds = maxMoney;
        console.log(`Your available funds are ${maxMoney}$`);
    }
    else if (request === "Add money") {
        var addMoney = parseFloat(prompt("Enter sum of money you wish do add "));
        var newFunds = maxMoney + addMoney;
        console.log(`You have added money, here is your available funds ${newFunds}$`);
    }
    else {
        console.log(`Not enough money on your account, only ${maxMoney}$ available`);
    }
}

atmMaschine(prompt("1.Enter amount of money you want to withdraw  \n2.Check available funds on your account (type: Available funds) \n3.Add money to your funds (type: Add money)"));
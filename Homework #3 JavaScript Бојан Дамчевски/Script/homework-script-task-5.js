function atmMaschine(request) {
    var maxMoney = 10000;
    if (request <= maxMoney) {
        var moneyLeft = maxMoney - request;
        console.log(`The amount you requested of ${request}$ is available`);
        console.log(`Money left in account ${moneyLeft}$`);
    }
    else{
        console.log("Not enough money on your account, only 10 000 $ available");
    }
}

atmMaschine(prompt("Enter amount of money you want to request, MAX 10 000$"));
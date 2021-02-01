$(document).ready(function () {
    let deposit = $("#deposit").hide();
    let withdraw = $("#withdraw").hide();
    let balance = $("#balance").hide();
    let exit = $("#exit").hide();
    let paragraph = $("#paragraph");
    let use = $("#use");
    let firstbalance;
    
    function Person(name, lastname, balance, pin) {
        this.name = name,
        this.lastname = lastname,
        this.balance = balance,
        this.pin = pin,
        this.print = function(){
            paragraph.text(`Welcome ${this.name} ${this.lastname}`);
            this.balance = firstbalance;
        }
    }
    
    let arrayOfUsers = [new Person("John", "Smith", 10000, 0000), new Person("John", "Doe", 14000, 1111), new Person("Helen", "Frink", 8000, 2222)];
    

    balance.click(function () {
        paragraph.text(`Yout balance is ${firstbalance} $`);
    });
    
    deposit.click(function () {
        function deposit() {
            let add = parseFloat(prompt("Enter amount"));
            if (isNaN(add)) {
                paragraph.text(`Invalid input`);
            }
            else {
                firstbalance += add;
                paragraph.text(`The updated balance is ${firstbalance} $`);
            }
        }
        deposit();
    });
    
    withdraw.click(function () {
        function withdraw() {
            let take = parseFloat(prompt("Enter amount"));
            if (isNaN(take)) {
                paragraph.text(`Invalid input`);
            } else {
                if (firstbalance > 0 && firstbalance > take) {
                    firstbalance -= take;
                    paragraph.text(`The updated balance is ${firstbalance} $`);
                }
                else {
                    paragraph.text(`Can not withdraw that amount`);
                }
            }
        }
        withdraw();
    });
    
    exit.click(function () {
        paragraph.text("");
        deposit.hide();
        withdraw.hide();
        balance.hide();
        exit.hide();
        use.show()
    });
    let user;
    function pinCode (){
        let enterPin = parseInt(prompt("Enter pin"));
        for(let usr of arrayOfUsers){
            if(usr.pin === enterPin){
                usr = user;
            }
        }     
        user.print();
    }
    use.click(function () {
        pinCode();
        paragraph.text("");
        deposit.show();
        withdraw.show();
        balance.show();
        exit.show();
        use.hide();
    });

});
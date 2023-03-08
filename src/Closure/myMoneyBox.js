// function moneyBox ( coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`moneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox () {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(34);
myMoneyBox(3456);

const moneyBoxAna = moneyBox();
moneyBoxAna(5);
moneyBoxAna(45);
moneyBoxAna(46);


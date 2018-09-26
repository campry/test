const banknotes = [1, 2, 5, 10, 20, 50, 100].reverse();
const coins = [1, 5, 10, 25, 50].reverse();
let result;
let remainder = [];
let remainderCoins = [];

function submit() {
    const formElements = document.getElementById("calculate-form").elements;

    const total = formElements.total.value;
    const price = formElements.price.value;
    result = total - price;
    const banknotesResult = result.toString().split(".")[0];
    const coinsResult = result.toString().split(".")[1];

    calculate(+banknotesResult);
    if (coinsResult) {
        calculateCoins(+coinsResult);
    }

    document.getElementById('cf-result').innerHTML =createHtmlResult(remainder, remainderCoins);

    remainder = [];
    remainderCoins = [];
}

function calculate(result) {
    for (const banknote of banknotes) {
        if (result >= banknote) {
            remainder.push(banknote);
            result -= banknote;
            if (result >= 1) {
                calculate(result);
                break;
            }
        }
    }
}

function calculateCoins(result) {
    for (const coin of coins) {
        if (result >= coin) {
            remainderCoins.push(coin);
            result -= coin;
            if (result >= 1) {
                calculateCoins(result);
                break;
            }
        }
    }
}

function createHtmlResult(banknotes, coins) {
    let template = `You remainder is: ${result}$ <br>`;
    for (const banknote of banknotes) {
        template += `${banknote}$, `;
    }
    if (coins.length) {
        template += ``;
        for (const coin of coins) {
            coins.indexOf(coin) + 1 === coins.length ? template += `${coin}¢` : template += `${coin}¢, `
        }
    } else {
        template += `0¢`
    }
    return template;
}
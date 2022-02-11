
function getInputValue(inputid) {
    const inputField = document.getElementById(inputid);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    inputField.value = '';
    return amountValue;
}

//add input to balance 
function totalBalance(inputid, inputAmount) {
    const primaryBalance = document.getElementById(inputid);
    const previousBalanceText = primaryBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newTotal = previousBalanceAmount + inputAmount;
    return newTotal;
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputAmount = getInputValue('deposit-input');
    // deposit total 
    depositTotal = document.getElementById('deposit-total');
    const newTotal = totalBalance('deposit-total', inputAmount);
    depositTotal.innerText = newTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balanceText);
    const newBalanceTotal = previousTotalBalance + inputAmount;
    balanceTotal.innerText = newBalanceTotal;
})

// withdrow sec 
document.getElementById('withdrow-btn').addEventListener('click', function () {
    const inputAmount = getInputValue('withdrow-input');

    // withdrow total 
    const withdrowText = document.getElementById('withdraw-total');
    const newTotal = totalBalance('withdraw-total', inputAmount);
    withdrowText.innerText = newTotal;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balanceText);
    const newBalanceTotal = previousTotalBalance - inputAmount;
    balanceTotal.innerText = newBalanceTotal;
})






function getInputValue(inputid) {
    const inputField = document.getElementById(inputid);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    inputField.value = '';
    return amountValue;
}


document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    // deposit total 
    const depositTotal = document.getElementById('deposit-total');
    const previousDeposittext = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDeposittext);
    const newDepositTotal = previousDepositAmount + depositAmount;
    depositTotal.innerText = newDepositTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balanceText);
    const newBalanceTotal = previousTotalBalance + depositAmount;
    balanceTotal.innerText = newBalanceTotal;
})

// withdrow sec 
document.getElementById('withdrow-btn').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdrow-input');
    // newWithdrowtext = withdrawInput.value;
    const newWithdrowAmount = getInputValue('withdrow-input');

    // withdrow total 
    const withdrowText = document.getElementById('withdraw-total');
    const previousWithdrowAmount = parseFloat(withdrowText.innerText);
    const newWithdrowTotal = previousWithdrowAmount + newWithdrowAmount;
    withdrowText.innerText = newWithdrowTotal;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balanceText);
    const newBalanceTotal = previousTotalBalance - newWithdrowAmount;
    balanceTotal.innerText = newBalanceTotal;
})





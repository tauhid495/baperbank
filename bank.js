document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositext = depositInput.value;
    const newDepositAmount = parseFloat(newDepositext);
    // deposit total 
    const depositTotal = document.getElementById('deposit-total');
    const previousDeposittext = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDeposittext);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balanceText);
    const newBalanceTotal = previousTotalBalance + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear field 
    depositInput.value = '';
})

// withdrow sec 
document.getElementById('withdrow-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrow-input');
    newWithdrowtext = withdrawInput.value;
    newWithdrowAmount = parseFloat(newWithdrowtext);

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

    withdrawInput.value = '';

})
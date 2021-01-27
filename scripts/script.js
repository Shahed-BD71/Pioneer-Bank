// Login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const tranArea = document.getElementById('tran-area');
    tranArea.style.display = 'block'
})

// Deposit button event handler.

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
const depositNumber = getInputNumber('depositAmount');

// const depositedAmount = document.getElementById('depositAmount').value;
    // const depositNumber = parseFloat(depositedAmount);

            // Deposit
    // const currentDeposited = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposited);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;

            // Balance
    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById('currentBalance').innerText = totalBalance;


    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = ""
})

// Withdraw button event handler.
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount');
    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1*withdrawNumber);

    document.getElementById('withdrawAmount').value = ""

// const withdrawAmount = document.getElementById('withdrawAmount').value;
    // const WithdrawNumber = parseFloat(withdrawAmount);

})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}
// ************* Login Button Event Handler *************
const signInBtn = document.getElementById('sign-in');
signInBtn.addEventListener('click', function () {
	// console.log("clicked");
	const loginBtn = document.getElementById('login-area');
	loginBtn.style.display = 'none';
	const myBalance = document.getElementById('my-balance');
	myBalance.style.display = 'block';
});

// ************* Deposit Button Event Handler *************
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
	const depositNumber = getInputNumber("depositAmount");

	updateSpantext('currentDeposit', depositNumber);
	updateSpantext('currentBalance', depositNumber);

	document.getElementById('depositAmount').value = '';
});

// ************* Withdraw Button Event Handler *************
const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmountNumber = getInputNumber("withdrawAmount");

    updateSpantext("currentWithdraw", withdrawAmountNumber);
    updateSpantext('currentBalance', -1 * withdrawAmountNumber);
    document.getElementById('withdrawAmount').value = '';
})

function getInputNumber(id) {
    const withdrawAmount = document.getElementById(id).value;
	const withdrawAmountNumber = parseFloat(withdrawAmount);
    return withdrawAmountNumber;
}

function updateSpantext(id, depositNumber) {
	const currentBalance = document.getElementById(id).innerText;
	const currentBalanceNumber = parseFloat(currentBalance);
	const totalBalance = depositNumber + currentBalanceNumber;
	document.getElementById(id).innerText = totalBalance;
}

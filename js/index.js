const signInBtn = document.getElementById('sign-in');
signInBtn.addEventListener('click', function(){
    // console.log("clicked");
    const loginBtn = document.getElementById('login-area');
    loginBtn.style.display = "none";
    const myBalance = document.getElementById('my-balance');
    myBalance.style.display = "block";
})
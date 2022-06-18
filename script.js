var loginBtn = document.getElementById("login-btn");
var main_page = document.getElementById("main-page");
main_page.style.display="none";
loginBtn.addEventListener('click',function(){
    var login_box = document.getElementById("login-box");
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    //login_box.style.display="none";

    if(email==''){
        alert('email is required');
    }
    else if(pass==''){
        alert('password id required');
    }
    else{
        login_box.style.display="none";
        main_page.style.display="block"; 
    }
});

//add deposit 

var Add_depositBTN = document.getElementById("Add_depositBTN");
Add_depositBTN.addEventListener('click',function(){

    var deposit_input = document.getElementById("deposit_input").value;
    var depositNewIput = parseFloat(deposit_input);

    var total_deposit = document.getElementById("total_deposit").innerHTML;
    var total_NewDeposit = parseFloat(total_deposit);

    var Total_Deposit = depositNewIput+total_NewDeposit;

    document.getElementById("total_deposit").innerHTML=Total_Deposit.toFixed(2);

    //change balance

    var total_balance = document.getElementById("total_balance").innerHTML;
    var NewTotal_balance = parseFloat(total_balance);

    var Total_New_Balance = depositNewIput + NewTotal_balance;
    
    document.getElementById("total_balance").innerHTML=Total_New_Balance.toFixed(2);

});


//end deposit

//withdra here
var withdraw = document.getElementById("withdraw");
withdraw.addEventListener('click',function(){
    var withdraw_input = document.getElementById("withdraw_input").value;
    var Newwithdraw_input = parseFloat(withdraw_input);

    var total_withdraw = document.getElementById("total_withdraw").innerHTML;
    var Newtotal_withdraw = parseFloat(total_withdraw);

    var Total_withdraw = Newtotal_withdraw+Newwithdraw_input;

    document.getElementById("total_withdraw").innerHTML=Total_withdraw.toFixed(2);


//multification

var TotalBalance = document.getElementById("total_balance").innerHTML;
var NewBalance = parseFloat(TotalBalance);
var multification = NewBalance-Newwithdraw_input;
document.getElementById("total_balance").innerHTML=multification.toFixed(2);

});






//Withdraw end
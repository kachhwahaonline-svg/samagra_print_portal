function login(){

let opid = "7067544594";
let name = "Mukesh Kumar Yadav";
let pass = document.getElementById("password").value;

if(pass=="1234")
{

localStorage.setItem("operatorID",opid);
localStorage.setItem("operatorName",name);

let logins = localStorage.getItem("totalLogin") || 0;
logins++;

localStorage.setItem("totalLogin",logins);

window.location="pages/dashboard.html";

}
else
{
alert("Wrong Password");
}

}

function openAdmin(){

window.location="admin/admin-login.html";

}
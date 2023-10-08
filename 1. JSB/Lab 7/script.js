let logginButton = document.getElementById("loggin")

console.log(logginButton)

logginButton.addEventListener("click", handleClick)

// function handleClick(e){
//     console.log(e.target);
// }

let username = document.getElementById("username")
let password = document.getElementById("password")
let wrongusername = document.getElementById("invaliduser")
let wrongpassword = document.getElementById("invalidpass")
let success = document.getElementById("success")
let rightUser = "hoang1234"
let rightPass =  "hoang1234"


function handleClick(e){
    console.log(username.value)
    console.log(password.value)

    let userName = username.value
    let passWord = password.value
    
    if(userName.length < 6){
        wrongusername.innerText = "Username wasn't existing"
    }

    if(passWord.length < 6){
        wrongpassword.innerText = "Unvailable password"
    } else if (userName == rightUser && passWord == rightPass){
        success.innerText = "Login Successfully"
        alert("xin chao " + userName)
    }
 {

 }}





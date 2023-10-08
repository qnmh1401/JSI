var emailaddress = document.getElementById("email")
const username = document.getElementById("signinname")
const password = document.getElementById("pass")
var signUpButton = document.getElementById("signupbutton")
var invalidEmail = document.getElementById("invalidemail")
var invalidName = document.getElementById("invalidloginname")
var invalidPass = document.getElementById("invalidloginpass")

console.log(signUpButton)

signUpButton.addEventListener("click", handleSignUpClick)


function handleSignUpClick (e){
    

    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let userName = username.value
    let passWord = password.value

    if(emailaddress.value == ""){
        invalidEmail.innerText = "You have to fill in your email address"    
    }else if(!filter.test(emailaddress.value)) {
        invalidEmail.innerText = "Invalid Email Address"
    }else{
        invalidEmail.innerText = ""
    }

    if(userName == ""){
        invalidName.innerText = "You have to fill in your User Name"
    }else if(!userName == ""){
        invalidName.innerText = ""
    }

    if(passWord == ""){
        invalidPass.innerText = "You have to fill in your Password"
    }else if(passWord.length < 6){
        invalidPass.innerText = "Your password must be more than 6 characters"
    }else{
        invalidPass.innerText = ""
    }
    
    if(!emailaddress.value == ""
    && filter.test(emailaddress.value)
    && !userName == ""
    && !passWord == ""
    && passWord.length > 6
    ){
        window.location = "Login.html"
    }


    const accounts = [
        {
            name : username.value,
            pass : password.value
        }
    ]


    localStorage.setItem("accounts", JSON.stringify(accounts))
}
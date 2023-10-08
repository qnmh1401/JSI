let signInButton = document.getElementById("loginbutton")

console.log(signInButton)

signInButton.addEventListener("click", handleLogInClick)


let loginname = document.getElementById("loginname")
let loginpass = document.getElementById("pass")
let invalidname = document.getElementById("invalidloginname")
let invalidpass = document.getElementById("invalidloginpass")

const accounts = JSON.parse(localStorage.getItem("accounts"))


function handleLogInClick (e) {
    console.log(loginname.value)
    console.log(loginpass.value)

    let loginName = loginname.value
    let loginPass = loginpass.value
    let count = 0
    for(let account of accounts)

    if(loginName == "" ){
        invalidname.innerText = "Please fill in your Login Name"
    }else{
        invalidname.innerText = ""
    }
    if(loginPass == "" ){
        invalidpass.innerText = "Please fill in your Password"
    }else {invalidpass.innerText = ""

    }

    
for(let account of accounts){
    
    if(account.name === loginName 
        && account.pass === loginPass){
        window.location = "Mainpage.html"
    }else if(!loginName == "" 
            &&!loginPass == "" ){
        invalidname.innerText = "Username doesn't exist"
        invalidpass.innerText = "Wrong Password"
    }
}
}



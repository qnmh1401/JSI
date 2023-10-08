let logginButton = document.getElementById("loggin")

console.log(logginButton)

logginButton.addEventListener("click", handleSignUpClick)


let name = document.getElementById("name")
let age = document.getElementById("age")
let number = document.getElementById("number")
let checkmale = document.getElementById("male")
let checkfemale = document.getElementById("female")
let checkagree = document.getElementById("agree")


function handleSignUpClick(e){
    console.log(name.value)
    console.log(age.value)
    console.log(number.value)
    
    let Name = name.value
    let Age = age.value
    let Number = number.value

    if(Name == ""){
        invalidname.innerText = "You have to sign your name here"
    }

    if (Age == ""){
        invalidage.innerText = "You have to sign your age here"
    }
    if(Number == "" ){
        invalidnumber.innerText = "You have to sign your phone number here"
    }
    if(!checkmale.checked && !checkfemale.checked){
        setTimeout(() => {
            alert('You have to choose your gender!')
        }, 1000);
    }
    if(!checkagree.checked){
        setTimeout(() => {
            alert('Please agree to our TERMS and PRIVACY')
        }, 1000);
    }
}




let signInButton = document.getElementById("loginbutton")

console.log(signInButton)

signInButton.addEventListener("click", handleLogInClick)


let loginname = document.getElementById("loginname")
let loginpass = document.getElementById("pass")

function handleLogInClick (e) {
    console.log(loginname.value)
    console.log(loginpass.value)
}

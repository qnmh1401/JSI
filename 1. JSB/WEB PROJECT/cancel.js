let submitButton = document.getElementById("cancelorder");
let reasonCheckbox = document
.getElementById("reason")
.getElementsByTagName("input")

console.log(submitButton);

submitButton.addEventListener("click", handleSubmitClick)

let checkReason = document.getElementById("checkbox")
let checkedFalse = document.getElementById("checked-false")
let checkedfalse = checkedFalse.value

function handleSubmitClick (e) {
var checked = document.querySelectorAll("input:checked")

if(checked.length === 0) {
    checkedFalse.innerText = "You must choose a reason to cancel the order"
}else {
    window.location = "Canceled-order.html"
}

}

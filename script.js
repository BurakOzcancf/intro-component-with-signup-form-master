let form=document.getElementById("form")
let firstName = document.getElementById("name")
let lastName=document.getElementById("surname")
let email=document.getElementById("email")
let password = document.getElementById("password")
let input=document.getElementsByTagName("input")
let errorMsg=document.querySelectorAll(".registration__error")
let errorImg=document.querySelectorAll(".registration__image")
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

for (i = 0; i < input.length; i++) {
    input[i].addEventListener('change', function () {
        if (this.value.trim() == "") {
            this.style.border = "2px solid red"    
        }
        else {
            this.style.border = "2px solid green"
        } 
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    dataValidation()  
})



function dataValidation() {
    for (i = 0; i < input.length; i++){
        if (input[i].value.trim() == "") {
            input[i].style.border = "2px solid red"
            errorMsg[i].style.visibility = "visible"
            errorImg[i].style.visibility = "visible"
            console.log("h")   
        }
        else {
            input[i].style.border = "2px solid green"
            errorMsg[i].style.visibility = "hidden"            
            errorImg[i].style.visibility = "hidden"            
        }    
    }
    if (!emailRegex.test(email.value)) {
        email.style.border = "2px solid red"   
        errorMsg[2].style.visibility = "visible"            
        errorImg[2].style.visibility = "visible"         
        
    }
    

    
    //  if (firstName.value.trim()) {
    //      firstName.style.border="2px solid green"
    //  }
    //  if (firstName.value.trim() === "" || firstName.value.trim() == null) {
    //      firstName.style.border = "2px solid red"
    //  }
    //  if (lastName.value.trim()) {
    //      lastName.style.border="2px solid green"
    //  }
    //  if (lastName.value.trim() === "" || lastName.value.trim() == null) {
    //      lastName.style.border="2px solid red"
    //  }
    //  if (lastName.value.trim()) {
    //      lastName.style.border="2px solid green"
    //  }
    //  if (!emailRegex.test(email.value)) {
    //      email.style.border = "2px solid red"
    //  }
    //  if (password.value.trim() === "" || password.value.trim() == null) {
    //      password.style.border="2px solid red"
    //  }
    //  if (password.value.length <8) {
    //      password.style.border="2px solid red"
    //  }
    //  if (!password.value.includes(".","/")) {
    //      password.style.border="2px solid cyan"
    //  }
    //console.log(emailRegex.test(email.value))
    //console.log(email.value)
}
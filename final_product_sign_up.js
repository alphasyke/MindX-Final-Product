function logInfo() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    if (email == "" || password == "" || password2 == ""){
        alert("Please enter your details");
        return;
    }
    if (password != password2){
        alert("Your password and confirmation password don't match");
        return;
    }
    if (password.length < 9 || password2.length < 9){
        alert("Your password must be greater than 8 characters");
    }
    if (email.includes("@") && email.includes(".com")){
        return;
    }
    else {
        alert("email is not valid");
    }
}

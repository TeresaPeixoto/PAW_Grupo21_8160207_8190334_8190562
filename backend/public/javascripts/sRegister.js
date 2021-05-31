function showPassword() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function validateData() {
    var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$/;
    var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var namePattern = /^[0-9]{0,0}[A-Z{1}[a-z\s]*$/gm;
    var namePattern = /^[0-9]{0,0}[A-Z{1}[a-z\s]*$/gm;
    var birthPattern = document.getElementById("birthDate").value;


    if(!(document.getElementById("userName").value.match(namePattern))){
        alert("Name must consist only of words.");
        return false;
    }
    if(!(document.getElementById("email").value.match(emailPattern))){
        alert("Invalid email type.");
        return false;
    } 
    if(!(document.getElementById("pass").value.match(passwordPattern))){
        alert("Password must have at least one number and one special character.");
        return false;
    }
    if((document.getElementById("birthDate").value== "")){
        alert("Date must exist.");
        return false;
    }
    else{
        var d = new Date(birthPattern);
        var year = d.getFullYear();
        var yearNow = new Date().getFullYear();
        if(yearNow-year <18){
            alert("Age must be more than 18.");
            return false;
        }
    }
    
}
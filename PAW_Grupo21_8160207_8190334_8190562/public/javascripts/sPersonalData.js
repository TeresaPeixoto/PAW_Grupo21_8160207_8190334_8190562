function validateData() {
    var numberPattern = /[1-9][0-9]{8}/gm;
    var numberCCPattern = /[1-9][0-9]{7}/gm;
    var numberCP1Pattern = /[1-9][0-9]{3}/gm;
    var numberCP2Pattern = /[1-9][0-9]{2}/gm;
    var doorNumberPattern = /[1-9][0-9]{0,6}/gm;
    var namePattern = /^[0-9]{0,0}[A-Z{1}[a-z\s]*$/gm;
    var birthPattern = document.getElementById("birthDate").value;

    if((document.getElementById("birthDate").value== "")){
        alert("Date must exist.");
        return false;
    }
    else{
        var d = new Date(birthPattern);
        var year = d.getFullYear();
        var yearNow = new Date().getFullYear();
        console.log(yearNow);
        if(yearNow-year <18){
            alert("Age must be more than 18.");
            return false;
        }
    }

    if (!(document.getElementById("cellphone").value.length == 9)) {
        alert("Cellphone must be exactly 9 characters.");
        return false;
    }
    if (!(document.getElementById("cellphone").value.match(numberPattern))) {
        alert("Cellphone number MUST be a number.");
        return false;
    }
    if (!(document.getElementById("cc").value.length == 8)) {
        alert("C.C. number must be exactly 9 characters.");
        return false;
    }
    if (!(document.getElementById("cc").value.match(numberCCPattern))) {
        alert("C.C number MUST be a number.");
        return false;
    }
    if(!(document.getElementById("street").value.match(namePattern))){
        alert("Street must consist only of words.");
        return false;
    }
    if (document.getElementById("doorNumber").value.length > 6) {
        alert("Door number must be bellow or exactly 6 characters.");
        return false;
    }
    if (!(document.getElementById("doorNumber").value.match(doorNumberPattern))) {
        alert("Door number must be a number above 0.");
        return false;
    }    
    if(!(document.getElementById("district").value.match(namePattern))){
        alert("District must consist only of words.");
        return false;
    }
    if(!(document.getElementById("locality").value.match(namePattern))){
        alert("Locality must consist only of words.");
        return false;
    }
    if(!(document.getElementById("postalCode1").value.match(numberCP1Pattern))){
        alert("PostalCode1 MUST be a number.");
        return false;
    }
    if (!(document.getElementById("postalCode1").value.length == 4)) {
        alert("PostalCode1 must be exactly 4 characters.");
        return false;
    }
    if(!(document.getElementById("postalCode2").value.match(numberCP2Pattern))){
        alert("PostalCode2 MUST be a number.");
        return false;
    }
    if (!(document.getElementById("postalCode2").value.length == 3)) {
        alert("PostalCode2 must be exactly 3 characters.");
        return false;
    }
    
}
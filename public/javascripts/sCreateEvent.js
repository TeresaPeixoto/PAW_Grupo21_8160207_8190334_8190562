function validateDataEvent() {
    var namePattern = /^[0-9]{0,0}[A-Z{1}[a-z\s]*$/gm;

    if(document.getElementById("eventName").value.length < 6){
        alert("Event Name must be above 6 characters.");
        return false;
    }
    if(!(document.getElementById("eventName").value.match(namePattern))){
        alert("Event Name must consist only of words.");
        return false;
    }
    if(document.getElementById("local").value.length < 6){
        alert("Local must be above 6 characters.");
        return false;
    }
    if(!(document.getElementById("local").value.match(namePattern))){
        alert("Local must consist only of words.");
        return false;
    }
    if((document.getElementById("eventDate").value== "")){
        alert("Date must exist.");
        return false;
    }
    else{
        var currentDate = new DateTime();
        var dateTime = new Date(document.getElementById("eventDate").value);
        alert(currentDate);
        alert(dateTime);

       
    }
}
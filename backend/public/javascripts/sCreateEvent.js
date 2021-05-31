function validateDataEvent() {
  var namePattern = /^[0-9]{0,0}[A-Z{1}[a-z\s]*$/gm;
  var pricePattern = /[1-9][0-9]{0,5}/gm;


  if (!document.getElementById("eventName").value.match(namePattern)) {
    alert("Event Name must consist only of words.");
    return false;
  }
  if (!document.getElementById("local").value.match(namePattern)) {
    alert("Local must consist only of words.");
    return false;
  }
  if (!(document.getElementById("price").value.match(pricePattern))) {
    alert("Price number MUST be a number.");
    return false;
  }
  if (!(document.getElementById("lugares").value.match(pricePattern))) {
    alert("Lugar number MUST be a number.");
    return false;
  }
  if (!document.getElementById("description").value.match(namePattern)) {
    alert("Description must consist only of words.");
    return false;
  }
}

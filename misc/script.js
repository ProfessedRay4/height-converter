var elem = document.getElementById("inches");
elem.onkeyup = function(e){
    if(e.keyCode == 13){
        calculateHeight();
    }
} 

function calculateHeight() {
    // Convert the input values to numbers
    var feet = parseInt(document.getElementById("feet").value, 10);
    var inches = parseInt(document.getElementById("inches").value, 10);

    if (isNaN(feet) || isNaN(inches) || feet < 0 || feet >= 8 || inches < 0 || inches >= 12) {
        document.getElementById("result").innerHTML = "Invalid input";
        document.getElementById("result").style.color = "red";
        return;
    }
    var height = (feet * 12) + inches;

    document.getElementById("result").innerHTML = "You are " + height + " in";
    document.getElementById("result").style.color = "#228B22";
}

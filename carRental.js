function resetFunction() {
    document.getElementById("rentalDetails").reset();
    location.reload();
}

function selectedCar() {
    var selected = document.getElementById("carSelect");
}

function calculateCost() {
    $(document).ready(function() {
        var firstName = document.getElementById("fName").value; {
            var lastName = document.getElementById("lName").value;
            if (typeof firstName !== 'String') {
                window.alert("First Name should be a string");
            }
            if (typeof lastName !== 'String') {
                window.alert("Last Name should be a string");
            }
        }
        var selectedCar = document.getElementById("car").value;
        var daysRequired = document.getElementById("days").value;
        var costPerDay = 0;
        switch (selectedCar) {
            case "AudiR8":
                costPerDay = 200;
                break;
            case "LamborghiniAventador":
                costPerDay = 180;
                break;
            case "LamborghiniHuracan":
                costPerDay = 200;
                break;
            case "Porsche911":
                costPerDay = 150;
                break;
            case "HondaNSX":
                costPerDay = 100;
                break;
            case "Ferrari":
                costPerDay = 300;
                break;
            case "McLarenP1":
                costPerDay = 150;
                break;
            case "Porsche918":
                costPerDay = 400;
                break;
        }
        var totalCost = costPerDay * daysRequired;
        document.getElementById("output").innerHTML = "You've rented a(n) " + selectedCar +
            " for " + daysRequired + " day(s).<br>" +
            "The total rental cost is $" + totalCost + ".";
        $('#output').css({ "color": "#FF8C00", "font-family": "Times New Roman", "font-size": "20px" });
        console.log(document.getElementById("output").innerHTML);
    });
}
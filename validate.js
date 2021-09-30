function validateRequired (){
    let requiredElements = document.querySelectorAll(".necessary");
    let areThereEmptyFields = false;
    for(
        let iterator = 0; //initialization
        iterator < requiredElements.length; //condition check
        iterator++//next iteration
        ) {
            if(requiredElements[iterator].value === "") {
                areThereEmptyFields = true;
                break;
            }
        }
        if(areThereEmptyFields) {
            alert("Required fields are blank");
            return false;
        }
    }
    function validateForm() {
        let fName = document.getElementById("fname");
        let lName = document.querySelector("#lname");
        let email = document.querySelector("input[id='email']");
        
        if(lName.value === "" || fName.value === "" || email.value === "") {
            alert("Required fields are blank");
            return false;
        }
    }
}
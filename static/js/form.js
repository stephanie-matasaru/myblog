function validateForm() {
    let firstName = document.getElementsByName("firstName")[0].value;
    let lastName = document.getElementsByName("lastName")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let address = document.getElementsByName("address")[0].value;
    
    let correct = 1;
    
    if (firstName === "" || lastName === "" || email === "" || address === "") {
        alert("All fields are required!");
        correct = 0;
        return false;
    }
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        correct = 0;
        return false;
    }
    
    if (correct === 1) {
        alert("Success!");
    }
    return true;
}
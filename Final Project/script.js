// Add this script to handle login functionality

function login() {
    // Simplified login logic, replace with actual authentication code
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "pass") {
        alert("Login successful!");
        // Redirect to the profile page or perform other actions
    } else {
        alert("Invalid username or password");
    }
}

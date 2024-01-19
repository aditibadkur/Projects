

    function loginUser() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "user123" && password === "pass123") {
        alert("Login successful!");
        } else {
        alert("Login failed. Please check your credentials.");
        }
    }
    



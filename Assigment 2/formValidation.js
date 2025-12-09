document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (fname === "" || lname === "" || email === "" || pass === "") {
        alert("Please fill all fields");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email address");
        return;
    }

    if (pass.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    alert("Account Created Successfully!");
});

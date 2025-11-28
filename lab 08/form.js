document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("experience-form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const age = document.getElementById("age");

    function validateName() {
        if (name.value.trim() === "") {
            name.classList.add("invalid");
            return false;
        } else {
            name.classList.remove("invalid");
            return true;
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add("invalid");
            return false;
        } else {
            email.classList.remove("invalid");
            return true;
        }
    }

    function validatePhone() {
        const phonePattern = /^\+?\d{12}$/;
        if (!phonePattern.test(phone.value.trim())) {
            phone.classList.add("invalid");
            return false;
        } else {
            phone.classList.remove("invalid");
            return true;
        }
    }

    function validateAge() {
        const ageValue = parseInt(age.value);
        if (isNaN(ageValue) || ageValue < 16 || ageValue > 80) {
            age.classList.add("invalid");
            return false;
        } else {
            age.classList.remove("invalid");
            return true;
        }
    }

    name.addEventListener("blur", validateName);
    email.addEventListener("blur", validateEmail);
    phone.addEventListener("blur", validatePhone);
    age.addEventListener("blur", validateAge);

  
    form.addEventListener("submit", function(event) {
       
        event.preventDefault();
        
        let isValid = true;
        let errorMessage = "";

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isAgeValid = validateAge();

        const gender = document.querySelector('input[name="gender"]:checked');
        let isGenderValid = true;
        if (!gender) {
            isGenderValid = false;
            errorMessage += "Please select a gender.\n";
        }

        if (!isPhoneValid) {
             errorMessage += "Phone number must be 13 digits.\n";
        }

        if (isNameValid && isEmailValid && isPhoneValid && isAgeValid && isGenderValid) {
            alert("Form submitted successfully!");
            form.reset();
            [name, email, phone, age].forEach(field => field.classList.remove("invalid"));
        } else {
            alert("Please correct the highlighted fields.\n" + errorMessage);
        }
    });
});
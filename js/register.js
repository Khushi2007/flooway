function checkExistingUsers() {
    const existingUsers = JSON.parse(localStorage.getItem("flooway_users")) || [];
    let isAnyUserLoggedIn = false;
    let currentUID = null;
    if (existingUsers.length > 0) {
        existingUsers.forEach(user => {
            if (user.isLoggedIn) {
                isAnyUserLoggedIn = true;
                currentUID = user.id;
            }
        });
    }

    if (isAnyUserLoggedIn) {
        window.location.href = `index.html?uid=${currentUID}`;
    }
}

function showError(input, message) {
    input.classList.add("invalid");
    const error = input.nextElementSibling;
    error.textContent = message;
    error.style.display = "block";
}

function clearError(input) {
    input.classList.remove("invalid");
    const error = input.nextElementSibling;
    error.style.display = "none";
}

function checkEmail(email) {
    const existingUsers = JSON.parse(localStorage.getItem("flooway_users")) || [];
    let validEmail = true;
    existingUsers.forEach(user => {
        if (user.email === email) {
            validEmail = false;
        }
    });
    return validEmail;
}

checkExistingUsers();

const form = document.getElementById("registerForm");
const modal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const age = document.getElementById("age");
    const address = document.getElementById("address");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    [name, email, phone, age, address, password, confirmPassword].forEach(input => clearError(input));

    if (!name.value.trim()) {
        showError(name, "Name is required");
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "Enter a valid email");
        valid = false;
    }

    if (!phone.value) {
        showError(phone, "Phone number is required");
        valid = false;
    }

    if (age.value < 5) {
        showError(age, "Minimum age is 5");
        valid = false;
    }

    if (!address.value.trim()) {
        showError(address, "Address is required");
        valid = false;
    }

    if (!password.value.trim()) {
        showError(password, "Password is required");
        valid = false;
    }

    if (!confirmPassword.value.trim()) {
        showError(confirmPassword, "Confirmation is required");
        valid = false;
    }

    if (password.value.trim().length < 6) {
        showError(password, "Password must be at least 6 characters long");
        valid = false;
    }

    if (confirmPassword.value.trim() != password.value.trim()) {
        showError(password, "Passwords don't match");
        showError(confirmPassword, "Passwords don't match");
        valid = false;
    }

    if (!checkEmail(email.value.trim())) {
        showError(email, "Email already in use");
        valid = false;
    }

    if (valid) {
        const existingUsers = JSON.parse(localStorage.getItem("flooway_users")) || [];

        const n = existingUsers.length;

        let uid = 0;

        if (n != 0) uid = existingUsers[n-1].id + 1;

        const user = {
            id: uid,
            name: name.value.trim(),
            email: email.value.trim(),
            phone: phone.value,
            age: age.value,
            address: address.value.trim(),
            password: password.value.trim(),
            isLoggedIn: true
        };

        existingUsers.push(user);

        localStorage.setItem("flooway_users", JSON.stringify(existingUsers));

        modal.style.display = "flex";
        form.reset();
        setTimeout(() => {
            window.location.href = `index.html?uid=${uid}`;
        }, 3000);

    }

});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
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



checkExistingUsers();

const form = document.getElementById("loginForm");
const modal = document.getElementById("successModal");
const errorModal = document.getElementById("errorModal");
const closeModal = document.getElementById("closeModal");
const closeErrorModal = document.getElementById("closeErrorModal");

function popUpError(title, message) {
    const errorBoxTitle = document.getElementById("errorBoxTitle");
    const errorBoxMessage = document.getElementById("errorBoxMessage");
    errorBoxTitle.textContent = title;
    errorBoxMessage.textContent = message;
    errorModal.style.display = "flex";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    [email, password].forEach(input => clearError(input));

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "Enter a valid email");
        valid = false;
    }

    if (!password.value.trim()) {
        showError(password, "Password is required");
        valid = false;
    }

    if (valid) {
        const existingUsers = JSON.parse(localStorage.getItem("flooway_users")) || [];
        
        let isEmailValid = false;
        let validPassword = null;
        let uid = null;

        if (existingUsers.length > 0) {
            existingUsers.forEach(user => {
                if (user.email === email.value.trim()) {
                    isEmailValid = true;
                    validPassword = user.password;
                    uid = user.id;
                }
            });
        }

        if (!isEmailValid) {
            popUpError("Invalid Email ❌", "No account with this email address exists!");
            return;
        } else {
            if (password.value.trim() !== validPassword) {
                popUpError("Incorrect Password ❌", "The password you entered is incorrect. Please check again!");
                return;
            } else {
                existingUsers[uid].isLoggedIn = true;
                localStorage.setItem("flooway_users", JSON.stringify(existingUsers));
                modal.style.display = "flex";
                form.reset();
                setTimeout(() => {
                    window.location.href = `index.html?uid=${uid}`;
                }, 3000);
            }
        }

    }
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

closeErrorModal.addEventListener("click", () => {
    errorModal.style.display = "none";
});
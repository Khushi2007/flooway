const planTripPageParams = new URLSearchParams(window.location.search);
const userId = planTripPageParams.get("uid");

const form = document.getElementById("tripForm");
const modal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");

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

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const ageInput = document.getElementById("age");
const addressInput = document.getElementById("address");

const allUsers = JSON.parse(localStorage.getItem("flooway_users")) || [];
const currentUser = allUsers[userId];

nameInput.value = currentUser.name;
emailInput.value = currentUser.email;
phoneInput.value = currentUser.phone;
ageInput.value = currentUser.age;
addressInput.value = currentUser.address;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;
    
    const travelers = document.getElementById("travelers");
    const destination = document.getElementById("destination");
    const date = document.getElementById("date");
    const notes = document.getElementById("notes");

    [travelers].forEach(input => clearError(input));

    if (travelers.value < 1) {
        showError(travelers, "At least 1 traveler required")
        valid = false;
    }

    if (valid) {
        const tripData = {
            uid: userId,
            travelers: travelers.value,
            destination: destination.value,
            date: date.value,
            notes: notes.value.trim(),
            savedOn: new Date().toString(),
            formType: "Plan Your Trip"
        };

        const existingTrips = JSON.parse(localStorage.getItem("planTripData")) || [];

        existingTrips.push(tripData);

        localStorage.setItem("planTripData", JSON.stringify(existingTrips));

        modal.style.display = "flex";
        form.reset();
    }
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
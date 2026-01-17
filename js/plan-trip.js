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

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;
    
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const travelers = document.getElementById("travelers");
    const age = document.getElementById("age");
    const address = document.getElementById("address");
    const destination = document.getElementById("destination");
    const date = document.getElementById("date");
    const notes = document.getElementById("notes");

    [name, email, phone, travelers, age, address].forEach(input => clearError(input));

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

    if (travelers.value < 1) {
        showError(travelers, "At least 1 traveler required")
        valid = false;
    }

    if (!address.value.trim()) {
        showError(address, "Address is required");
        valid = false;
    }

    if (valid) {
        const tripData = {
            name: name.value.trim(),
            email: email.value.trim(),
            phone: phone.value.trim(),
            travelers: travelers.value,
            age: age.value,
            address: address.value.trim(),
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
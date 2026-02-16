const bookPackagePageParams = new URLSearchParams(window.location.search);
const key = bookPackagePageParams.get("plan");
const userId = bookPackagePageParams.get("uid");

const packageNames = {
    gryffindor: "Bravery & Firebound Trails",
    slytherin: "Ambition in Emerald Shadows",
    hufflepuff: "Hearth & Wand Retreat",
    ravenclaw: "Paths of Wit & Wonder",
    hogwarts: "The Complete Wizarding Passage",
    forbidden_forest: "Secrets of the Dark Forest"
};

const packageAvailableDates = {
    gryffindor: [
        "31 July — 3 August",
        "9 August — 12 August"
    ],
    slytherin: [
        "13 July — 16 July",
        "18 July — 21 July"
    ],
    hufflepuff: [
        "12 August — 14 August",
        "21 August — 23 August"
    ],
    ravenclaw: [
        "16 July — 19 July",
        "26 July — 29 July"
    ],
    hogwarts: [
        "10 September — 14 September",
        "17 September — 21 September"
    ],
    forbidden_forest: [
        "31 Oct — 2 Nov",
        "9 Nov — 11 Nov"
    ]
};

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const ageInput = document.getElementById("age");
const addressInput = document.getElementById("address");
const packageInput = document.getElementById("package");
const packageDateOption1 = document.getElementById("date1");
const packageDateOption2 = document.getElementById("date2");

const allUsers = JSON.parse(localStorage.getItem("flooway_users")) || [];
const currentUser = allUsers[userId];

nameInput.value = currentUser.name;
emailInput.value = currentUser.email;
phoneInput.value = currentUser.phone;
ageInput.value = currentUser.age;
addressInput.value = currentUser.address;

if (key && packageNames[key]) {
    packageInput.value = packageNames[key];
    packageDateOption1.value = packageAvailableDates[key][0];
    packageDateOption1.textContent = packageAvailableDates[key][0];
    packageDateOption2.value = packageAvailableDates[key][1];
    packageDateOption2.textContent = packageAvailableDates[key][1];
}

const form = document.getElementById("bookingForm");
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

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    
    const travelers = document.getElementById("travelers");
    const date = document.getElementById("date");
    const requests = document.getElementById("requests");

    [travelers].forEach(input => clearError(input));


    if (travelers.value < 1) {
        showError(travelers, "At least 1 traveler required")
        valid = false;
    }

    if (valid) {
        const bookingData = {
            uid: userId,
            travelers: travelers.value,
            packageKey: key,
            packageTitle: packageNames[key],
            date: date.value,
            requests: requests.value.trim(),
            savedOn: new Date().toString(),
            formType: "Package Booking"
        };

        const existingBookings = JSON.parse(localStorage.getItem("bookPackageData")) || [];

        existingBookings.push(bookingData);

        localStorage.setItem("bookPackageData", JSON.stringify(existingBookings));

        modal.style.display = "flex";
        form.reset();
        packageInput.value = packageNames[key];
    }
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

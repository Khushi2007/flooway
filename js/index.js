const params = new URLSearchParams(window.location.search);
const uid = params.get("uid");

const errorModal = document.getElementById("errorModal");
const closeErrorModal = document.getElementById("closeErrorModal");

const existingUsers = JSON.parse(localStorage.getItem("flooway_users")) || [];

if (!(existingUsers.length != 0 && existingUsers[uid] && existingUsers[uid].isLoggedIn)) {
    const errorBoxTitle = document.getElementById("errorBoxTitle");
    const errorBoxMessage = document.getElementById("errorBoxMessage");
    errorBoxTitle.textContent = "Access Denied! 💥";
    errorBoxMessage.textContent = "User must be logged in to access this page!";
    errorModal.style.display = "flex";
    setTimeout(() => {
        window.location.href = "login.html";
    }, 5000);
    
}

closeErrorModal.addEventListener("click", () => {
    errorModal.style.display = "none";
});

const brandLink = document.getElementById("brandLink");
const indexLink = document.getElementById("indexLink");
const destinationsLink = document.getElementById("destinationsLink");
const destinationsLink2 = document.getElementById("destinationsLink2");
const packagesLink = document.getElementById("packagesLink");
const packagesLink2 = document.getElementById("packagesLink2");
const aboutLink = document.getElementById("aboutLink");
const planYourTripLink = document.getElementById("planYourTripLink");
const yourTripsLink = document.getElementById("yourTripsLink");
const contactLink = document.getElementById("contactLink");
const profileLink = document.getElementById("profileLink");

brandLink.setAttribute("href", `index.html?uid=${uid}`);
indexLink.setAttribute("href", `index.html?uid=${uid}`);
destinationsLink.setAttribute("href", `destinations.html?uid=${uid}`);
if (destinationsLink2) {
    destinationsLink2.setAttribute("href", `destinations.html?uid=${uid}`);
}
packagesLink.setAttribute("href", `packages.html?uid=${uid}`);
if (packagesLink2) {
    packagesLink2.setAttribute("href", `packages.html?uid=${uid}`);
}
aboutLink.setAttribute("href", `about.html?uid=${uid}`);
planYourTripLink.setAttribute("href", `plan-your-trip.html?uid=${uid}`);
yourTripsLink.setAttribute("href", `your-trips.html?uid=${uid}`);
contactLink.setAttribute("href", `contact.html?uid=${uid}`);
profileLink.setAttribute("href", `profile.html?uid=${uid}`);
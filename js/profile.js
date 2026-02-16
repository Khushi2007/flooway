const profilePageParams = new URLSearchParams(window.location.search);
const userId = profilePageParams.get("uid");

const allUsers = JSON.parse(localStorage.getItem("flooway_users")) || [];
const currentUser = allUsers[userId];

const profileName = document.getElementById("profileName");
const fullName = document.getElementById("profileFullName");
const email = document.getElementById("profileEmail");
const phone = document.getElementById("profilePhone");
const age = document.getElementById("profileAge");
const address = document.getElementById("profileAddress");

profileName.textContent = currentUser.name;
fullName.textContent = currentUser.name;
email.textContent = currentUser.email;
phone.textContent = currentUser.phone;
age.textContent = currentUser.age;
address.textContent = currentUser.address;

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
    allUsers[userId].isLoggedIn = false;
    localStorage.setItem("flooway_users", JSON.stringify(allUsers));
    alert("Signed out successfully");
    window.location.href = "login.html";
});
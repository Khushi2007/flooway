const destinationBookings = JSON.parse(localStorage.getItem("planTripData")) || [];
const packageBookings = JSON.parse(localStorage.getItem("bookPackageData")) || [];

function formatDate(isoString) {
    if (!isoString) return "—";
    const date = new Date(isoString);
    return date.toLocaleDateString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}

function clearEmptyState(container) {
    const empty = container.querySelector(".empty-state");
    if (empty) empty.remove();
}

const destinations = {
    hogsmeade: {
        title: 'Hogsmeade',
        img: 'images/destinations/hogsmeade.png'
    },
    diagon_alley: {
        title: 'Diagon Alley',
        img: 'images/destinations/diagon-alley.png'
    },
    ministry_of_magic: {
        title: 'Ministry of Magic',
        img: 'images/destinations/ministry-of-magic.png'
    },
    hogwarts: {
        title: 'Hogwarts Castle',
        img: 'images/destinations/hogwarts.png'
    },

    platform: {
        title: 'Platform 9¾',
        img: 'images/destinations/platform-9-3-4.png'
    },

    gringotts: {
        title: 'Gringotts Wizarding Bank',
        img: 'images/destinations/gringotts.png'
    },

    knockturn: {
        title: 'Knockturn Alley',
        img: 'images/destinations/knockturn-alley.png'
    },

    godric_hollow: {
        title: 'Godric’s Hollow',
        img: 'images/destinations/godrics-hollow.png'
    }
};

const packageImages = {
    gryffindor: "images/packages/gryffindor.png",
    slytherin: "images/packages/slytherin.png",
    hufflepuff: "images/packages/hufflepuff.png",
    ravenclaw: "images/packages/ravenclaw.png",
    hogwarts: "images/packages/hogwarts.png",
    forbidden_forest: "images/packages/forbidden-forest.png"
};

const plannedTripsContainer = document.getElementById("plannedTrips");
if (destinationBookings.length > 0) {
    clearEmptyState(plannedTripsContainer);
    destinationBookings.forEach((trip, index) => {
        const card = document.createElement("div");
        card.className = "trip-card";

        card.style.background = `
        linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.8)
        ),
        url("${destinations[trip.destination].img}")
        `;

        card.style.backgroundSize = "cover";
        card.style.backgroundRepeat = "no-repeat";
        card.style.backgroundPosition = "center";

        card.innerHTML = `
        <h3>${destinations[trip.destination].title}</h3>
        <span><strong>Name: </strong>${trip.name}</span>
        <span><strong>Email: </strong>${trip.email}</span>
        <span><strong>Number of Travelers: </strong>${trip.travelers}</span>
        <span><strong>Travel Date: </strong>${trip.date || "Not Specified"}</span>
        <span><strong>Phone: </strong>${trip.phone}</span>
        <span><strong>Age: </strong>${trip.age}</span>
        <span><strong>Address: </strong>${trip.address}</span>
        <span><strong>Message: </strong>${trip.notes || "No Specific Requests"}</span>
        <span><strong>Planned On: </strong>${formatDate(trip.savedOn)}</span>
        <button class="delete-trip-btn">Delete Trip</button>    
        `;

        card.querySelector(".delete-trip-btn").addEventListener("click", () => {
            destinationBookings.splice(index, 1);
            localStorage.setItem("planTripData", JSON.stringify(destinationBookings));
            card.remove();

            if (destinationBookings.length === 0) {
                plannedTripsContainer.innerHTML = 
                    `<p class="empty-state">No planned trips yet.</p>`;
            }
        });

        plannedTripsContainer.appendChild(card);
    });
}

const bookedTripsContainer = document.getElementById("bookedTrips");
if (packageBookings.length > 0) {
    clearEmptyState(bookedTripsContainer);
    packageBookings.forEach((booking, index) => {
        const card = document.createElement("div");
        card.className = "trip-card";

        card.style.background = `
        linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.8)
        ),
        url("${packageImages[booking.packageKey]}")
        `;

        card.style.backgroundSize = "cover";
        card.style.backgroundRepeat = "no-repeat";
        card.style.backgroundPosition = "center";
    
        card.innerHTML = `
        <h3>${booking.packageTitle}</h3>
        <span><strong>Name: </strong>${booking.name}</span>
        <span><strong>Email: </strong>${booking.email}</span>
        <span><strong>Travel Date: </strong>${booking.date}</span>
        <span><strong>Number of Travelers: </strong>${booking.travelers}</span>
        <span><strong>Phone: </strong>${booking.phone}</span>
        <span><strong>Age: </strong>${booking.age}</span>
        <span><strong>Address: </strong>${booking.address}</span>
        <span><strong>Message: </strong>${booking.requests || "No Specific Requests"}</span>
        <span><strong>Booked On: </strong>${formatDate(booking.savedOn)}</span>
        <button class="delete-trip-btn">Delete Booking</button>
        `;

        card.querySelector(".delete-trip-btn").addEventListener("click", () => {
            packageBookings.splice(index, 1);
            localStorage.setItem("bookPackageData", JSON.stringify(packageBookings));
            card.remove();

            if (packageBookings.length === 0) {
                bookedTripsContainer.innerHTML = 
                    `<p class="empty-state">No packages booked yet.</p>`;
            }
        });

        bookedTripsContainer.appendChild(card);
    });
}
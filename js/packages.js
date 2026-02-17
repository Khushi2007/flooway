const packagesPageParams = new URLSearchParams(window.location.search);
const userId = packagesPageParams.get("uid");

const package_cards = [
    {
        class: "gryffindor",
        badge: "none",
        heading: "Bravery & Firebound Trails",
        subheading: "Gryffindor Package",
        priceDuration: "4 Days • ₹14,999/person",
        price: "14999",
        duration: "4",
        desc: "A bold journey through iconic wizarding landmarks, designed for the daring and the fearless.",
        linkId: "gryffindorPackageLink"
    },
    {
        class: "hogwarts",
        badge: "Most Popular",
        heading: "The Complete Wizarding Passage",
        subheading: "Hogwarts Package",
        priceDuration: "5 Days • ₹18,999/person",
        price: "18999",
        duration: "5",
        desc: "The definitive wizarding journey — Hogwarts, Hogsmeade, Diagon Alley, and beyond in one unforgettable trip.",
        linkId: "hogwartsPackageLink"
    },
    {
        class: "slytherin",
        badge: "none",
        heading: "Ambition in Emerald Shadows",
        subheading: "Slytherin Package",
        priceDuration: "4 Days • ₹15,999/person",
        price: "15999",
        duration: "4", 
        desc: "An elegant, refined experience with access to hidden alleys, private tours, and premium stays.",
        linkId: "slytherinPackageLink"
    },
    {
        class: "hufflepuff",
        badge: "none",
        heading: "Hearth & Wand Retreat",
        subheading: "Hufflepuff Package",
        priceDuration: "3 Days • ₹11,299/person",
        price: "11299",
        duration: "3",
        desc: "A warm, cozy escape centered around charming villages, friendly inns, and magical hospitality.",
        linkId: "hufflepuffPackageLink"
    },
    {
        class: "forbidden-forest",
        badge: "Popular",
        heading: "Secrets of the Dark Forest",
        subheading: "Forbidden Forest Package",
        priceDuration: "3 Days • ₹15,499/person",
        price: "15499",
        duration: "3",
        desc: "Peak through the dangerous, magical woods bordering Hogwarts, filled with wonderous creature interactions.",
        linkId: "forbiddenForestPackageLink"
    },
    {
        class: "ravenclaw",
        badge: "none",
        heading: "Paths of Wit & Wonder",
        subheading: "Ravenclaw Package",
        priceDuration: "4 Days • ₹13,499/person",
        price: "13499",
        duration: "4",
        desc: "A thoughtfully curated journey through historic locations rich in magical knowledge and lore.",
        linkId: "ravenclawPackageLink"
    }
];

const packagesGrid = document.getElementById("packagesGrid");

// package_cards.forEach(package_card => {
//     let badge = (package_card.badge === "none") ? "" : `<span class="badge">${package_card.badge}</span>`;
//     packagesGrid.innerHTML += `
//     <div class="package-card ${package_card.class}">
//         ${badge}
//         <div class="package-content">
//             <h3>${package_card.heading}</h3>
//             <h4>${package_card.subheading}</h4>
//             <p class="price">${package_card.price}</p>
//             <p class="desc">${package_card.desc}</p>
//             <a id="${package_card.linkId}" class="hero-btn small">Book Now</a>
//         </div>
//     </div>
//     `;
// });

function renderPackageCards(cards) {
    packagesGrid.innerHTML = "";

    cards.forEach(package_card => {
        let badge = (package_card.badge === "none") ? "" : `<span class="badge">${package_card.badge}</span>`
        packagesGrid.innerHTML += `
        <div class="package-card ${package_card.class}">
            ${badge}
            <div class="package-content">
                <h3>${package_card.heading}</h3>
                <h4>${package_card.subheading}</h4>
                <p class="price">${package_card.priceDuration}</p>
                <p class="desc">${package_card.desc}</p>
                <a id="${package_card.linkId}" class="hero-btn small">Book Now</a>
            </div>
        </div>
        `;
    });
    attachPageLinks();
}

function attachPageLinks() {
    document.getElementById("gryffindorPackageLink")
    ?.setAttribute("href", `package.html?package=gryffindor&uid=${userId}`);
    document.getElementById("hogwartsPackageLink")
    ?.setAttribute("href", `package.html?package=hogwarts&uid=${userId}`);
    document.getElementById("slytherinPackageLink")
    ?.setAttribute("href", `package.html?package=slytherin&uid=${userId}`);
    document.getElementById("hufflepuffPackageLink")
    ?.setAttribute("href", `package.html?package=hufflepuff&uid=${userId}`);
    document.getElementById("forbiddenForestPackageLink")
    ?.setAttribute("href", `package.html?package=forbidden_forest&uid=${userId}`);
    document.getElementById("ravenclawPackageLink")
    ?.setAttribute("href", `package.html?package=ravenclaw&uid=${userId}`);
}

renderPackageCards(package_cards);

const searchInput = document.getElementById("packageSearch");
const houseFilter = document.getElementById("houseFilter");
const priceFilter = document.getElementById("priceFilter");
const durationFilter = document.getElementById("durationFilter");
const sortFilter = document.getElementById("sortFilter");

function filterPackages() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedHouse = houseFilter.value;
    const maxPrice = priceFilter.value;
    const maxDuration = durationFilter.value;
    const sortValue = sortFilter.value;

    let filtered = package_cards.filter(card => {
        const matchesSearch = card.heading.toLowerCase().includes(searchTerm) || card.desc.toLowerCase().includes(searchTerm);
        const matchesHouse = !selectedHouse || card.class.includes(selectedHouse);
        const priceNumber = parseInt(card.price);
        const matchesPrice = !maxPrice || priceNumber <= maxPrice;
        const durationNumber = parseInt(card.duration);
        const matchesDuration = !maxDuration || durationNumber <= maxDuration;
        return matchesSearch && matchesHouse && matchesPrice && matchesDuration;
    });

    if (sortValue == "price") {
        filtered.sort((a, b) => {
            const priceA = parseInt(a.price);
            const priceB = parseInt(b.price);
            return priceA - priceB;
        });
    }

    if (sortValue == "duration") {
        filtered.sort((a, b) => {
            const durationA = parseInt(a.duration);
            const durationB = parseInt(b.duration);
            return durationA - durationB;
        });
    }

    if (sortValue == "popularity") {
        filtered.sort((a, b) => {
            const popA = (a.badge === "Most Popular") ? 2 : (a.badge === "Popular") ? 1 : 0;
            const popB = (b.badge === "Most Popular") ? 2 : (b.badge === "Popular") ? 1 : 0;
            return popB - popA;
        });
    }

    renderPackageCards(filtered);
}

searchInput.addEventListener("input", filterPackages);
houseFilter.addEventListener("change", filterPackages);
priceFilter.addEventListener("change", filterPackages);
durationFilter.addEventListener("change", filterPackages);
sortFilter.addEventListener("change", filterPackages);

// const gryffindorPackageLink = document.getElementById("gryffindorPackageLink");
// const hogwartsPackageLink = document.getElementById("hogwartsPackageLink");
// const slytherinPackageLink = document.getElementById("slytherinPackageLink");
// const hufflepuffPackageLink = document.getElementById("hufflepuffPackageLink");
// const forbiddenForestPackageLink = document.getElementById("forbiddenForestPackageLink");
// const ravenclawPackageLink = document.getElementById("ravenclawPackageLink");

// gryffindorPackageLink.setAttribute("href", `package.html?package=gryffindor&uid=${uid}`);
// hogwartsPackageLink.setAttribute("href", `package.html?package=hogwarts&uid=${uid}`);
// slytherinPackageLink.setAttribute("href", `package.html?package=slytherin&uid=${uid}`);
// hufflepuffPackageLink.setAttribute("href", `package.html?package=hufflepuff&uid=${uid}`);
// forbiddenForestPackageLink.setAttribute("href", `package.html?package=forbidden_forest&uid=${uid}`);
// ravenclawPackageLink.setAttribute("href", `package.html?package=ravenclaw&uid=${uid}`);
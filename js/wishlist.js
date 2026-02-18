const wishlistKey = `flooway_wishlist_${uid}`;
const wishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];
const wishlistGrid = document.getElementById("wishlistGrid");

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


wishlist.forEach(pkgKey => {
    const pkg = package_cards.find(p => p.class === pkgKey);
    if (!pkg) return;

    let badge = (pkg.badge === "none") ? "" : `<span class="badge">${pkg.badge}</span>`
    wishlistGrid.innerHTML += `
    <div class="package-card ${pkg.class}">
        ${badge}
        <div class="package-content">
            <h3>${pkg.heading}</h3>
            <h4>${pkg.subheading}</h4>
            <p class="price">${pkg.priceDuration}</p>
            <p class="desc">${pkg.desc}</p>
            <a href="package.html?package=${pkgKey}&uid=${uid}" class="hero-btn small">View Package</a>
        </div>
    </div>
    `;
});
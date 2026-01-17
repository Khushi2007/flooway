const packages = {
    gryffindor: {
        title: "Bravery & Firebound Trails",
        house: "Gryffindor",
        tagline: "For the bold, the brave, and the daring",
        heroImage: "images/packages/gryffindor.png",
        duration: "4 Days / 3 Nights",
        price: "Starting from ₹14,999/person",
        avaiableDates: [
            "31 July — 3 August",
            "9 August — 12 August"
        ],
        description: "Designed for witches and wizards who seek adventure, courage, and unforgettable moments, the Lionheart Expedition plunges you into the most thrilling corners of the wizarding world.",
        highlights: [
            "Hogwarts Castle exploration",
            "Forbidden Forest edge trek",
            "Quidditch Pitch experience"
        ],
        includes: [
            "Guided magical tours",
            "Wizarding meals",
            "Floo Network transport",
            "House-themed accomodations"
        ],
        experiences: [
            "Night castle exploration",
            "Courage trails",
            "Dueling club sessions"
        ]
    },
    slytherin: {
        title: "Ambition in Emerald Shadows",
        house: "Slytherin",
        tagline: "Power, prestige, and ambition",
        heroImage: "images/packages/slytherin.png",
        duration: "4 Days / 3 Nights",
        price: "Starting from ₹15,999/person",
        avaiableDates: [
            "13 July — 16 July",
            "18 July — 21 July"
        ],
        description: "A refined and exclusive journey for those who value ambition and influence, exploring the darker, more secretive corners of the wizarding world.",
        highlights: [
            "Knockturn Alley access",
            "Private Gringotts vault tour",
            "Ministry of Magic visit"
        ],
        includes: [
            "Private guides",
            "Luxury wizarding stay",
            "Exclusive access permits",
            "Priority Floo travel"
        ],
        experiences: [
            "Dark artifact history tour",
            "Strategic magic workshops",
            "Elite networking gatherings"
        ],
        gallery: [
            "images/slytherin-p-1.png",
            "images/slytherin-p-2.png",
            "images/slytherin-p-3.png"
        ]
    },
    hufflepuff: {
        title: "Hearth & Wand Retreat",
        house: "Hufflepuff",
        tagline: "Warmth, loyalty, and quiet magic",
        heroImage: "images/packages/hufflepuff.png",
        duration: "3 Days / 2 Nights",
        price: "Starting from ₹11,299/person",
        avaiableDates: [
            "12 August — 14 August",
            "21 August — 23 August"
        ],
        description: "A peaceful and comforting journey celebrating friendship, tradition, and the simpler joys of magical life.",
        highlights: [
            "Hogsmeade village stay",
            "Herbology greenhouse visit",
            "Magical cooking workshops"
        ],
        includes: [
            "Cozy wizarding inns",
            "All meals included",
            "Guided village tours"
        ],
        experiences: [
            "Butterbeer tasting",
            "Herbal magic sessions",
            "Community feasts"
        ]
    },
    ravenclaw: {
        title: "Paths of Wit & Wonder",
        house: "Ravenclaw",
        tagline: "Wisdom beyond the ordinary",
        heroImage: "images/packages/ravenclaw.png",
        duration: "4 Days / 3 Nights",
        price: "Starting from ₹13,499/person",
        avaiableDates: [
            "16 July — 19 July",
            "26 July — 29 July"
        ],
        description: "An intellectually rich experience for seekers of knowledge, ancient magic, and forgotten lore.",
        highlights: [
            "Hogwarts library access",
            "Astronomy Tower nights",
            "Historic magical sites"
        ],
        includes: [
            "Expert magical historians",
            "Lecture sessions",
            "Research materials"
        ],
        experiences: [
            "Stargazing rituals",
            "Ancient spell studies",
            "Puzzle-based excursions"
        ]
    },
    hogwarts: {
        title: "The Complete Wizarding Passage",
        house: "All Houses",
        badge: "Most Popular",
        tagline: "The complete wizarding experience",
        heroImage: "images/packages/hogwarts.png",
        duration: "5 Days / 4 Nights",
        price: "Starting from ₹18,999/person",
        avaiableDates: [
            "10 September — 14 September",
            "17 September — 21 September"
        ],
        description: "The ultimate FlooWay experience, combining the best of all houses into one unforgettable journey through the wizarding world.",
        highlights: [
            "Full Hogwarts access",
            "Multiple destinations",
            "Exclusive ceremonies"
        ],
        includes: [
            "Premium accommodations",
            "All-access passes",
            "Personal magical concierge"
        ],
        experiences: [
            "Sorting-style events",
            "Grand feasts",
            "Closing magical ceremony"
        ]
    },
    forbidden_forest: {
        title: "Secrets of the Dark Forest",
        house: "All Houses",
        badge: "Popular",
        tagline: "Where ancient magic still breathes",
        heroImage: "images/packages/forbidden-forest.png",
        duration: "3 Days / 2 Nights",
        price: "Starting from ₹15,499/person",
        avaiableDates: [
            "31 Oct — 2 Nov",
            "9 Nov — 11 Nov"
        ],
        description: "An immersive and atmospheric journey into the depths of the Forbidden Forest, guided by experienced magical wardens. This experience explores ancient magic, mythical creatures, and the darker folklore surrounding Hogwarts’ most mysterious woodland.",
        highlights: [
            "Deep forest night expeditions",
            "Centaur stargazing clearings",
            "Ancient magical tree groves"
        ],
        includes: [
            "Guided forest patrols",
            "Protective enchantments",
            "Warden-led creature briefings",
            "Forest-safe accommodations"
        ],
        experiences: [
            "Moonlit forest walks",
            "Magical creature observation",
            "Ancient rune discovery"
        ]
    }

};

const params = new URLSearchParams(window.location.search);
const key = params.get("package");
const data = packages[key];

const badgeEl = document.getElementById("package-badge");
const titleEl = document.getElementById("package-title");
const taglineEl = document.getElementById("package-tagline");
const durationEl = document.getElementById("package-duration");
const priceEl = document.getElementById("package-price");
const availableDatesEl = document.getElementById("package-available-dates");
const descEl = document.getElementById("package-description");
const highlightsEl = document.getElementById("package-highlights");
const includedEl = document.getElementById("package-includes");
const experiencesEl = document.getElementById("package-experiences");
const bookPackageBtn = document.getElementById("book-package-btn");

if (!data) {
    titleEl.textContent = "Package Not Found";
    taglineEl.textContent = "This journey does not exist in the Floo Network.";
} else {
    document.title =  `FlooWay | ${key.toUpperCase()}`;
    document.body.style.backgroundImage =  `url("${data.heroImage}")`;
    titleEl.textContent = data.title;
    taglineEl.textContent = data.tagline;
    durationEl.textContent = data.duration;
    priceEl.textContent = data.price;
    descEl.textContent = data.description;

    if (data.badge) {
        badgeEl.textContent = data.badge;
        badgeEl.style.display = "inline-block";
    } else {
        badgeEl.style.display = "none";
    }

    function fillList(listEl, items) {
        listEl.innerHTML = "";
        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            listEl.appendChild(li);
        });
    }

    fillList(availableDatesEl, data.avaiableDates);
    fillList(highlightsEl, data.highlights);
    fillList(includedEl, data.includes);
    fillList(experiencesEl, data.experiences);

    bookPackageBtn.href = `book-package.html?plan=${key}`;

}

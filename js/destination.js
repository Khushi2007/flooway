const destinations = {
    hogsmeade: {
        title: "Hogsmeade",
        tagline: "A charming wizarding village",
        heroImage: "images/destinations/hogsmeade.png",
        description: "Hogsmeade is the only all-wizarding village in Britain, known for its cozy atmosphere, historic inns, and magical shops that attract witches and wizards from far and wide.",
        places: [
            "The Three Broomsticks",
            "Honeydukes Sweetshop",
            "Hogsmeade Station"
        ],
        things: [
            "Enjoy butterbeer",
            "Shop for magical treats",
            "Explore village streets"
        ],
        specialties: [
            "Wizarding sweets",
            "Warm village hospitality",
            "Scenic winter views"
        ],
        gallery: [
            "images/hogsmeade-1.png",
            "images/hogsmeade-2.png",
            "images/hogsmeade-3.png"
        ]
    },
    diagon_alley: {
        title: "Diagon Alley",
        tagline: "The heart of wizarding commerce",
        heroImage: "images/destinations/diagon-alley.png",
        description: "Hidden from the Muggle world, Diagon Alley is a bustling magical marketplace where witches and wizards prepare for every aspect of magical life.",
        places: [
            "Olivanders",
            "Weasley's Wizard Wheezes",
            "Leaky Cauldron"
        ],
        things: [
            "Buy magical supplies",
            "Explore enchanted shops",
            "Discover hidden alleys"
        ],
        specialties: [
            "Magical artifacts",
            "Wizarding fashion",
            "Historic charm"
        ],
        gallery: [
            "images/diagon-alley-1.png",
            "images/diagon-alley-2.png",
            "images/diagon-alley-3.png"
        ]
    },
    ministry_of_magic: {
        title: "Ministry of Magic",
        tagline: "The seat of wizarding governance",
        heroImage: "images/destinations/ministry-of-magic.png",
        description: "Hidden beneath London, the Ministry of Magic oversees the laws, regulations, and security of the wizarding world.",
        places: [
            "Atrium",
            "Department of Mysteries",
            "Courtrooms"
        ],
        things: [
            "Explore magical governance",
            "Discover enchanted offices",
            "Learn wizarding law"
        ],
        specialties: [
            "Wizarding administration",
            "Ancient bureaucracy",
            "Magical authority"
        ],
        gallery: [
            "images/ministry-of-magic-1.png",
            "images/ministry-of-magic-2.png",
            "images/ministry-of-magic-3.png"
        ]
    },
    hogwarts: {
        title: "Hogwarts Castle",
        tagline: "Where magic begins",
        heroImage: "images/destinations/hogwarts.png",
        description: "Hogwarts School of Witchcraft and Wizardry stands as the heart of the magical world, a towering castle filled with ancient secrets, shifting staircases, and centuries of wizarding history.",
        places: [
            "Great Hall",
            "Astronomy Tower",
            "Common Rooms",
            "Forbidden Forest Edge"
        ],
        things: [
            "Attend magical classes",
            "Explore hidden passages",
            "Witness moving staircases",
            "Watch Quidditch matches"
        ],
        specialties: [
            "Ancient magic",
            "Wizarding education",
            "Enchanted architecture",
            "Whomping Willow"
        ],
        gallery: [
            "images/hogwarts-1.png",
            "images/hogwarts-2.png",
            "images/hogwarts-3.png"
        ]
    },
    platform: {
        title: "Platform 9¾",
        tagline: "The gateway to magic",
        heroImage: "images/destinations/platform-9-3-4.png",
        description: "Concealed within King’s Cross Station, Platform 9¾ serves as the magical departure point for students travelling to Hogwarts.",
        places: [
            "Hidden brick barrier",
            "Hogwarts Express",
            "Station platforms"
        ],
        things: [
            "Board the Hogwarts Express",
            "Witness magical departures",
            "Capture iconic moments"
        ],
        specialties: [
            "Magical transit",
            "Wizarding tradition",
            "Iconic journeys"
        ],
        gallery: [
            "images/platform-1.png",
            "images/platform-2.png",
            "images/platform-3.png",
        ]
    },
    gringotts: {
        title: "Gringotts Wizarding Bank",
        tagline: "Where fortunes are guarded by magic",
        heroImage: "images/destinations/gringotts.png",
        description: "Godric’s Hollow is a historic wizarding village known for its deep ties to magical history and legendary figures.",
        places: [
            "Marble Banking Hall",
            "Vault Corridors",
            "High-Security Vaults"
        ],
        things: [
            "Descend into underground vaults",
            "Witness goblin craftsmanship",
            "Learn the secrets of magical security"
        ],
        specialties: [
            "Goblin-made security",
            "Ancient vault magic",
            "Wizarding finance"
        ],
        gallery: [
            "images/gringotts-1.png",
            "images/gringotts-2.png",
            "images/gringotts-3.png"
        ]
    },
    knockturn: {
        title: "Knockturn Alley",
        tagline: "Where shadows whisper",
        heroImage: "images/destinations/knockturn-alley.png",
        description: "A dark offshoot of Diagon Alley, Knockturn Alley is home to sinister shops dealing in cursed objects and forbidden magic.",
        places: [
            "Borgin and Burkes",
            "Shadowed shopfronts",
            "Hidden passageway"
        ],
        things: [
            "Browse dark artifacts",
            "Learn forbidden lore",
            "Explore hidden corners"
        ],
        specialties: [
            "Dark magic",
            "Rare cursed items",
            "Mystical secrecy"
        ],
        gallery: [
            "images/knockturn-alley-1.png",
            "images/knockturn-alley-2.png",
            "images/knockturn-alley-3.png"
        ]
    },
    godric_hollow: {
        title: "Godric's Hollow",
        tagline: "A village steeped in history",
        heroImage: "images/destinations/godrics-hollow.png",
        description: "Godric’s Hollow is a historic wizarding village known for its deep ties to magical history and legendary figures.",
        places: [
            "Godric Gryffindor's birthplace",
            "Village Square",
            "Historic homes"
        ],
        things: [
            "Explore wizarding history",
            "Visit memorial landmarks",
            "Stroll throug the village"
        ],
        specialties: [
            "Magical heritage",
            "Quiet charm",
            "Historic significance"
        ],
        gallery: [
            "images/godrics-1.png",
            "images/godrics-2.png",
            "images/godrics-3.png"
        ]
    }
};

const params = new URLSearchParams(window.location.search);
const key = params.get("place");
const data = destinations[key];

const titleEl = document.getElementById("dest-title");
const taglineEl = document.getElementById("dest-tagline");
const descEl = document.getElementById("dest-description");
const placesEl = document.getElementById("dest-places");
const thingsEl = document.getElementById("dest-things");
const specialtiesEl = document.getElementById("dest-specialties");
const galleryEl = document.getElementById("dest-gallery");

if (!data) {
    titleEl.textContent = "Destination Not Found";
    taglineEl.textContent = "The Floo Network could not locate this place.";
} else {
    document.title = `FlooWay | ${data.title}`;
    document.body.style.backgroundImage = `url("${data.heroImage}")`;
    titleEl.textContent = data.title;
    taglineEl.textContent = data.tagline;
    descEl.textContent = data.description;
    function fillList(listEl, items) {
        listEl.innerHTML = "";
        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            listEl.appendChild(li);
        });
    }
    fillList(placesEl, data.places);
    fillList(thingsEl, data.things);
    fillList(specialtiesEl, data.specialties);

    galleryEl.innerHTML = "";
    data.gallery.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = data.title;
        galleryEl.appendChild(img);
    });
}
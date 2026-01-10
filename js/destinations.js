const markers = document.querySelectorAll('.map-marker');
const panel = document.querySelector('.side-panel');
const overlay = document.querySelector('.map-overlay');
const closeBtn = document.querySelector('.close-panel');

const panelTitle = panel.querySelector('h2');
const panelImg = panel.querySelector('img');
const panelDesc = panel.querySelector('p');

const destinations = {
    hogsmeade: {
        title: 'Hogsmeade',
        img: 'images/destinations/hogsmeade.png',
        desc: 'A cozy all-wizarding village known for its warmth, charm, and magical atmosphere.'
    },
    diagon_alley: {
        title: 'Diagon Alley',
        img: 'images/destinations/diagon-alley.png',
        desc: 'The bustling heart of wizarding commerce, filled with crooked streets and enchanted shops.'
    },
    ministry_of_magic: {
        title: 'Ministry of Magic',
        img: 'images/destinations/ministry-of-magic.png',
        desc: 'The hidden center of magical governance, deep beneath the streets of London.'
    },
    hogwarts: {
        title: 'Hogwarts Castle',
        img: 'images/destinations/hogwarts.png',
        desc: 'The legendary school of witchcraft and wizardry, hidden from the Muggle world.'
    },

    platform: {
        title: 'Platform 9¾',
        img: 'images/destinations/platform-9-3-4.png',
        desc: 'The secret gateway to the Hogwarts Express at King’s Cross Station.'
    },

    gringotts: {
        title: 'Gringotts Wizarding Bank',
        img: 'images/destinations/gringotts.png',
        desc: 'A towering marble bank guarded by goblins and protected by powerful enchantments.'
    },

    knockturn: {
        title: 'Knockturn Alley',
        img: 'images/destinations/knockturn-alley.png',
        desc: 'A shadowy offshoot of Diagon Alley, home to darker magical trades.'
    },

    godric_hollow: {
        title: 'Godric’s Hollow',
        img: 'images/destinations/godrics-hollow.png',
        desc: 'A historic wizarding village rich with magical heritage and legend.'
    }
};

markers.forEach(marker => {
    marker.addEventListener('click', () => {
        const key = marker.dataset.destination;
        const data = destinations[key];

        panelTitle.textContent = data.title;
        panelImg.src = data.img;
        panelImg.alt = data.title;
        panelDesc.textContent = data.desc;

        panel.classList.add('open');
        overlay.classList.add('active');
    });
});

function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('active');
}

closeBtn.addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);

document.addEventListener('keydown', e => {
    if (e.key == 'Escape') {
        closePanel();
    }
});
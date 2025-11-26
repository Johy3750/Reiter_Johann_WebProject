// Elementele principale
console.log("JS loaded OK");
const monitorizareSection = document.getElementById('monitorizare');
const grid = document.getElementById('resource-grid');
const slideshow = document.getElementById('slideshow');
const slideshowImage = document.getElementById('slideshow-image');
const slideshowCaption = document.getElementById('slideshow-caption');

// Imaginile folosite în slide-show (aceleași ca în grid)
const slides = [
    {
        src: 'images/monitorizare_cpu.png',
        caption: 'Utilizare CPU în timpul streaming-ului video'
    },
    {
        src: 'images/monitorizare_memorie.png',
        caption: 'Utilizare memorie RAM'
    },
    {
        src: 'images/monitorizare_disk.png',
        caption: 'Activitate disc în timpul redării video'
    },
    {
        src: 'images/monitorizare_procese.png',
        caption: 'Procese și servicii active'
    },
    {
        src: 'images/monitorizare_retea.png',
        caption: 'Trafic rețea și porturi deschise'
    }
];

let currentIndex = 0;
let intervalId = null;
let slideshowActive = false;

// Afișează un anumit slide
function showSlide(index) {
    const slide = slides[index];
    slideshowImage.src = slide.src;
    slideshowImage.alt = slide.caption;
    slideshowCaption.textContent = slide.caption;
}

// Pornește slide-show-ul (tranziție la 3 secunde)
function startSlideshow() {
    if (slideshowActive) return;

    slideshowActive = true;
    grid.classList.add('hidden');
    slideshow.classList.remove('hidden');

    currentIndex = 0;
    showSlide(currentIndex);

    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000); // 3 secunde
}

// Oprește slide-show-ul și revine la imaginile statice
function stopSlideshow() {
    slideshowActive = false;
    clearInterval(intervalId);
    intervalId = null;

    slideshow.classList.add('hidden');
    grid.classList.remove('hidden');
}

// Dublu-click pe secțiunea „Monitorizare resurse” pornește/oprește slide-show-ul
monitorizareSection.addEventListener('dblclick', () => {
    if (!slideshowActive) {
        startSlideshow();
    } else {
        stopSlideshow();
    }
});
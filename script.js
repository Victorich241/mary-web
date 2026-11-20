
// OPEN THE WEBSITE
function openWebsite() {
    const envelope = document.getElementById("envelope");
    const welcome = document.getElementById("welcome");

    envelope.classList.add("open");

    setTimeout(() => {
        welcome.classList.add("hide");
    }, 700);
}

// SCROLL TO SECTIONS
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// BACKGROUND MUSIC
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {
    if (music.paused) {
        music.play()
            .then(() => {
                musicBtn.textContent = "♫ Pause Our Song";
            })
            .catch(() => {
                musicBtn.textContent = "Add our-song.mp3 first";
            });
    } else {
        music.pause();
        musicBtn.textContent = "♫ Play Our Song";
    }
}

// LOVE TAG MESSAGES
const messages = {
    sunshine:
        "You bring a little sunshine into ordinary days. Never underestimate the beauty of your smile. ☀️",

    smile:
        "Your smile is one of those things I wish I could put in a photograph and keep forever. 😊",

    comfort:
        "There is something beautiful about finding comfort in someone's presence. You mean a lot to me. 🫶",

    beauty:
        "Your beauty goes beyond what the eyes can see. It is in your character, your heart and the person you are. 🌹",

    special:
        "You have a place in my heart that belongs to you alone. Never forget that. 💗",

    forever:
        "Of all the little things life gives us, some people become unforgettable. You are one of them. ✨"
};

function showMessage(type) {
    const display = document.getElementById("messageDisplay");

    display.style.opacity = "0";

    setTimeout(() => {
        display.textContent = messages[type];
        display.style.opacity = "1";
    }, 200);
}

// PHOTO LIGHTBOX
function openPhoto() {
    document.getElementById("lightbox").classList.add("show");
}

function closePhoto() {
    document.getElementById("lightbox").classList.remove("show");
}

// HEART GAME
const heartMessages = [
    "Your smile deserves its own sunrise. ☀️",
    "You make ordinary moments feel special. ✨",
    "You are appreciated more than words can explain. 💗",
    "You deserve beautiful things and beautiful days. 🌷",
    "You have a special place in my heart. ❤️"
];

function pickHeart(index) {
    const hearts = document.querySelectorAll(".heart-game button");

    if (hearts[index].classList.contains("used")) {
        return;
    }

    hearts[index].classList.add("used");
    hearts[index].textContent = "♥";

    document.getElementById("gameMessage").textContent =
        heartMessages[index];
}

// SWEETNESS METER
function updateMeter() {
    const value = document.getElementById("meter").value;

    document.getElementById("meterNumber").textContent =
        value + "%";

    let text;

    if (value < 25) {
        text = "A little sparkle is showing! 🌷";
    } else if (value < 50) {
        text = "You're getting sweeter already! 💕";
    } else if (value < 75) {
        text = "The cuteness levels are rising! 🥹";
    } else if (value < 100) {
        text = "Maximum Mary magic detected! ✨";
    } else {
        text = "ERROR! Too beautiful to measure! ❤️";
    }

    document.getElementById("meterText").textContent = text;
}

// FINAL CONFESSION
function revealConfession() {
    document.getElementById("confession").classList.toggle("show");
}

// FLOATING HEARTS
function createHeart() {
    const heart = document.createElement("span");

    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";
    heart.className = "floating-heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    document.getElementById("heartsBg").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 700);

// CLICK OUTSIDE PHOTO TO CLOSE
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePhoto();
    }
});

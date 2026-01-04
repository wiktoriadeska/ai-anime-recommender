const animeList = [
    { title: "Naruto", tags: ["akcja", "walka", "shounen"] },
    { title: "Naruto Shippuden", tags: ["akcja", "walka", "shounen"] },
    { title: "Boruto", tags: ["akcja", "shounen", "przygoda"] },
    { title: "Demon Slayer", tags: ["akcja", "walka", "fantasy"] },
    { title: "Attack on Titan", tags: ["akcja", "dramat", "fantasy"] },
    { title: "Fullmetal Alchemist: Brotherhood", tags: ["akcja", "fantasy", "przygoda"] },
    { title: "My Hero Academia", tags: ["akcja", "przyjaźń", "shounen"] },
    { title: "One Piece", tags: ["przygoda", "akcja", "komedia"] },
    { title: "Bleach", tags: ["akcja", "walka", "fantasy"] },
    { title: "Death Note", tags: ["tajemnica", "psychologia", "dramat"] },
    { title: "Code Geass", tags: ["akcja", "strategia", "dramat"] },
    { title: "Steins;Gate", tags: ["sci-fi", "tajemnica", "dramat"] },
    { title: "Re:Zero", tags: ["fantasy", "dramat", "romans"] },
    { title: "Tokyo Revengers", tags: ["akcja", "przyjaźń", "dramat"] },
    { title: "Blue Period", tags: ["dramat", "szkoła", "rozwojowy"] },
    { title: "Vivy: Fluorite Eye’s Song", tags: ["akcja", "sci-fi", "muzyka"] },
    { title: "Erased", tags: ["tajemnica", "dramat", "sci-fi"] },
    { title: "Kaguya-sama: Love is War", tags: ["komedia", "romans", "szkoła"] },
    { title: "The Ancient Magus’ Bride", tags: ["fantasy", "romans", "tajemnica"] },
    { title: "Fruits Basket", tags: ["romans", "komedia", "dramat"] },
    { title: "Mob Psycho 100", tags: ["akcja", "komedia", "fantasy"] },
    { title: "Made in Abyss", tags: ["tajemnica", "fantasy", "przygoda"] },
    { title: "Made in Abyss: Dawn of the Deep Soul", tags: ["fantasy", "przygoda", "dramat"] },
    { title: "Your Name", tags: ["romans", "fantasy", "romance"] },
    { title: "Sword Art Online", tags: ["akcja", "fantasy", "romans"] },
    { title: "Akame ga Kill", tags: ["akcja", "walka", "dramat"] },
    { title: "Parasyte", tags: ["horror", "akcja", "dramat"] },
    { title: "Black Clover", tags: ["akcja", "fantasy", "przygoda"] },
    { title: "Hunter x Hunter", tags: ["akcja", "przygoda", "shounen"] },
    { title: "Overlord", tags: ["fantasy", "akcja", "strategia"] },
    { title: "Black Butler", tags: ["tajemnica", "fantasy", "dramat"] },
    { title: "Soul Eater", tags: ["akcja", "fantasy", "komedia"] },
    { title: "Psycho-Pass", tags: ["sci-fi", "psychologia", "akcja"] },
    { title: "No Game No Life", tags: ["fantasy", "komedia", "przygoda"] },
    { title: "Toradora", tags: ["romans", "komedia", "szkoła"] },
    { title: "Clannad", tags: ["dramat", "romans", "szkoła"] },
    { title: "Angel Beats", tags: ["akcja", "dramat", "komedia"] },
    { title: "Elfen Lied", tags: ["horror", "dramat", "psychologia"] },
    { title: "The Rising of the Shield Hero", tags: ["fantasy", "akcja", "przygoda"] },
    { title: "Fairy Tail", tags: ["fantasy", "przygoda", "akcja"] },
    { title: "That Time I Got Reincarnated as a Slime", tags: ["fantasy", "akcja", "komedia"] },
    { title: "Grimgar: Ashes and Illusions", tags: ["fantasy", "przygoda", "dramat"] },
    { title: "Ergo Proxy", tags: ["sci-fi", "psychologia", "tajemnica"] },
    { title: "Vivy: Fluorite Eye’s Song", tags: ["akcja", "sci-fi", "muzyka"] },
    { title: "Hunter x Hunter (2011)", tags: ["akcja", "przygoda", "shounen"] },
    { title: "Dr. Stone", tags: ["przygoda", "sci-fi", "komedia"] },
    { title: "Attack on Titan: Final Season", tags: ["akcja", "dramat", "fantasy"] },
    { title: "D.Gray-man", tags: ["akcja", "fantasy", "walka"] },
    { title: "Ezoteryczne Losowanie", tags: ["ezoteryka", "magia", "losowanie"] }
];

// Funkcja losująca
function getRecommendation() {
    const prefs = document.getElementById("prefs").value.toLowerCase();
    let filtered = animeList.filter(anime =>
        anime.tags.some(tag => prefs.includes(tag))
    );

    if (filtered.length === 0) {
        filtered = animeList;
    }

    const choice = filtered[Math.floor(Math.random() * filtered.length)];
    document.getElementById("result").innerText = `Polecam: ${choice.title}`;
}

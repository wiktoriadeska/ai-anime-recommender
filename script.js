const animeList = [
    { title: "Naruto", tags: ["akcja", "walka", "shounen"] },
    { title: "Demon Slayer", tags: ["akcja", "walka", "fantasy"] },
    { title: "Your Name", tags: ["romans", "fantasy", "romance"] },
    { title: "Made in Abyss", tags: ["tajemnica", "fantasy", "przygoda"] },
    { title: "Attack on Titan", tags: ["akcja", "dramat", "fantasy"] },
    { title: "My Hero Academia", tags: ["akcja", "przyjaźń", "shounen"] },
    { title: "One Piece", tags: ["przygoda", "akcja", "komedia"] },
    { title: "Steins;Gate", tags: ["sci-fi", "tajemnica", "dramat"] },
    { title: "Death Note", tags: ["tajemnica", "psychologia", "dramat"] },
    { title: "Fullmetal Alchemist: Brotherhood", tags: ["akcja", "fantasy", "przygoda"] },
    { title: "Fruits Basket", tags: ["romans", "komedia", "dramat"] },
    { title: "Mob Psycho 100", tags: ["akcja", "komedia", "fantasy"] },
    { title: "Re:Zero", tags: ["fantasy", "dramat", "romans"] },
    { title: "Tokyo Revengers", tags: ["akcja", "przyjaźń", "dramat"] },
    { title: "Blue Period", tags: ["dramat", "szkoła", "rozwojowy"] },
    { title: "Vivy: Fluorite Eye’s Song", tags: ["akcja", "sci-fi", "muzyka"] },
    { title: "Erased", tags: ["tajemnica", "dramat", "sci-fi"] },
    { title: "Kaguya-sama: Love is War", tags: ["komedia", "romans", "szkoła"] },
    { title: "The Ancient Magus’ Bride", tags: ["fantasy", "romans", "tajemnica"] },
    { title: "Ezoteryczne Losowanie", tags: ["ezoteryka", "magia", "losowanie"] }
];

function getRecommendation() {
    const prefs = document.getElementById("prefs").value.toLowerCase();
    let filtered = animeList.filter(anime =>
        anime.tags.some(tag => prefs.includes(tag))
    );

    if (filtered.length === 0) {
        // Jeśli nic nie pasuje, losuj z całej listy
        filtered = animeList;
    }

    const choice = filtered[Math.floor(Math.random() * filtered.length)];
    document.getElementById("result").innerText = `Polecam: ${choice.title}`;
}

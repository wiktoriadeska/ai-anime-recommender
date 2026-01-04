const animeList = [
    { title: "Naruto", tags: ["akcja", "walka", "shounen"], description: "Młody ninja dąży do zostania Hokage." },
    { title: "Naruto Shippuden", tags: ["akcja", "walka", "shounen"], description: "Kontynuacja przygód Naruto, dojrzalszy bohater w akcji." },
    { title: "Boruto", tags: ["akcja", "shounen", "przygoda"], description: "Syn Naruto wyrusza w własną przygodę." },
    { title: "Demon Slayer", tags: ["akcja", "walka", "fantasy"], description: "Chłopiec wyrusza, by ocalić siostrę przemienioną w demona." },
    { title: "Attack on Titan", tags: ["akcja", "dramat", "fantasy"], description: "Ludzkość walczy z gigantycznymi tytanami." },
    { title: "Fullmetal Alchemist: Brotherhood", tags: ["akcja", "fantasy", "przygoda"], description: "Dwóch braci próbuje odzyskać utracone ciała." },
    { title: "My Hero Academia", tags: ["akcja", "przyjaźń", "shounen"], description: "Młodzi bohaterowie szkolą się, by stać się superbohaterami." },
    { title: "One Piece", tags: ["przygoda", "akcja", "komedia"], description: "Monkey D. Luffy wyrusza szukać legendarnego skarbu." },
    { title: "Bleach", tags: ["akcja", "walka", "fantasy"], description: "Nastolatek zostaje Soul Reaperem i broni świat przed duchami." },
    { title: "Death Note", tags: ["tajemnica", "psychologia", "dramat"], description: "Młody geniusz posiada notatnik zabijający ludzi." },
    { title: "Code Geass", tags: ["akcja", "strategia", "dramat"], description: "Chłopak zdobywa moc zmuszania ludzi do posłuszeństwa." },
    { title: "Steins;Gate", tags: ["sci-fi", "tajemnica", "dramat"], description: "Eksperymenty w czasie zmieniają bieg historii." },
    { title: "Re:Zero", tags: ["fantasy", "dramat", "romans"], description: "Młody chłopak trafia do fantastycznego świata i doświadcza powtarzających się tragedii." },
    { title: "Tokyo Revengers", tags: ["akcja", "przyjaźń", "dramat"], description: "Podróże w czasie, by uratować przyjaciół przed gangami." },
    { title: "Blue Period", tags: ["dramat", "szkoła", "rozwojowy"], description: "Uczeń odkrywa pasję do malarstwa i sztuki." },
    { title: "Vivy: Fluorite Eye’s Song", tags: ["akcja", "sci-fi", "muzyka"], description: "Sztuczna inteligencja śpiewaczka staje w obronie ludzkości." },
    { title: "Erased", tags: ["tajemnica", "dramat", "sci-fi"], description: "Podróże w czasie w celu powstrzymania morderstwa." },
    { title: "Kaguya-sama: Love is War", tags: ["komedia", "romans", "szkoła"], description: "Dwoje geniuszy rywalizuje, kto pierwszy wyzna miłość." },
    { title: "The Ancient Magus’ Bride", tags: ["fantasy", "romans", "tajemnica"], description: "Dziewczyna zostaje uczennicą tajemniczego maga." },
    { title: "Fruits Basket", tags: ["romans", "komedia", "dramat"], description: "Dziewczyna odkrywa rodzinę z klątwą zwierzęcą." },
    { title: "Mob Psycho 100", tags: ["akcja", "komedia", "fantasy"], description: "Chłopak posiada ogromną moc psychiczną." },
    { title: "Made in Abyss", tags: ["tajemnica", "fantasy", "przygoda"], description: "Dzieci wyruszają w niebezpieczny otchłań." },
    { title: "Made in Abyss: Dawn of the Deep Soul", tags: ["fantasy", "przygoda", "dramat"], description: "Kontynuacja mrocznej podróży w Otchłań." },
    { title: "Your Name", tags: ["romans", "fantasy", "romance"], description: "Dwójka nastolatków tajemniczo wymienia się ciałami." },
    { title: "Sword Art Online", tags: ["akcja", "fantasy", "romans"], description: "Gracze zostają uwięzieni w wirtualnej grze MMORPG." },
    { title: "Akame ga Kill", tags: ["akcja", "walka", "dramat"], description: "Młoda wojowniczka dołącza do rebelii." },
    { title: "Parasyte", tags: ["horror", "akcja", "dramat"], description: "Chłopak zostaje opanowany przez pasożyta." },
    { title: "Black Clover", tags: ["akcja", "fantasy", "przygoda"], description: "Dwóch chłopców rywalizuje o tytuł Króla Czarodziejów." },
    { title: "Hunter x Hunter", tags: ["akcja", "przygoda", "shounen"], description: "Chłopak wyrusza zostać najlepszym łowcą." },
    { title: "Overlord", tags: ["fantasy", "akcja", "strategia"], description: "Gracz zostaje w świecie gry jako potężny nieumarły." },
    { title: "Black Butler", tags: ["tajemnica", "fantasy", "dramat"], description: "Młody hrabia ma demonicznego lokaja." },
    { title: "Soul Eater", tags: ["akcja", "fantasy", "komedia"], description: "Uczniowie szkoły bronią świata przed złymi duszami." },
    { title: "Psycho-Pass", tags: ["sci-fi", "psychologia", "akcja"], description: "System ocenia ludzi pod kątem przestępczych skłonności." },
    { title: "No Game No Life", tags: ["fantasy", "komedia", "przygoda"], description: "Dwoje geniuszy trafia do fantastycznego świata gier." },
    { title: "Toradora", tags: ["romans", "komedia", "szkoła"], description: "Nastolatkowie próbują pogodzić uczucia i codzienność." },
    { title: "Clannad", tags: ["dramat", "romans", "szkoła"], description: "Dziewczyna stara się odnaleźć sens życia w szkole." },
    { title: "Angel Beats", tags: ["akcja", "dramat", "komedia"], description: "W szkole pośmiertnej młodzież walczy o swoje sprawy." },
    { title: "Elfen Lied", tags: ["horror", "dramat", "psychologia"], description: "Dziewczyna z mutantyczną mocą ucieka przed światem." },
    { title: "The Rising of the Shield Hero", tags: ["fantasy", "akcja", "przygoda"], description: "Bohater zostaje bohaterem tarczy w innym świecie." },
    { title: "Fairy Tail", tags: ["fantasy", "przygoda", "akcja"], description: "Czarodzieje wyruszają na przygody w gildii." },
    { title: "That Time I Got Reincarnated as a Slime", tags: ["fantasy", "akcja", "komedia"], description: "Facet odradza się w ciele slime’a w fantastycznym świecie." },
    { title: "Grimgar: Ashes and Illusions", tags: ["fantasy", "przygoda", "dramat"], description: "Grupa bohaterów walczy o przetrwanie w nieznanym świecie." },
    { title: "Ergo Proxy", tags: ["sci-fi", "psychologia", "tajemnica"], description: "Świat po apokalipsie i śledztwo nad androidami." },
    { title: "Hunter x Hunter (2011)", tags: ["akcja", "przygoda", "shounen"], description: "Nowa adaptacja przygód Gon’a i przyjaciół." },
    { title: "Dr. Stone", tags: ["przygoda", "sci-fi", "komedia"], description: "Odbudowa cywilizacji dzięki nauce po katastrofie." },
    { title: "Attack on Titan: Final Season", tags: ["akcja", "dramat", "fantasy"], description: "Ostateczna walka ludzkości z tytanami." },
    { title: "D.Gray-man", tags: ["akcja", "fantasy", "walka"], description: "Egzorcyści walczą z demonami." },
    { title: "Ezoteryczne Losowanie", tags: ["ezoteryka", "magia", "losowanie"], description: "Magiczne losowanie dnia – sprawdź, co Cię czeka!" }
];

function getRecommendation() {
    const prefs = document.getElementById("prefs").value.toLowerCase();
    let filtered = animeList.filter(anime =>
        anime.tags.some(tag => prefs.includes(tag))
    );

    if (filtered.length === 0) filtered = animeList;

    const choice = filtered[Math.floor(Math.random() * filtered.length)];
    
    const resultEl = document.getElementById("result");
    const descEl = document.getElementById("description");

    resultEl.style.opacity = 0;
    descEl.style.opacity = 0;

    resultEl.innerText = `🎬 Polecam: ${choice.title} ⭐`;
    descEl.innerText = choice.description;

    let opacity = 0;
    const interval = setInterval(() => {
        opacity += 0.05;
        resultEl.style.opacity = opacity;
        descEl.style.opacity = opacity;
        if (opacity >= 1) clearInterval(interval);
    }, 30);
}

var str;

function wordGenerator() {
    let wordArr = [
        "Wolverine",
        "SpiderMan",
        "Thor",
        "IronMan",
        "Hulk",
        "CaptainAmerica",
        "Daredevil",
        "Punisher",
        "Deadpool",
        "SilverSurfer",
        "Gambit",
        "Cyclops",
        "Mr.Fantastic",
        "Nightcrawler",
        "NickFury",
        "HumanTorch",
        "IceMan",
        "ProfessorX",
        "Colossus",
        "BuckyBarnes",
        "DoctorStrange",
        "Storm",
        "JeanGrey",
        "Rouge",
        "Elektra",
        "EmmaFrost",
        "Thing",
        "BlackBolt",
        "SheHulk",
        "InvisibleWomen",
        "Namor",
        "BlackPanther",
        "Beast",
        "KittyPryde",
        "Sentry",
        "Hawkeye",
        "LukeCage",
        "IronFist",
        "ScarletWitch",
        "Cable",
        "Hercules",
        "HankPym",
        "MoonKnight",
        "Angel",
        "BetsyBraddock",
        "WarMachine",
        "CarolDanvers",
        "BlackCat",
        "CaptainMarvel",
        "Warpath",
        "Madrox",
        "Quicksilver",
        "SpiderWomen",
        "Domino",
        "vision",
        "BlackWidow",
        "Blade",
        "Speedball",
        "Morph",
        "Nova",
        "Wasp",
        "WonderMan",
        "Falcon",
        "Tigra",
        "Mimic",
        "songbird",
        "ShangChi",
        "StrongGuy",
        "Havok",
        "RickJones",
        "AmadeusCho",
        "Dagger",
        "Cloak",
        "AdamWarlock",
        "MollyHayes",
        "JessicaJones",
        "HowardTheDuck",
        "Wiccan",
        "Cannonball",
        "Longshot",
        "Magik",
        "Jubilee",
        "Hulkling",
        "MachineMan",
        "BlankKnight",
        "RachelGrey",
        "FireStar",
        "LaylaMiller",
        "NicoMinoru",
        "BenReilly",
        "Spectrum",
        "MoonStar",
        "Blink",
        "Polaris",
        "HarryOsborn",
        "SpiderMan2099",
        "Valkyrie",
        "Bishop",
        "Drax",
        "Watcher",
        "RocketRaccon",
        "AntMan",
        "HellStorm",
        "Echo",
        "StarLord",
        "GwenStacy",
        "Mantis",
        "YelenaBelova",
        "SharonCater",
        "Ronan",
        "Sif"
    ];
    let radNum = Math.floor(Math.random() * 112);
    str = wordArr[radNum];
    var arr = str.split("");
    let n = Math.floor(str.length / 2);
    for (let i = 0; i <= n; i++) {
        let randNum = Math.round(Math.random() * str.length - 1);
        arr[randNum] = "-";
    }
    var ans = arr.join("");
    console.log(str);
    return ans;
}

const inner = document.querySelector(".inner")
const word = document.querySelector(".word");
const button = document.querySelector(".btn");
const button2 = document.querySelector(".btn2");
const playArea = document.querySelector(".play-area");
const answer = document.querySelector(".answer");
const head = document.querySelector(".heading");
const guess = document.querySelector(".guessWord");
const subBtn = document.querySelector(".sub");
const subBtn2 = document.querySelector(".sub2");
const point = document.querySelector(".points");
const chance = document.querySelector(".count");
const pointSec = document.querySelector(".point-section");
const countSec = document.querySelector(".count-section");

window.onload = function () {
    word.classList.replace("fadeOut", "fadeIn")
    button.classList.replace("fadeOut", "fadeIn")
    button2.classList.replace("fadeOut", "fadeIn")
}

button.onclick = () => {
    button.classList.replace("fadeIn", "fadeOut")
    inner.classList.add("fadeOut");
    playArea.classList.replace("fadeOut", "fadeIn");
    head.classList.add("animation");
    answer.classList.replace("fadeOut", "fadeIn")
    guess.classList.replace("fadeOut", "fadeIn")
    subBtn.classList.replace("fadeOut", "fadeIn")
    pointSec.classList.replace("fadeOut", "fadeIn");
    countSec.classList.replace("fadeOut", "fadeIn");
    guess.innerHTML = wordGenerator();
}

button2.onclick = () => {
    button2.classList.replace("fadeIn", "fadeOut")
    inner.classList.add("fadeOut");
    playArea.classList.replace("fadeOut", "fadeIn");
    head.classList.add("animation");
    answer.classList.replace("fadeOut", "fadeIn")
    guess.classList.replace("fadeOut", "fadeIn")
    subBtn2.classList.replace("fadeOut", "fadeIn")
    guess.innerHTML = wordGenerator();
}

let count = 5;
let points = 0;

point.innerHTML = points;
chance.innerHTML = count;

function submitBtnCode() {
    if (answer.value.toLowerCase().trim() == str.toLowerCase()) {
        guess.innerHTML = str
        setTimeout(() => {
            guess.innerHTML = wordGenerator();
            answer.value = ""
            count = 5;
            chance.innerHTML = count;
        }, 1500)
        count--;
        points = points + count;
        chance.innerHTML = count;
        point.innerHTML = points;
    } else {
        guess.classList.add("shake")
        setTimeout(() => {
            guess.classList.remove("shake")
        }, 400)
        count--;
        chance.innerHTML = count;
    }
}

subBtn.onclick = () => {
    submitBtnCode();
}

document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        submitBtnCode();
    }
});

subBtn2.onclick = () => {
    submitBtnCode();
}

var str;

function wordGenerator() {
    let wordArr = [
        "Abomination",
        "AdamWarlock",
        "AgathaHarkness",
        "Agamotto",
        "Ajak",
        "AldrichKillian",
        "AligatorLoki",
        "AmericaChavez",
        "Ammit",
        "AncientOne",
        "AntMan",
        "Ares",
        "ArthurHarrow",
        "BaronZemo",
        "BenParker",
        "BenUrich",
        "BillyMaximoff",
        "BlackBolt",
        "BlackKnight",
        "BlackPanther",
        "BlackWidow",
        "Blade",
        "BoastfulLoki",
        "BruceBanner",
        "BuckyBarnes",
        "CaptainAmerica",
        "CaptainCarter",
        "CaptainMarvel",
        "CassieLang",
        "CristinePalmer",
        "ClassicLoki",
        "Clea",
        "Collector",
        "DarcyLewis",
        "Daredevil",
        "DrOctopus",
        "DrStrange",
        "Dormammu",
        "Drax",
        "Druig",
        "EDITH",
        "Echo",
        "EddieBrock",
        "Ego",
        "Electro",
        "Elektra",
        "FRIDAY",
        "Falcon",
        "FlashThompson",
        "FoggyNelson",
        "Frigga",
        "Gamora",
        "Gargantos",
        "Gilgamesh",
        "GorrTheGodButcher",
        "Grandmaster",
        "GreenGoblin",
        "Groot",
        "HankPym",
        "HappyHogan",
        "Hawkeye",
        "Heimdall",
        "Hela",
        "HowardStark",
        "HowardTheDuck",
        "Hulk",
        "Hydra",
        "Ikaris",
        "InvisibleWomen",
        "IronFist",
        "IronMan",
        "IronHeart",
        "JJonahJameson",
        "JARVIS",
        "JamesWesley",
        "JaneFoster",
        "JimmyWoo",
        "JessicaJones",
        "JakeLockley",
        "Kang",
        "KarenPage",
        "KarlMordo",
        "KarunPatel",
        "KateBishop",
        "Khonshu",
        "KidLoki",
        "KillGrave",
        "Kingo",
        "Kingpin",
        "Korg",
        "LaylaELFauly",
        "LizAllan",
        "Logan",
        "Loki",
        "luckyThePizzaDog",
        "LukeCage",
        "MBaku",
        "MODOK",
        "Makkari",
        "Malekith",
        "Mantis",
        "MariaHill",
        "MariaRambeau",
        "MonicaRambeau",
        "MarkSpector",
        "MayParker",
        "Mephisto",
        "MissMinutes",
        "MrFantastic",
        "Mobius",
        "MoonKnight",
        "MrKnight",
        "MilesMorales",
        "MoganStark",
        "MsMarvel",
        "Mysterio",
        "NateBarton",
        "Nebula",
        "NedLeeds",
        "NickFury",
        "NoobMaster69",
        "Odin",
        "PeggyCarter",
        "PepperPotts",
        "Phastos",
        "PhilCoulson",
        "PrsidentLoki",
        "ProfessorX",
        "Punisher",
        "QuickSilver",
        "RalphBohner",
        "RavonnaRenslayer",
        "RazerFist",
        "RedGuardian",
        "RedSkull",
        "RocketRaccoon",
        "Ronan",
        "ScarletScarab",
        "ScarletWitch",
        "Sersi",
        "ShangChi",
        "SharonCarter",
        "SheHulk",
        "Shuri",
        "Sif",
        "SpiderMan",
        "Sprite",
        "StarLord",
        "Starfox",
        "StephenStrange",
        "SteveRogers",
        "StevenGrant",
        "Surtur",
        "Sylvie",
        "Taskmaster",
        "Taweret",
        "Thanos",
        "Thena",
        "Thor",
        "Throg",
        "TommyMaximoff",
        "TonyStark",
        "Ultron",
        "Valkyrie",
        "Vision",
        "Venom",
        "WarMachine",
        "Wasp",
        "Watcher",
        "Whiplash",
        "WhiteVision",
        "WinterSokdier",
        "Wong",
        "YelenaBelova",
        "YellowJacket",
        "Yondu",
        "Zemo"
    ];
    let radNum = Math.floor(Math.random() * 178);
    str = wordArr[radNum];
    var arr = str.split("");
    let n = Math.floor(str.length / 2);
    for (let i = 0; i <= n; i++) {
        let randNum = Math.round(Math.random() * str.length - 1);
        arr[randNum] = "-";
    }
    var ans = arr.join("");
    return ans;
}

const inner = document.querySelector(".inner");
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
const sec = document.querySelector(".section");
const finalPoint = document.querySelector(".final-point");
const finalSec = document.querySelector(".final-section");

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
    pointSec.classList.replace("fadeOut", "fadeIn");
    countSec.classList.replace("fadeOut", "fadeIn");
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
            answer.value = "";
        }, 1500)
        points += 5;
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

    if (count === 0) {
        playArea.classList.replace("fadeIn", "fadeOut");
        sec.classList.add("fadeOut");
        finalSec.classList.replace("fadeOut", "fadeIn");
        finalPoint.innerHTML = points;
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
fateButton = document.getElementById("fateButton");
container = document.getElementById("container");
orb = document.querySelector(".orb");
let currentAudio = null;

const fates = [

    {
        message:["blah", "blah", "blah"],
        audio: "media/sounds/buzz.wav",
        background: "media/background/sky-clouds.gif",
    },
    {
        message: ["blah", "blah", "blah"],
        audio: "media/sounds/cerebral.wav",
        background: "media/background/field.gif",
    },
    {
        message: ["blah", "blah", "blah"],
        audio: "media/sounds/chirp.wav",
        background: "media/background/city.gif",
    },
    {
        message: ["blah", "blah", "blah"],
        audio: "media/sounds/marker.wav",
        background: "media/background/snow-storm-blizzard.gif",
    },
    {
        message: ["blah", "blah", "blah"],
        audio: "media/sounds/Ocean.wav",
        background: "media/background/ocean-storm.gif",
    },
    {
        message: ["blah", "blah", "blah"],
        audio: "media/sounds/party!.wav",
        background: "media/background/highway.gif",
    },
    {
        message: ["blah", "blah", "blah"],
        audio: "media/sounds/passing.wav",
        background: "media/background/",
    },
    {
        message: ["blah", "blah", "blah"],
        audio: "media/sounds/place.wav",
        background: "media/background/",
    },
    {
        message: ["blah", "blah", "blah"],
        audio: "media/sounds/storm.wav",
        background: "media/background/thunder.gif",
    },
    {
        message: ["blah", "blah", "blah"],
        audio: "media/sounds/thomas.wav",
        background: "media/background/",
    },
]



fateButton.addEventListener("click", e => {
 
const randomIndex = Math.floor(Math.random() * fates.length);
const randomFate = fates[randomIndex];

orbAnimation();
orb.style.backgroundImage = "url(" + randomFate.background + ")";

orb.style.backgroundImage = "url(media/swans-filth.gif))";


container.style.backgroundImage = `url(${randomFate.background})`;


if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; 
  }

currentAudio = new Audio(randomFate.audio);
currentAudio.volume = 0.5;
currentAudio.loop = true;
currentAudio.play();

console.log("clicked");

})


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function orbAnimation() { 
    let sleeptime = 50;
    while (sleeptime < 1000) {
        for (const fate of fates) { 
            orb.style.backgroundImage = "url(" + fate.background + ")";
            await sleep(sleeptime)
            sleeptime += (sleeptime/8);
            console.log("sleeptime: " + sleeptime)
        }

}
}

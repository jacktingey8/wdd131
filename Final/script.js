const fateButton = document.getElementById("fateButton");
const container = document.getElementById("container");
const orb = document.querySelector(".orb");
const text = document.getElementById("text");
const instructions = document.getElementById("instructions");
const title =  document.querySelector("h1");


let currentAudio = null;
let messageIndex = 0;
let randomFate = null;
let faterolled = false;

let fates = [

    {
        message:["11/20/2063", "Tens of Thousands of feet in the air", "A variable exponentially decreasing","Every passenger died", "But amoung the commotion of your final moments","You are glad that you never made it to your destination"],
        audio: "media/sounds/buzz.wav",
        background: "media/background/sky-clouds.gif",
    },
    {
        message: ["6/08/2082", "You have long forgotten who you are", "but vividly remember the feeling of grass between your toes", "in a fit of terminal lucidity", "you decide that you want to go"],
        audio: "media/sounds/cerebral.wav",
        background: "media/background/field.gif",
    },
    {
        message: ["1/15/2033", "The view from halfway down is underwhelming", "Your last thoughts are of petty self-criticisms "," \"Why must I make such a spectacle out of everything\"", "\"I'm surely not worth the mess\""],
        audio: "media/sounds/chirp.wav",
        background: "media/background/city.gif",
    },
    {
        message: ["--/--/----", "You live far past my reach", "You outlast your spieces", "And roam a desolated planet", "\"I cannot die\""],
        audio: "media/sounds/marker.wav",
        background: "media/background/snow-storm-blizzard.gif",
    },
    {
        message: ["2/28/2040", "Adrift in a desolate sea", "Cold and Empty","Exhaustion lulls you to sleep","and You forget how to breath"],
        audio: "media/sounds/Ocean.wav",
        background: "media/background/ocean-storm.gif",
    },
    {
        message: ["2/12/2040", "You swore you could make it home","But you weren't as strong as you thought you were", "You survived the Crash", "But were smothered by the air bag"],
        audio: "media/sounds/party!.wav",
        background: "media/background/highway.gif",
    },
    {
        message: ["you pass in your sleep","unremarkable and unremembered"],
        audio: "media/sounds/passing.wav",
        background: "media/background/giphy.gif",
    },
    {
        message: ["8/6/2076", "You are surrounded by your offspring", "You have no regrets and no fears", "You have lived long enough to be ready to leave","You close your eyes and drift into sleep"],
        audio: "media/sounds/place.wav",
        background: "media/background/tree.gif", 
    },
    {
        message: ["9/26/2036", "You reap what you have sowed","One broken promise for another","The earth opens its maw","and swallows you whole","and for the second time, is reborn "],
        audio: "media/sounds/storm.wav",
        background: "media/background/thunder.gif",
    },
    {
        message: ["7/13/2038", " A spectacle in a cell of moral compromise", "An audience made up of everyone you have ever met", "Every sin you've ever committed displayed on screens hung around the stage","The audience erupts in coordinated jets of laughter","You are subsequently flattened by a piano"],
        audio: "media/sounds/thomas.wav",
        background: "media/background/crowd.gif",
    },
]


fateButton.addEventListener("click", e => {
 
faterolled = true;

const randomIndex = Math.floor(Math.random() * fates.length);
randomFate = fates[randomIndex];

instructions.style.display = "none";
title.style.display = "none";

messageIndex = 0;
fadeIn(container, 2000);
container.style.backgroundImage = `url(${randomFate.background})`;

fadeIn(orb, 3000);
orb.style.backgroundImage = "url(media/swans-filth.gif)";

text.style.display = "block";
fadeIn(text, 4000);

text.textContent = randomFate.message[messageIndex];


fateButton.style.display = "none";


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

text.addEventListener("click", e => {

    console.log("clicked text");
    messageIndex++;
    text.textContent = randomFate.message[messageIndex];

    if (messageIndex >= randomFate.message.length) {
        text.style.display = "none";
        fadeIn(fateButton, 2000);
        fateButton.style.display = "block";
        faterolled = false;
        messageIndex = 0;
    
        fadeIn(instructions,4000);
        fadeIn(title,4000);
        instructions.style.display = "block";
        title.style.display = "block";
        instructions.style.border = "1px solid white";
        title.style.border = "1px solid white";
        
    }


})

function fadeIn(element, duration) {
    
    element.animate(
        [
            { opacity: 0 },
            { opacity: 1 }
        ], 
        {
            duration: duration,
            easing: 'ease-in-out',
            fill: 'forwards' 
        }
    );
}



function flashBackground() {
    if (faterolled) {
        return; 
    }

    const backgrounds = fates.map(fate => fate.background);

    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    orb.style.backgroundImage = `url(${randomBackground})`;
    console.log("Flashing background:", randomBackground);
}

setInterval(flashBackground, 1000);  


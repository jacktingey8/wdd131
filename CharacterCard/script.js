const Character= {
    name: "Bongwater",
    class: "Goblin",
    level: 1,
    health: 100,

    attacked(){
    this.health -= 20;
    console.log("AHHHHHHHHHHHHHHH");
    renderCharacter();
    },

    levelup(){
    this.level += 1;
    console.log("LEVEL UP!");
    renderCharacter();
    }
}

function renderCharacter() {
    const stats = `
    <p class="name">${Character.name}</p>
    <p>Class: ${Character.class}</p>
    <p>Level: ${Character.level}</p>
    <p>Health: ${Character.health}</p>
    `;
    document.querySelector(".stats").innerHTML = stats;
}

renderCharacter();

document.querySelector("#attack-btn").addEventListener("click", () => Character.attacked());
document.querySelector("#level-up-btn").addEventListener("click", () => Character.levelup());
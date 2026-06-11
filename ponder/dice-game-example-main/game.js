
const images= document.querySelectorAll("#gameboard img");

document.getElementById("rollButton").addEventListener("click", event => {
console.log("Roll button clicked!");
images.forEach(image => {
    if (isDieUnlocked(image)){
     image.src = "assets/die_rolling.gif";   
    }
    
});

setTimeout(() => {

    images.forEach(image => {
        if (isDieUnlocked(image)){
        image.src = "assets/white_dice_" + Math.floor(Math.random() * 6 + 1) + ".gif";}
    });


},2000);


function isDieUnlocked(dieImage){
    const checkboxes = document.querySelectorAll("#gameboard input[type='checkbox']");

    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);

    return unchecked.find (unchecked => unchecked.className === dieImage.className);
}

});

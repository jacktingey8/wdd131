let mode = document.querySelector('#theme-toggle');

mode.addEventListener('change', theme);

function theme() {
    // Use the variable 'mode' you defined above
    if (mode.value === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.querySelector('img').src = 'byui-logo-white.png';
        document.getElementById('info').style.border = '1px solid white';
        document.querySelector('h2').style.color = 'lightblue';
    } 
    else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.querySelector('img').src = 'byui-logo-blue.webp';
        document.getElementById('info').style.border = '1px solid black';
        document.querySelector('h2').style.color = 'darkblue';
    }
}
const gallery = document.querySelector('.gallery');
const dialog = document.querySelector('#myDialog');
const dialogImage = dialog.querySelector('img');
const closeButton = dialog.querySelector('#closeDialog');
gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log('Image clicked');
    dialogImage.src = e.target.src;
    dialogImage.src = dialogImage.src.replace('image.png','norris-full.jpg');
    dialog.showModal();
}


// Close modal on button click
closeButton.addEventListener('click', () => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        dialog.close();}
    });


const menuButton = document.querySelector('.Menu');
const navMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

menuButton.addEventListener('click', openMenu);

function openMenu() {
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
        navLinks.forEach(link => {
            link.style.display = 'block';
        });
    }
}
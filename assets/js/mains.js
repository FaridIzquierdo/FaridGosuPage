let menuIconOpen = document.getElementById('menu-icon-open');
let menuIconClose = document.getElementById('menu-icon-close');
let navbar = document.querySelector('.navbar');

menuIconOpen.addEventListener('click', () => {
    menuIconOpen.style.display = 'none';
    menuIconClose.style.display = 'block';
    console.log('Menú abierto');
    navbar.classList.toggle('active');
});

menuIconClose.addEventListener('click', () => {
    menuIconClose.style.display = 'none';
    menuIconOpen.style.display = 'block';
    console.log('Menú cerrado');
    navbar.classList.toggle('active');
});




//scroll sections
let sections= document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let btn_about_me= document.querySelector('.btn-about-me');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top< offset + height){
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        }
    });

    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
}


const themeButton = document.getElementById('theme-button');
const mySong = document.getElementById('mySong');
    themeButton.addEventListener('click', () => {
        // play the song
        mySong.play();
    });



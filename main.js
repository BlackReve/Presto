let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logo-navbar');
let lightsaber = document.querySelector('#lightsaber');
let collapse = document.querySelector('#collapse');



let check = false;



console.log(lightsaber);



window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-yellow');
        collapse.classList.remove('bg-black');
        collapse.classList.add('bg-yellow');
        navbar.style.height = '140px';
        links.forEach((link) => {
            link.style.color = 'var(--black)';
        })
        logoNavbar.src = 'http://127.0.0.1:5500/Media/logo-b.png';
        lightsaber.src = 'http://127.0.0.1:5500/Media/sl-black.png';
    } else {
        navbar.classList.add('bg-black');
        navbar.classList.add('bg-yellow');
        collapse.classList.add('bg-black');
        collapse.classList.add('bg-yellow');
        navbar.style.height = '70px';
        links.forEach((link) => {
            link.style.color = 'var(--yellow)';
        });
        logoNavbar.src = 'http://127.0.0.1:5500/Media/logo-y.png';
        lightsaber.src = 'http://127.0.0.1:5500/Media/sl-yellow.png';
    }
});

lightsaber.addEventListener('click', () => {
    if (check == false) {
        lightsaber.style.transform = 'rotate(-90deg)'
        check = true;
    } else {
        lightsaber.style.transform = 'rotate(0deg)'
        check = false;
    }
});





// Chiamate Asincrone
// setInterval(): crea un loop infinito in cui possiamo gestire la durata delle singole iterazioni
// il setInterval() è una funzione che vuole due parametri. Il primo parametro è la callback, il secondo è l'intervallo di tempo che deve passare tra una iterazione e l'altra
// clearInterval(): oulire l'intervallo e bloccarlo
let firstNumber = document.querySelector('#first-number');
let secondNumber = document.querySelector('#second-number');
let tirthNumber = document.querySelector('#tirth-number');

let confirm = true;
function createInterval(n, element, time) {

    let counter = 0;

    let interval = setInterval(() => {
        if (counter < n) {
            counter++
            element.innerHTML = counter;
        } else {
            console.log('Mi sono fermato');
            clearInterval(interval);

        }

    }, time);

    setTimeout(() => {
        confirm = true;
    }, 8000);
}

createInterval(500, firstNumber, 20);
createInterval(300, secondNumber, 30);
createInterval(100, tirthNumber, 100);


// IntersectionObserve: è una Classe del browser che fa scattare una funzione nel momento in cui sul browser sono visibili gli elementi html che noi indichiamo
// new: keyword che mi permette di generare un oggetto partendo da una Classe
// setTimeout: fa partire un blocco di istruzuioni dopo tot secondi

let observe = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting && confirm) {
            createInterval(500, firstNumber, 20);
            createInterval(300, secondNumber, 30);
            createInterval(100, tirthNumber, 100);
            confirm = false;

        }
    })
});

observe.observe(firstNumber);

let reviews = [
    { user: 'Matteo', description: 'Il più bel sito di annunci al mondo', rank: 5 },
    { user: 'Alin', description: 'Veramente non mi sa di niente', rank: 1 },
    { user: 'Michael', description: 'Mi piace tranne che per star Treck', rank: 3 },
    { user: 'Arina', description: 'Preferisco Star Treck', rank: 2 },
]

let swiperWrapper = document.querySelector('.swiper-wrapper');

reviews.forEach((recensione) => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `<div class="card-review">
                <p class="text-center">${recensione.description}</p>
                <p class="h4 text-center">${recensione.user}</p>
                <di class="d-flex justify-content-center star">
                  
                </div>
              </div>`;

    swiperWrapper.appendChild(div);
});

let stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
    for (let i = 1; i <= reviews[index].rank; i++) {
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-star');
        star.appendChild(icon);
    }

    let difference = 5 - reviews[index].rank;

    for (let i = 1; i <= difference; i++) {
        let icon = document.createElement('i');
        icon.classList.add('fa-regular', 'fa-star');
        star.appendChild(icon);
    }
});

// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    effect: "flip",
    grabCursor: true,
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

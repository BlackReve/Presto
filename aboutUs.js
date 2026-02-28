let opener = document.querySelector('.opener');
let circle = document.querySelector('.circle');

let teacher = [
    {name: 'Matteo', description: "Docente front-end dell'hackademy", url: './Media/Matteo.png'},
    {name: 'Leonardo', description: "Docente front-end dell'hackademy", url: './Media/Leonardo.png'},
    {name: 'Clara', description: "Docente front-end dell'hackademy", url: './Media/Clara.png'},
    {name: 'Rebecca', description: "Docente front-end dell'hackademy", url: './Media/Rebecca.png'},

];

teacher.forEach( (docente)=> {
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${docente.url})`;
    circle.appendChild(div);
});

let moveDivs = document.querySelectorAll('.moved');
let flipCard = document.querySelector('.flip-card');
let cardWrapper = document.querySelector('#cardWrapper');

let check = false;

opener.addEventListener('click', ()=> {
   if(check == false){
     opener.style.transform ='rotate(45deg)';
    moveDivs.forEach( (moved, i)=> {
        let angle = (360 * i) / moveDivs.length;
        moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
    } );
    check = true;
   } else {
    check = false;
    opener.style.transform = 'rotate(0deg)';
    moveDivs.forEach((moved, i)=> {
        moved.style.transform = '';
    });
    cardWrapper.innerHTML = '';
   }
});


let cardName = document.querySelector('#cardName');
let cardDescription = document.querySelector('#cardDescription');



moveDivs.forEach( (moved, i)=> {
    moved.addEventListener( 'click', ()=>{
        flipCard.classList.remove('d-none');
        let docente = teacher[i];
        cardWrapper.innerHTML = '';
        let div = document.createElement('div');
        div.classList.add('flip-card');
        div.innerHTML = `
        <div class="inner">
                    <div class="inner-face"></div>
                    <div class="inner-back">
                        <p id="cardName" class="h4">${docente.name}</p>
                        <p id="cardDescription" class="lead">${docente.description}</p>
                    </div>
                </div>
        `;

        cardWrapper.appendChild(div);
        let innerFace = document.querySelector('.inner-face');
        innerFace.style.backgroundImage = `url(${docente.url})`;
        

    })
} )